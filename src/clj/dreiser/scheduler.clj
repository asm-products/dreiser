(ns dreiser.scheduler
  (:require [overtone.at-at :as at]))



(def INTERVAL 4000000000);(* 1000 60 60 24))

(def pool (at/mk-pool))


(defn schedule [fnx]
  (at/every INTERVAL fnx pool))


(defn tasks []
  (at/show-schedule pool))
