(ns dreiser.html
  (:use [hiccup.core :only (html)]))

(defn hiccup->html [hc]
  (clojure.string/join
   (map (fn[x](html x)) hc)))


(defn clean-html [html]
  (let [output-settings (doto (new org.jsoup.nodes.Document$OutputSettings))]
    (.prettyPrint output-settings false)
    (org.jsoup.Jsoup/clean html "" (org.jsoup.safety.Whitelist/none) output-settings)))

(defn strip-html [html-str]
    (clojure.string/replace
      (clean-html (clojure.string/replace html-str #"\"" "'"))
      #"&nbsp;" " ")
  )


