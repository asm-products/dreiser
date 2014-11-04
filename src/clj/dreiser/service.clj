(ns dreiser.service
  (:use [environ.core])
  (:require [shopify.resources :as shop]
            [dreiser.entities :as ents]
            [dreiser.dates :as dates]
            [dreiser.emails :as emails]
            [dreiser.reporter :as reporter]
            [dreiser.checker :as checker]))



(defn prep-cutomer-data [data auth]
  {:shopify_id (:id data)
   :shop (:shop auth)
   :access_token (:access-token auth)
   :shop_owner (:shop-owner data)
   :country_code (:country-code data)
   :country_name (:country-name data)
   :city (:city data)
   :address1 (:address1 data)
   :address2 (:address2 data)
   :zip (:zip data)
   :currency (:currency data)
   :timezone (:timezone data)
   :email (:email data)
   :phone (:phone data)
   :shopify_creation (dates/str->date (:created-at data))})



(defn get-products [updated-at auth]
  (println "call get-products" updated-at auth)
  (if (nil? updated-at)
    (shop/get-all :products {} auth)
    (shop/get-all :products {:updated_at_min updated-at} auth)))


(defn get-pages [updated-at auth]
  (if (nil? updated-at)
    (shop/get-all :pages {} auth)
    (shop/get-all :pages {:updated_at_min updated-at} auth)))


(defn get-blogs [auth]
  (shop/get-all :blogs {} auth))

(defn get-articles [updated-at auth]
  (let [blogs (get-blogs auth)]
    (do
      (println "all blogs" blogs)
      (if (not (empty? blogs))
        (if (nil? updated-at)
          (flatten (map #(shop/get-all :articles {:blog_id (:id %)} auth) blogs))
          (flatten (map #(shop/get-all :articles {:blog_id (:id %) :updated_at_min updated-at} auth) blogs)))))))

(defn count-products [auth] (shop/get-count :products {} auth))
(defn count-pages [auth] (shop/get-count :pages {} auth))

(defn count-articles [auth]
  (let [blogs (get-blogs auth)]
    (reduce + (map #(shop/get-count :articles {:blog_id (:id %)} auth) blogs))))


(defn check-products [auth customer updated-at report-id]
  (let [products (get-products updated-at auth)]
      (println "getting products" (count products) updated-at)
      (doall (map #(checker/check-product % customer report-id) products))))

(defn check-pages [auth customer updated-at report-id]
  (let [pages (get-pages updated-at auth)]
      (println "getting pages" (count pages) updated-at)
      (doall (map #(checker/check-page % customer report-id) pages))))


(defn check-articles [auth customer updated-at report-id]
  (let [articles (get-articles updated-at auth)]
      (println "getting articles" (count articles) updated-at)
      (doall (map #(checker/check-article % customer report-id) articles))))



(defn start-check [auth customer]
  (let [report (ents/create-report (:id customer))
        report-id (:id report)]
    (do
      (check-products auth customer nil report-id)
      (check-pages auth customer nil report-id)
      (check-articles auth customer nil report-id))))

(defn start-daily-check [auth customer report-date]
  (let [report (ents/create-report (:id customer))
        report-id (:id report)]
    (do
      (println "start daily check:" (:id customer) "date:" report-date "report id:" report-id)
      (check-products auth customer report-date report-id)
      (check-pages auth customer report-date report-id)
      (check-articles auth customer report-date report-id)
      (println "finished daily check:" (:id customer) "date:" report-date)
      )))

(defn customer-stats [customer auth]
  (println "auth for customer stats" auth)
  (let [pages-num (future-call #(count-pages auth))
        products-num (future-call #(count-products auth))
        articles-num (future-call #(count-articles auth))
        ncustomer (assoc customer :pages-num @pages-num
                                  :products-num @products-num
                                  :articles-num @articles-num)]
       ncustomer))

(defn new-customer [auth]
  (let [shop (shop/get-shop auth)
        customer-data (prep-cutomer-data shop auth)
        customer (ents/create-customer customer-data)]
       customer))



(defn get-customer-reports [customer]
  (let [last-reports (ents/last-reports (:id customer))
        report-id (:id (first last-reports))
        products-reports (future-call #(reporter/report-resources (:id customer) ":product" report-id))
        pages-reports (future-call #(reporter/report-resources (:id customer) ":page" report-id))
        articles-reports (future-call #(reporter/report-resources (:id customer) ":article" report-id))
        products-reps @products-reports
        pages-reps @pages-reports
        articles-reps @articles-reports
        num-of-errors (+ (:num-of-errors products-reps) (:num-of-errors pages-reps) (:num-of-errors articles-reps))]
    {:product products-reps
     :page pages-reps
     :article articles-reps
     :num-of-errors num-of-errors}))


(defn send-email-report [customer auth]
  (let [stats (customer-stats customer auth)
        report (get-customer-reports customer)
        html-report (str "<p>Hello, " (:shop_owner customer) "!</p>"
                    "<br>"
                    "<p>You have " (:products-num stats) " products, "
                    (:pages-num stats) " pages, "
                    (:articles-num stats) " blog posts in your Shopify account. "
                    "We analyzed all of it and found "
                    "<strong>" (:num-of-errors report) "</strong>" " potential errors.</p>"
                    "<br><p>You can see full report on the <a href='http://dreiser.co'>dreiser.co</a>.</p>"

                    "<br>--<p>Your Dreiser</p>"
                    )]
    (println "report data" report)
    (println "stats data" stats)
    (emails/send-mail (:email customer) html-report "dreiser report")
    ))
