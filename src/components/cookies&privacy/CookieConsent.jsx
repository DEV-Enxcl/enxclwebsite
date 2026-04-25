import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setShow(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShow(false);

    // Load analytics *ONLY AFTER* user accepts (GDPR requirement)
    loadAnalytics();
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShow(false);
  };

  const loadAnalytics = () => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXX");
  };

  return show ? (
    <div style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "#1a1a1a",
      color: "white",
      padding: "15px",
      textAlign: "center",
      zIndex: 9999
    }}>
      <p>
        We use cookies to enhance your experience. Read our{" "}
        <a href="/privacy" style={{ color: "#4fa3ff", textDecoration: "underline" }}>
          Privacy Policy
        </a>.
      </p>

      <button
        onClick={acceptCookies}
        style={{
          margin: "10px",
          padding: "10px 18px",
          background: "#4CAF50",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
        Accept
      </button>

      <button
        onClick={declineCookies}
        style={{
          margin: "10px",
          padding: "10px 18px",
          background: "#777",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
        Decline
      </button>
    </div>
  ) : null;
}
