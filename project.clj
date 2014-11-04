(defproject dreiser "0.1.0-SNAPSHOT"
  :description "Dreiser: proofread your texts"
  :license {:name "Copyright Hashobject team (team@hashobject.com)"}
  :url "http://dreiser.co"
  :min-lein-version "2.0.0"

  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/tools.reader "0.8.3"]
                 [org.clojure/tools.logging "0.2.6"]
                 [ring/ring-core "1.3.0"]
                 [ring-server "0.3.1"]
                 [ring/ring-jetty-adapter "1.2.1"]
                 [compojure "1.1.8"]
                 [shopify "0.2.0-SNAPSHOT"]
                 [org.languagetool/language-all "2.6"]
                 [postgresql "9.3-1101.jdbc4"]
                 [clj-time "0.6.0"]
                 [korma "0.3.1"]
                 [environ "0.4.0"]
                 [ragtime "0.3.4"]
                 [hiccup "1.0.5"]
                 [overtone/at-at "1.2.0"]
                 [cheshire "5.0.1"]
                 [hickory "0.5.3"]
                 [amazonica "0.2.8"]
                 [lein-light-nrepl "0.0.6"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [om "0.6.4"]
                 [om-sync "0.1.1"]
                 [fogus/ring-edn "0.2.0"]
                 [org.jsoup/jsoup "1.7.3"]]
  :repl-options {:nrepl-middleware [lighttable.nrepl.handler/lighttable-ops]}
  :plugins [[lein-ring "0.8.10"]
            [ragtime/ragtime.lein "0.3.4"]
            [lein-environ "0.4.0"]
            [lein-beanstalk "0.2.7"]
            [lein-cljsbuild "1.0.3"]]

  :ragtime {:migrations ragtime.sql.files/migrations
            :database "jdbc:postgresql://localhost/dreiser"}
  :ring {:handler dreiser.core/app
         :init dreiser.core/init
         }
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "resources/public/app.js"
                :output-dir "resources/public/out"
                :optimizations :simple
                ;:source-map true
                         }}
            {:id "prod"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "resources/public/app.js"
                ;:output-dir "resources/public/out"
                :optimizations :simple}}
             ]}
  :profiles {
    :dev {:env {
               "SES_ACCESS_KEY" ""
               "SES_SECRET_KEY" ""

               "AWS_ACCESS_KEY_ID" ""
               "AWS_SECRET_KEY" ""
               "APP_BASE_URL" "http://localhost:3000"
               "SHOPIFY_APP_KEY" ""
               "SHOPIFY_APP_SECRET" ""
               "DB_USER" "podviaznikov"
               "DB_PASSWORD" ""
               "DB_SUBNAME" "//localhost:5432/dreiser"
               "CHARGE_TYPE" "test"}
          :dependencies []}
    :prod {
          :ring {:open-browser? false, :stacktraces? false, :auto-reload? false}}
    :staging {
          :ring {:open-browser? false, :stacktraces? false, :auto-reload? false}}})

