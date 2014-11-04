(ns dreiser.routes
  (:use [environ.core])
  (:require [compojure.core :refer [defroutes GET POST ANY HEAD]]
            [compojure.route :refer [not-found]]
            [ring.util.response :refer [redirect]]
            [dreiser.service :as service]
            [dreiser.billing :as billing]
            [dreiser.entities :as ents]
            [dreiser.utils :as utils]
            [dreiser.plans :as plans]
            [dreiser.views.landing :as landing-page]
            [dreiser.views.app :as app-page]
            [dreiser.views.account :as account-page]
            [dreiser.views.support :as support-page]
            [dreiser.views.login :as login-page]
            [cemerick.friend :as friend]
            [shopify.friend :refer [shopify-auths]]))




(defn edn-resp [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn;charset=UTF8"}
   :body (pr-str data)})

(defn auth-user [request ok-handler]
  (if-let [auth (first (shopify-auths request))]
       (if-let [customer (ents/get-customer-from-auth (:access-token auth) (:shop auth))]
         (do
           (println "auth data" auth)
           (ok-handler customer auth))
         (redirect "/login"))
       (redirect "/login")))


(defroutes app-routes

  (HEAD "/" [] "")


  (GET "/" request
     (if-let [auth (first (shopify-auths request))]
       (if-let [customer (ents/get-customer-from-auth (:access-token auth) (:shop auth))]
         (app-page/index customer)
         (app-page/index (service/new-customer auth)))
       (landing-page/index)))

  (GET "/login" request
       (login-page/index))


  (GET "/support" request
     (auth-user request (fn [customer auth]
                          (support-page/index customer))))
  (GET "/account" request
     (auth-user request (fn [customer auth]
                          (account-page/index customer))))


  (POST "/account" request
    (auth-user request (fn [customer auth]
      (do
         (ents/set-language! (:id customer) (:language (:params request)))
         (redirect "/account")))))

  (GET "/stats" request
    (if-let [auth (first (shopify-auths request))]
       (if-let [customer (ents/get-customer-from-auth (:access-token auth) (:shop auth))]
           (edn-resp (service/customer-stats customer auth))
         {:status 403})
       {:status 403}))

  (GET "/reports" request
    (if-let [auth (first (shopify-auths request))]
       (if-let [customer (ents/get-customer-from-auth (:access-token auth) (:shop auth))]
         (edn-resp (service/get-customer-reports customer))
         {:status 403})
       {:status 403}))

  (POST "/start" request
    (auth-user request (fn [customer auth]
      (do
        (ents/set-language! (:id customer) (:language (:params request) "AmericanEnglish"))
        (service/start-check auth customer)
        (edn-resp (service/get-customer-reports customer))))))

  (GET "/shopify/payment/confirmed" request
    (auth-user request (fn [customer auth]
        (let [charge-id (:charge_id (:params request))
              activation-res (billing/activate-recurring-charge! charge-id auth)]
          (if (= 200 (:status activation-res))
            (do
              (println "subscribed" charge-id)
              (ents/charge-activated (:id customer) charge-id)
              (redirect "/")))))))



  (GET "/shopify/payment" request
    (auth-user request (fn [customer auth]
      (let [plan-id (:plan (:params request) "medium")
            plan (get plans/plans (keyword plan-id))
            charge (billing/make-charge! plan auth (utils/base-url request))
            confirmation-url (:confirmation-url charge)]
            (do
              (ents/set-plan! (:id customer) plan-id)
              (redirect confirmation-url))))))





  (friend/logout (ANY "/logout" request (redirect "/")))
  (not-found "Not Found"))

