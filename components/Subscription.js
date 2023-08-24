import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url =
  "https://neointeraction.us1.list-manage.com/subscribe/post?u=10403882a2d5bd04c7fbaf44e&amp;id=d45c5fcd29&amp;f_id=004cece5f0";

export default function Subscription({ isFooter = false }) {
  return (
    <MailchimpSubscribe
      url={url}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        if (isFooter) {
          return (
            <FooterSubscriptionForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          );
        }
        return (
          <SubscriptionForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
}

function useSubscriptionForm(onValidated) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubscribe = () => {
    setError(null);
    if (!email) {
      setError("Please enter your email id");
    }
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
    setEmail("");
  };

  return { email, setEmail, error, handleSubscribe };
}

function FooterSubscriptionForm({ status, message, onValidated }) {
  const { email, setEmail, error, handleSubscribe } =
    useSubscriptionForm(onValidated);

  useEffect(() => {
    if (status == "success") {
      toast(SubscribtionSuccessToast, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [status]);

  return (
    <>
      <div className="form-flex">
        <input
          type="email"
          id="company"
          name="company"
          className={`input-custom`}
          placeholder="E-mail ID"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      <br />
      {error != null && <>{error}</>}
      {status === "sending" && <div style={{ color: "white" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <button class="custom-btn subscribe-btn" onClick={handleSubscribe}>
        Subscribe
      </button>
    </>
  );
}

const SubscribtionSuccessToast = () => (
  <div className="success-msg-download width-md" style={{ width: "220px" }}>
    <div className="check-wrap"></div>
    <p>Thank you for subscribing for our news letter</p>
  </div>
);

function SubscriptionForm({ status, message, onValidated }) {
  const { email, setEmail, error, handleSubscribe } =
    useSubscriptionForm(onValidated);
  return (
    <>
      <div className="max-w-50">
        <div className="form-flex">
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-custom"
            placeholder="E-mail ID"
          />
          <button class="custom-btn" onClick={handleSubscribe}>
            Submit
          </button>
        </div>
      </div>
      {error != null && <>{error}</>}
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div style={{ color: "green" }}>Subscribed !</div>
      )}
    </>
  );
}
