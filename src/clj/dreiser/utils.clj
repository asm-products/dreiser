(ns dreiser.utils
  (:require [clojure.zip :as zip]
            [cheshire.core :as json]))


(defn uuid [] (str (java.util.UUID/randomUUID)))

(defn new-class [klass & args] (eval `(new ~klass ~@args)))

(defn zip-map [f loc]
  " Map f over every node of the zipper.
    The function received has the form (f node-value loc),
    the node value and its location"
  (loop [z loc]
    (if (zip/end? z)
      (zip/root z) ; perhaps you can call zip/seq-zip or zip/vector-zip?
      (recur (zip/next (zip/edit z f z))))))

(defn base-url [req]
  (str (name (:scheme req))
       "://"
       (:server-name req)
       ":"
       (:server-port req)
       "/"))

