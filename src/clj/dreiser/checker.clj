(ns dreiser.checker
  (:require [dreiser.langtool :as ltool]
            [dreiser.entities :as ents]))



(defn- check-prop [proplabel propname resource customer report-id]
  (let [prop (get resource propname)
        language (get customer "language" "AmericanEnglish")
        results (ltool/check prop language)
        value (:value results)
        errors (:checks results)]
     ; TODO (Anton) check Clojure STM docs
     (doall
       (for [error errors]
        (let [d {
           :report report-id
           :resource_type (pr-str (:shopify.resources/type resource))
           :resource_id (:id resource)
           :resource_content (prn-str resource)
           :prop_name proplabel
           :prop_value (get resource propname)
           :value value
           :error_msg (:message error)
           :error_short_msg (:shortMessage error)
           :suggestions (clojure.string/join "," (:suggestedReplacements error))
           :error_offset (:offset error)
           :error_column (:column error)
           :error_end_column (:endColumn error)
           :error_line (:line error)
           :error_start_pos (:fromPos error)
           :error_end_pos (:toPos error)}]
          (ents/create-check d customer))))))


(defn check-product [r customer report-id]
  (let [title-check (check-prop "title" :title r customer report-id)
        body-check (check-prop "description" :body-html r customer report-id)]
      (concat title-check body-check)))


(defn check-page [r customer report-id]
  (let [title-check (check-prop "title" :title r customer report-id)
        body-check (check-prop "content" :body-html r customer report-id)]
      (concat title-check body-check)))


(defn check-article [r customer report-id]
  (let [title-check (check-prop "title" :title r customer report-id)
        body-check (check-prop "content" :body-html r customer report-id)]
      (concat title-check body-check)))
