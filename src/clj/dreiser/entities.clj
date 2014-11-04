(ns dreiser.entities
  (:use (korma core db))
  (:use [environ.core])
  (:require [clojure.tools.logging :as log]
            [dreiser.dates :as dates]))

(defdb prod (postgres
             {:classname "org.postgresql.Driver"
              :user (env :db-user)
              :password (env :db-password)
              :subprotocol "postgresql"
              :subname (env :db-subname)
              :maximum-pool-size 5}))


(defentity customer)

(defentity report)

(defentity checkresult
  (has-one customer {:fk :customer}))


(defn get-all-customers []
  (select customer))

(defn get-customer-from-auth [access-token shop]
  (first
    (select customer
            (where {:access_token access-token
                    :shop shop}))))

(defn create-report [customer-id]
  (insert report (values {:customer customer-id
                          :creation (dates/now-date)})))


(defn last-reports [customer-id]
  (select report
          (where {:customer customer-id})
          (order :creation :DESC)
          (limit 2)))

(defn create-customer [data]
  (insert customer (values
                    (assoc data :creation (dates/now-date)))))


(defn set-language! [id language]
  (update customer
    (set-fields {:language language
                 :modification (dates/now-date)})
    (where {:id id})))

(defn set-plan! [id plan]
  (update customer
    (set-fields {:plan plan
                 :modification (dates/now-date)})
    (where {:id id})))

(defn charge-activated [id charge-id]
  (update customer
    (set-fields {:charge_id charge-id
                 :activation (dates/now-date)
                 :modification (dates/now-date)})
    (where {:id id})))

(defn create-check [data customer]
  (insert checkresult (values
                       (assoc data
                           :customer (:id customer)
                           :creation (dates/now-date)))))

(defn active-checks [customer-id resource-type report-id]
    (select checkresult
            (where (and
                    (= :report report-id)
                    (= :customer customer-id)
                    (= :deletion nil)
                    (= :resource_type resource-type)))))

(defn active-errors [customer-id resource-type report-id]
  (into {}
      (map (fn [e]
               [(key e) (group-by :prop_name (val e))])
             (group-by :resource_id
               (active-checks customer-id resource-type report-id)))))

