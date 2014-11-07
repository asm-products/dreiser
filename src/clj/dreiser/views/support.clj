(ns dreiser.views.support
  (:use [hiccup.core :only (html)]
        [hiccup.page :only (html5 include-css include-js)])
  (:require [clojure.string :as string]
            [dreiser.langs :as langs]
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
     (include-js "/js/vendor.js")
     (include-css "https://fonts.googleapis.com/css?family=Playfair+Display:700,700italic")
     (include-css "https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300")
     (include-css "https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css")
     (cv/ga)
     ]
    [:body
     (cv/fixed-nav customer)
     [:section.white-block.container
       [:div.row
         [:section.col-xs-12.col-md-8.col-md-offset-2
          [:h3.text-uppercase "Contact us"]
          (cv/contact-info)
         ]]]]))

