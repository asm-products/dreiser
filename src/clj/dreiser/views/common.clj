(ns dreiser.views.common
  (:use [hiccup.core :only (html)]
        [hiccup.page :only (html5 include-css include-js)])
  (:require [clojure.string :as string]
            [dreiser.plans :as plans]))



(defn fixed-nav [customer]
  [:nav {:data-magellan-expedition "fixed"}
    [:div.row.clearfix
     [:dl.sub-nav.right
      [:dd
       [:a {:href "/account"} (:shop_owner customer)]]
      [:dd
       [:a {:href "/support"} "Support"]]
      [:dd
       [:a {:href "/logout"} "Logout"]]]
     [:ul.title-area
      [:li.logo
       [:a {:href "/"} "Dreiser"]]]
     ]])


(defn pricing [id pname pprice features]
  [:ul.pricing-table.columns.large-4.medium-4.small-12.fly-in-animation
    [:li.title pname
    [:li.description
      [:strong "check"]
      [:small features]]
;    [:li.bullet-item "Products"]
    [:li.bullet-item "Daily reports"]
    [:li.bullet-item "Support via email"]
    [:li.price
      [:strong pprice]
      [:p "USD/month"]]
    [:li.cta-button
      [:a.button.green-button {:href (str "/shopify/payment?plan=" (name id))} "Try now"]]]])

(defn all-pricing []
  [:section.pricing-block.white.block
   [:div.row
    [:header.text-center.columns.small-12
     [:h2 "Pricing"]
     [:p "Every business has its own constraints. That is why we developed pricing plans that suites your business!"]]
    [:div
      (reverse
        (map (fn [plan]
         (pricing (key plan) (:name (val plan)) (:price (val plan)) (clojure.string/join ", " (:features (val plan))))
           ) plans/plans))
      [:div.text-center.columns.small-12
       [:p "We do have 30 days money back guarantee. If you don't find service usefull - just send as an email and
    we will fully refund you."]]
      ]]])

(defn footer []
  [:footer.light-grey.block
   [:div.row.text-center
     [:p.columns.large-12 "Copyright 2014. Hashobject Ltd"]]])

(defn contact-info []
   [:ul.large
    [:li
     [:i.fa.fa-phone]
     [:span "+442032878677"]]
    [:li
     [:i.fa.fa-envelope]
     [:span
      [:a {:href "mailto:team@hashobject.com"} "team@hashobject.com"]]]
    [:li
     [:i.fa.fa-map-marker]
     [:span "61 Praed Street, dept 400, London"]]])


(defn ga []
  [:script
      "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-53508619-1', 'auto');
  ga('send', 'pageview');"])

(defn login-form []
  [:form.login-form {:action "/auth/shopify"}
    [:input {:type "text" :name "shop" :placeholder "yourshop.myshopify.com" :value ""}]
    [:div.clearfix
      [:button.button.right(:type "submit") "Log In"]]])


