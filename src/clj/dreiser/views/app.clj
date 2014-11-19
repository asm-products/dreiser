(ns dreiser.views.app
  (:use [hiccup.core :only (html)]
        [hiccup.page :only (html5 include-css include-js)])
  (:require [clojure.string :as string]
            [dreiser.views.common :as cv]))


(defn index [customer]
  (html5 {:lang "en"}
    [:head
      [:meta {:charset "UTF-8"}]
      [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"}]
      [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0, user-scalable=no"}]
      [:link {:href "/favicon.png" :rel "shortcut icon"}]
      [:link {:href "/humans.txt" :rel "author"}]
      (include-css "/css/app.css")
      (include-css "https://fonts.googleapis.com/css?family=Playfair+Display:700,700italic")
      (include-css "https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300")
      (include-js "/js/vendor.js")
      (include-js "https://assets.helpful.io/assets/widget.js")
      (include-js "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js")
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

