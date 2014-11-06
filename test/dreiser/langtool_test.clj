(ns dreiser.langtool-test
  (:use clojure.test)
  (:require [dreiser.langtool :as ltool]))

(deftest check-test
  (testing "Find few suggestions for one mistake in html"
    (let [result (ltool/check "<p>Helo Anton</p>" "AmericanEnglish")
          checks (:checks result)]
      (is (= (:value result) "Helo Anton"))
      (is (= (count checks) 1))
      (is (= (:shortMessage (first checks)) "Spelling mistake"))
      (is (= (:message (first checks)) "Possible spelling mistake found"))
      (is (= (count (:suggestedReplacements (first checks))) 9))
      (is (= (:offset (first checks)) 0))
      (is (= (:toPos (first checks)) 4))
      (is (= (:fromPos (first checks)) 0))))
  (testing "Find few suggestions for one mistake in plain text"
    (let [result (ltool/check "Helo Anton" "AmericanEnglish")
          checks (:checks result)]
      (is (= (:value result) "Helo Anton"))
      (is (= (count checks) 1))
      (is (= (:shortMessage (first checks)) "Spelling mistake"))
      (is (= (:message (first checks)) "Possible spelling mistake found"))
      (is (= (count (:suggestedReplacements (first checks))) 9))
      (is (= (:offset (first checks)) 0))
      (is (= (:toPos (first checks)) 4))
      (is (= (:fromPos (first checks)) 0)))))

