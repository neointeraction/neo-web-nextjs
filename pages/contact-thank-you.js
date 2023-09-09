import React, { useEffect } from "react";
import ReactWOW from "react-wow";
import Head from "next/head";
import Logo from "assets/images/landing/logo.png";
import Router from "next/router";

const ContactThankYou = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/design-workshop");
    }, 6000);
  }, []);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "AW-1067948097");
    gtag("event", "conversion", {
      send_to: "AW-1067948097/1Af2CPaoi90YEMGwnv0D",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Thank You for Contacting Us!</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-1067948097"
        ></script>
      </Head>
      <ReactWOW animation="fadeInUp" delay="0s">
        <div className="thankyou-section">
          <img src={Logo} />
          <h4>Thanks For Registering</h4>
          <p>
            Our team will be in touch with you shortly, and we're looking
            forward to welcoming you to this exciting UX design workshop.
          </p>
        </div>
      </ReactWOW>
    </>
  );
};

export default ContactThankYou;
