(ns dreiser.core
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [clojure.string :as string]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(enable-console-print!)

(def plans {
    :medium {:id "medium"
             :price 10
             :name "Micro"
             :features ["products"]}
    :large {:id "large"
            :price 19
            :name "Shop"
            :features ["products", "pages"]}
    :extra {:id "extra"
            :price 25
            :name "Business"
            :features ["products", "pages", "blog posts"]}})


(def langs
  {"AmericanEnglish" {:name "American English"}
   "AustralianEnglish" {:name "Australian English"}
   "BritishEnglish" {:name "British English"}
   "CanadianEnglish" {:name "Canadian English"}
   "NewZealandEnglish" {:name "New Zealand English"}
   "SouthAfricanEnglish" {:name "South African English"}})

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn edn-xhr [{:keys [method url data on-complete on-error]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
      (fn [e]
        (on-complete (reader/read-string (.getResponseText xhr)))))
    (events/listen xhr goog.net.EventType.ERROR
      (fn [e]
        (on-error {:error (.getResponseText xhr)})))
    (. xhr
      (send url (meths method) (when data (pr-str data))
        #js {"Content-Type" "application/edn"}))))



(defn build-shopify-link [shop r]
  (case (:shopify.resources/type r)
    :product (str "https://" shop "/admin/products/" (:id r))
    :page (str "https://" shop "/admin/pages/" (:id r))
    :article (str "https://" shop "/admin/blogs/" (:blog-id r) "/articles/" (:id r))
    "default" ""))


(def app-state
  (atom
   {:shop {:products-num 0
           :pages-num 0
           :articles-num 0}
    :reports {}}))


(defn start-progress []
  (.start js/NProgress))

(defn stop-progress []
  (.done js/NProgress))

(defn start-check-button-click
  ""
  [app]
  (do
    (start-progress)
    (edn-xhr
      {:method :post
       :url "/start"
       :on-error
       (fn [e]
         (js/setTimeout (fn []
                          (.reload (.-location js/window))) 30000)
         )
       :on-complete
       (fn [res]
         (stop-progress)
         (om/transact! app :reports (fn [_] res)))})))


(defn start-check-button
  "Component that renders 'Start check' button"
  [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "col-xs-8 center-block start-panel"}
        (dom/div #js {:className "text-center"}
          (dom/h3 nil "Thanks for joining!")
          (dom/h4 nil "We are going to automatically proof-read your Shopify text content.")
          (dom/p nil "Select language, press Start Check and comeback in few minutes.")
          (apply dom/select nil
             (map (fn [lang lang-key] (dom/option nil (:name (val lang)))) langs ))
          (dom/button #js {:id "start-check-button"
                           :className "button success"
                           :onClick #(start-check-button-click app)}
                      "Start check"))))))



(defn render-pricing-block [plan]
  (dom/ul #js {:className "pricing-table col-xs-12 col-md-4 fly-in-animation"}
    (dom/li #js {:className "title"} (:name plan))
    (dom/li #js {:className "description"}
        (dom/strong nil "check")
        (dom/span nil (string/join ", " (:features plan))))
    (dom/li #js {:className "bullet-item"} "Daily reports")
    (dom/li #js {:className "bullet-item"} "Support via email")
    (dom/li #js {:className "price"}
        (dom/strong nil (:price plan))
        (dom/p nil "USD/month"))
   (dom/li #js {:className "cta-button"}
        (dom/a #js {:className "button green-button" :href (str "/shopify/payment?plan=" (:id plan))} "Subscribe"))))




(defn render-all-pricing []
  [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "pricing-block white-block"}
          (dom/div #js {:className "row"}
              (dom/header #js {:className "text-center col-xs-12"}
                          (dom/h2 nil "Pricing")
                          (dom/p nil "Please select your plan. We have 30 days money back guarantee."))
        (apply dom/div nil
             (map (fn [plan]
                    (om/build render-pricing-block (val plan))
                    ) plans)))))))

(defn htmlify-str [s]
  (if (nil? s)
    ""
    (clojure.string/replace s #"\n" "<br>")))

(defn resource-report
  ""
  [data owner]
  (reify
    om/IRender
    (render [_]
      (let [resource-id (first data)
            resource (second data)
            reports (nth data 2 [])
            num-of-errors (nth data 3 0)
            title (first (filter (fn [r] (= "title" (first r))) reports))
            description (first (filter (fn [r] (or
                                                (= "description" (first r))
                                                (= "content" (first r)))
                                         ) reports))

            description-html (htmlify-str (second description))
            shopname (:shopname (om.core/get-state owner))
            link (build-shopify-link shopname resource)]
      (dom/li #js {:className "resource-report"}
              (dom/div nil
               (dom/span #js {:className "label label-warning pull-right" :title "Number of warnings"} num-of-errors)
               (dom/h4 nil
                 (dom/a #js {:href link
                             :dangerouslySetInnerHTML #js {:__html (:title resource)}} ))
               (dom/div #js {:className "report-property-content"
                             :dangerouslySetInnerHTML #js {:__html description-html}} ))

            )))))


(defn render-reports-list [type-key app]
  (apply dom/ul nil
     (map (fn [res]
            (om/build resource-report res {:state {:shopname (:shop (:shop app))}})
            )(:reports (get (:reports app) type-key)))))

(defn render-tab-header [app tab-id tab-name type-key total-key]
  (dom/a #js {:href tab-id :data-toggle "tab"}
   (dom/span nil tab-name)
   (dom/span #js {:className "badge"} (:num-of-errors (get (:reports app) type-key)))))

(defn reports-groups
  "Component that renders reports"
  [app owner]
  (reify
    om/IRender
    (render [_]
        (dom/div #js {:className "col-xs-12"}
            (dom/ul #js {:className "nav nav-pills"}
              (dom/li #js {:className "active"}
                (render-tab-header app "#products-report" "Products" :product :products-num))
              (dom/li nil
                (render-tab-header app "#pages-report" "Pages" :page :pages-num))
              (dom/li nil
                (render-tab-header app "#articles-report" "Articles" :article :articles-num)))

         (dom/div #js {:className "tab-content"}
            (dom/div #js {:id "products-report" :className "tab-pane active"}
              (dom/div #js {:className "alert alert-warning"}
                 (dom/p nil "Below are the list of products' descriptions with possible errors. Please review them"))
              (render-reports-list :product app))
            (dom/div #js {:id "pages-report" :className "tab-pane"}
              (if (or (= (:plan (:shop app)) "large") (= (:plan (:shop app)) "extra"))
                (do
                  (dom/div #js {:className "alert alert-warning"}
                           (dom/p nil "Below are the list of pages' contents with possible errors. Please review them"))
                  (render-reports-list :page app))
                (dom/div #js {:className "alert alert-warning"}
                         (dom/p nil "You are on the " (:plan (:shop app)) " plan. Please upgrade to get report about your pages content"))))

            (dom/div #js {:id "articles-report" :className "tab-pane"}
              (if (= (:plan (:shop app)) "extra")
                  (do
                    (dom/div #js {:className "alert alert-warning"}
                             (dom/p nil "Below are the list of blog posts' contents with possible errors. Please review them"))
                    (render-reports-list :article app))
                   (dom/div #js {:className "alert alert-warning"}
                            (dom/p nil "You are on the " (:plan (:shop app)) " plan. Please upgrade to get report about your blog posts content")))
                     ))))))

(defn reports-view
  "Component that renders reports"
  [app owner]
  (reify
    om/IRender
    (render [_]
        (dom/div #js {:className "row"}
          (if (not (nil? (:shopify_id (:shop app))))
            (if (nil? (:charge_id (:shop app)))
              (om/build render-all-pricing app)
              (if (or (empty? (:reports app)) (empty? (:reports (:product (:reports app)))))
                (om/build start-check-button app)
                (om/build reports-groups app))
              (dom/div nil)
              ))))))


(defn dreiser-app [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (start-progress)
      (edn-xhr
        {:method :get
         :url "/reports"
         :on-complete #(om/transact! app :reports (fn [_] %))})
      (edn-xhr
        {:method :get
         :url "/stats"
         :on-complete (fn [e]
                        (stop-progress)
                        (om/transact! app :shop (fn [_] e)))}))
    om/IDidUpdate
    (did-update [_ _ _]
                (. (js/jQuery "[data-toggle=\"popover\"]") popover (js-obj "html" true "placement" "bottom")))
    om/IRender
    (render [this]
      (dom/div #js {:className "container"}

               (om/build reports-view app)

               ))))
(om/root dreiser-app app-state
  {:target (. js/document (getElementById "app"))})
