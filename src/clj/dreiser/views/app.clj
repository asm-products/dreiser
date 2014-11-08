(ns dreiser.views.app
  (:use [hiccup.core :only (html)]
        [hiccup.page :only (html5 include-css include-js)])
  (:require [clojure.string :as string]
            [dreiser.views.common :as cv]))


(defn index [customer]
  (html5 {:lang "en"}
    [:head
      [:meta {:charset "UTF-8"}]
      [:meta {:name "author" :content "Hashobject Ltd <team@hashobject.com>"}]
      [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"}]
      [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0, user-scalable=no"}]
      [:link {:href "/favicon.png" :rel "shortcut icon"}]
      (include-css "/css/app.css")
      (include-css "https://fonts.googleapis.com/css?family=Playfair+Display:700,700italic")
      (include-css "https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300")
      (include-js "/js/vendor.js")
      (cv/ga)]
    [:body
      (cv/fixed-nav customer)
      [:div {:id "app"}]
      ;; implement easy support option. Maybe online chat
      ;(cv/about)
      (include-js "https://fb.me/react-0.11.1.js")
      ;(include-js "/out/goog/base.js")
      (include-js "app.js")
      ;[:script
      ; "goog.require('dreiser.core');"
      ; ]
     ]))

