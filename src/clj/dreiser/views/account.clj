(ns dreiser.views.account
  (:use [hiccup.core :only (html)]
        [hiccup.page :only (html5 include-css include-js)])
  (:require [clojure.string :as string]
            [dreiser.langs :as langs]
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
     (include-js "/js/vendor.js")
     (include-css "https://fonts.googleapis.com/css?family=Playfair+Display:700,700italic")
     (include-css "https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300")
     (cv/ga)
     ]
    [:body
     (cv/fixed-nav customer)
     [:section.container
       [:div.row
         [:section.col-xs-12.col-md-8.col-md-offset-2
           [:form.form-horizontal {:method "POST" :action "/account" :role "form"}
             [:fieldset
               [:legend "Settings"]
               [:div.form-group
                 [:label.col-lg-2.control-label {:for "language"} "Language"]
                 [:div.col-lg-10
                    [:select.form-control {:name "language"}
                     (for [lang langs/langs]
                       (if (= (:language customer) (key lang))
                         [:option {:value (key lang) :selected ""} (:name (val lang))]
                         [:option {:value (key lang)} (:name (val lang))]))
                     ]]]
              [:div.form-group
                [:div.col-lg-10.col-lg-offset-2
                 [:button.btn.btn-primary "Save"]]]
              ]]
         ]]
        [:div.row
         [:section.col-xs-12.col-md-8.col-md-offset-2
          [:p "You are on the " (:plan customer) " plan."]
          [:p "Contact us via email "
           [:a {:href "mailto:team@dreiser.co"} "team@dreiser.co"]
           " if you want to change your plan or cancel your account."]
          ]]
      ]]))

