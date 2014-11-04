(ns dreiser.billing
  (:use [environ.core])
  (:require [shopify.resources :as shop]))

(defn make-charge! [plan auth base-url]
  (shop/save! :recurring_application_charge
                 {:name (:name plan)
                  :price (:price plan)
                  :test (= "test" (env :charge-type))
                  :return_url (str base-url "shopify/payment/confirmed")} auth))


(defn activate-recurring-charge!
  "Sends a request to activate the charge with the given id"
  [id auth]
  (-> auth
      (assoc
        :method :post
        :uri (str "/admin/recurring_application_charges/" id "/activate"))
      (shop/request)))
