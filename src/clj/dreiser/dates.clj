(ns dreiser.dates
  (:use [clj-time.format]
        [clj-time.coerce])
  (:require [clj-time.core :as clj-time]))


(defn str->date [date-str]
  (to-sql-date date-str))

(defn now-date []
  (let [today (java.util.Date.)]
    (java.sql.Date. (.getTime today))))

(defn now-str []
  (unparse (formatter "yyyy-MM-dd HH:mm") (clj-time/now)))

