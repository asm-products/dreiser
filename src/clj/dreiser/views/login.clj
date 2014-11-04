(ns dreiser.views.login
  (:use [hiccup.core :only (html)]
        [hiccup.page :only (html5 include-css include-js)])
  (:require [clojure.string :as string]
            [dreiser.views.common :as cv]))




(defn fixed-nav []
  [:nav {:data-magellan-expedition "fixed"}
    [:div.row.clearfix
     [:dl.sub-nav.right
      [:dd {:data-magellan-arrival "pricing"}
       [:a {:href "/#pricing"} "Pricing"]]
      [:dd
       [:a.button.tiny.dark-blue-button {:href "/login"} "Log In"]]
      ]
     [:ul.title-area
      [:li.logo
       [:a {:href "/"} "Dreiser"]]]
     ]])


(defn index []
  (html5 {:lang "en"}
    [:head
      [:meta {:charset "UTF-8"}]
      [:meta {:name "author" :content "Hashobject Ltd <team@hashobject.com>"}]
      [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"}]
      [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0, user-scalable=no"}]
      [:link {:href "/favicon.png" :rel "shortcut icon"}]
     (include-css "/css/app.css")
     (include-js "/js/vendor.js")
     (include-css "http://fonts.googleapis.com/css?family=Playfair+Display:700,700italic")
     (include-css "http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300")
     (cv/ga)
     ]
    [:body
     (fixed-nav)
     [:section.pricing-block.white-block
       [:div.row
        [:div.text-center.columns.small-8.small-centered
         [:h3 "Please login with your Shopify account"]
         [:p "Enter url of you Shopify shop and press Log In"]
         (cv/login-form)]]]]))

