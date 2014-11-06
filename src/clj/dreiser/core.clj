(ns dreiser.core
  (:use [environ.core])
  (:require [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.flash :refer [wrap-flash]]
            [ring.middleware.session :refer [wrap-session]]
            [ring.adapter.jetty :refer [run-jetty]]
            [cemerick.friend :refer [authenticate]]
            [compojure.handler :as handler]
            [shopify.friend :as friend]
            [dreiser.entities :as ents]
            [dreiser.scheduler :as scheduler]
            [dreiser.service :as service]
            [dreiser.dates :as dates]
            [dreiser.routes :refer [app-routes]]))


(alter-var-root
  #'clojure.tools.logging/*logger-factory*
  (constantly (clojure.tools.logging.impl/jul-factory)))


(def shopify-api-client
  {:url (env :app-base-url)
   :key (env :shopify-app-key)
   :secret (env :shopify-app-secret)
   :scope [:read_products :read_content]})


(defn wrap-auth
  [handler]
  (let [shopify-auth (shopify.friend/workflow {:api-client shopify-api-client})]
        (authenticate handler
                  {:allow-anon? true
                   :login-uri "/login"
                   :unauthorized-redirect-uri "/login"
                   :workflows [shopify-auth]})))

(def app
  (-> app-routes
      wrap-auth
      wrap-flash
      wrap-session
      (wrap-resource "public")
      handler/site))


(defn init []
  (println "start init job")
  (let [customers (ents/get-all-customers)]
    (do
      (println "all customers: " (count customers))
      (doall
         (map (fn [customer]
                (let [auth {:access-token (:access_token customer)
                            :shop (:shop customer)}]
                  (do
                   (println "create sched job for customer:" (:id customer))
                   (scheduler/schedule (fn []
                                         (do
                                           (service/start-daily-check auth customer nil;(dates/now-str)
                                                                   )
                                           (service/send-email-report customer auth)
                                           )))
                   (println "created sched job for customer:" (:id customer))))
             ) customers)))))


;(init)


(defn -main [port] (run-jetty app {:port (Integer. port)}))
