(ns dreiser.views.landing
  (:use [hiccup.core :only (html)]
        [hiccup.page :only (html5 include-css include-js)])
  (:require [clojure.string :as string]
            [dreiser.views.common :as cv]))




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
     (include-js "https://assets.helpful.io/assets/widget.js")
     (include-css "https://fonts.googleapis.com/css?family=Playfair+Display:700,700italic")
     (include-css "https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300")
     (include-css "https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css")
     (include-js "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js")
     (cv/ga)
     ]
    [:body.landing-page
     [:div.row.hero.block
      [:img {:src "/hero.jpg"}]
      [:a.btn.btn-primary.btn-sm.login-button {:href "/login"} "Log In"]
      [:a.btn.btn-primary.btn-sm.contact-button {:href "mailto:dreiser@helpful.io" :data-helpful "dreiser"} "Contact us"]
      [:div.logo-block
       [:p.big-logo "Dreiser"]
       [:p "Proofread your texts"]]]
     [:div.row.orange.block
      [:header.col-md-12.center-block
        [:h2 "How it works"]]
      [:div.col-xs-12.col-md-8
          [:p "<strong>Dreiser</strong> is service for proofreading you text content.
           We can scan and find potential grammar & spelling
           mistakes in your products descriptions, blog posts and web pages."]
          [:p "Every day we will check all your content and send report with potential problems via email."]]]
     [:div.row.white.block
      [:header.col-xs-12
       [:h2 "Why do you need it"]]
      [:div.col-xs-12.col-md-8
       [:ul
        [:li "Avoid stupid mistakes in your text. Customers like quality.
         Everything you do should be perfect: your products, your logo, payment experience and ... text on your site and blog."]
        [:li "Mistakes in text may cause some problem with ranking in Google. Customers wouldn't be able to find your products because of the simple typos"]]]]
     [:div.light-grey.block
       [:div.row
         [:header.col-xs-12
           [:h2 "How to use it"]
           [:p "Get first check result just in few minutes"]]
         [:div.col-xs-12.col-md-8
           [:ul
            [:li
             [:h4 "Create account"]
             [:p "Signup with one of our plans. You have 30 days money back guarantee"]]
            [:li
              [:h4 "Select language"]
              [:p "Different English dialects are available. More languages will come soon."]]
            [:li
              [:h4 "Press Start button"]
              [:p "First check result will be availbe just in few minutes. You will receive reports from us couple times per week on you email."]]
          ]]
         [:div.col-md-6
          [:img {:src "/screen1.png"}]]]
      ]
     (cv/all-pricing)
     (cv/footer)]))

