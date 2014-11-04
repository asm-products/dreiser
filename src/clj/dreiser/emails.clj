(ns dreiser.emails
  (:use [environ.core])
  (:import [com.amazonaws.auth BasicAWSCredentials]
           [com.amazonaws.services.simpleemail AmazonSimpleEmailServiceClient]
           [com.amazonaws.services.simpleemail.model Body Content Message Destination SendEmailRequest]))

(defn credentials
  [access-key secret]
  (BasicAWSCredentials. access-key secret))

(defn client
  "Create an Amazon SES client"
  [credentials]
  (AmazonSimpleEmailServiceClient. credentials))




(defn destination
  "Create a destination for the message. `to` should be a string"
  [to]
  (doto (Destination.) (.setToAddresses [to])))


(defn message
  "Create html email"
  [subject content]
  (let [body (Body.)
        html-content (Content. content)
        html-body (.withHtml body html-content)]
    (Message. (Content. subject) html-body)))

(defn send-mail [address html subject]
  (let [ses-client (client (credentials (env :ses-access-key) (env :ses-secret-key)))]
    (.sendEmail ses-client (SendEmailRequest. "team@hashobject.com" (destination address) (message subject html)))))


