(ns dreiser.langtool
  (:require [dreiser.html :as strip]
            [dreiser.langs :as langs]
            [dreiser.utils :as utils]))




(defn create-ltool [lang]
  (doto
    (new org.languagetool.JLanguageTool (utils/new-class (:class (get langs/langs lang))))
    (.activateDefaultPatternRules)))


(defn check [html lang]
  (let [lt (create-ltool lang)
        text (strip/strip-html html)
        r (.check lt text)
        checks (map bean r)]
    {:value text
     :checks checks}))


