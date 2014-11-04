(ns dreiser.reporter
  (:use [hiccup.core :only (html)]
        [hiccup.page :only (html5 include-css include-js)])
  (:require [clojure.edn :as edn]
            [dreiser.langtool :as ltool]
            [dreiser.entities :as ents]
            [dreiser.utils :as utils]
            [dreiser.html :as h]))



(defn suggestions-html [suggestions]
  (if (empty? suggestions)
    ""
    (let [suggs (clojure.string/split suggestions #",")]
      (dreiser.html/hiccup->html (for [s suggs] [:li s])))))


(defn error-html [error-id wrong-word error-msg suggs-html]
  [[:span.check-wrong-word {:data-dropdown error-id} wrong-word]
    [:div.f-dropdown.content {:id error-id :data-dropdown-content ""}
     [:h4 error-msg]
     (if (> (count suggs-html) 0) [:ul suggs-html])]])

(defn wrap-error [wrong-word suggestions error-msg]
  (let [error-id (str "drop-" (utils/uuid))
        suggs-html (suggestions-html suggestions)
        html (error-html error-id wrong-word error-msg suggs-html)]
    (h/hiccup->html html)))

(defn gen-check-report [check orig-val]
  (let [suggestions (:suggestions check)
        error (subs orig-val (:error_start_pos check) (:error_end_pos check))
        wrapped-error (wrap-error error suggestions (:error_msg check))
        offset-inc (- (count wrapped-error) (count error))]
    {:error error
     :wrapped-error wrapped-error
     :start-pos (:error_start_pos check)
     :end-pos (:error_end_pos check)
     :offset-inc offset-inc}))



(defn gen-checks-reports [same-prop-checks orig-val]
  (let [reps (map #(gen-check-report % orig-val) same-prop-checks)] reps))


(defn update-str-with-pos [s np start end]
  (let [beg (subs s 0 start)
        fin (subs s end)]
      (str beg np fin)))

(defn report-property [prop-value reports]
  (reduce (fn [acc r]
            (let [old-value (:value acc)
                  new-start-pos (+ (:offset-inc acc) (:start-pos r))
                  new-end-pos (+ (:offset-inc acc) (:end-pos r))
                  new-value (update-str-with-pos old-value (:wrapped-error r) new-start-pos new-end-pos)]
              {:offset-inc (+ (:offset-inc r) (:offset-inc acc))
               :value new-value}))
          {:value prop-value :offset-inc 0} reports))


(defn report-props [grouped-checks-by-prop]
  (map (fn [e]
         (let [prop-name (key e)
               checks (val e)
               prop-value (:value (first checks))
               generated-reports (sort-by :start-pos < (gen-checks-reports checks prop-value))
               new-value (:value (report-property prop-value generated-reports))]
           [prop-name new-value (count checks)]))
       grouped-checks-by-prop))

(defn count-errors-for-resource [reports]
  (reduce (fn [acc report] (+ acc (last report))) 0 reports))

(defn count-errors-for-types [reports]
  (reduce (fn [acc report] (+ acc (last report))) 0 reports))

(defn generate-report-resources [customer-id resource-type report-id]
  (let [grouped-checks (ents/active-errors customer-id resource-type report-id)]
    (map (fn [e]
           (let [resource-id (key e)
                 grouped-checks-by-prop (val e)
                 reports (report-props grouped-checks-by-prop)
                 resource-str (:resource_content (first (second (first grouped-checks-by-prop))))
                 resource (edn/read-string resource-str)
                 num-of-errors-for-resource (count-errors-for-resource reports)]
           [resource-id resource reports num-of-errors-for-resource]))
         grouped-checks)))



(defn report-resources [customer-id resource-type report-id]
  (let [resources-reports (generate-report-resources customer-id resource-type report-id)
        num-errors-for-types (count-errors-for-types resources-reports)]
      {:reports resources-reports
       :num-of-errors num-errors-for-types}))

