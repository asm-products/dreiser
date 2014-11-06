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
      (is (= (:fromPos (first checks)) 0))))
  (testing "Find one problem with repetitive the"
    (let [result (ltool/check "The morning is good. The day is good. The night is good." "BritishEnglish")
          checks (:checks result)]
      (is (= (:value result) "The morning is good. The day is good. The night is good."))
      (is (= (count checks) 1))
      (is (= (:shortMessage (first checks)) "Three successive sentences begin with the same word."))
      (is (= (:message (first checks)) "Three successive sentences begin with the same word. Reword the sentence or use a thesaurus to find a synonym."))
      (is (= (count (:suggestedReplacements (first checks))) 0))
      (is (= (:offset (first checks)) 38))
      (is (= (:toPos (first checks)) 41))
      (is (= (:fromPos (first checks)) 38)))))

