import React, { useEffect } from "react";
import ReactWOW from "react-wow";
import Head from "next/head";
import Logo from "assets/images/landing/logo.png";
import Router from "next/router";

const RegistrationThankYou = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/design-workshop");
    }, 6000);
  }, []);
  return (
    <>
      <Head>
        <title>Thank you for registering</title>
      </Head>
      <ReactWOW animation="fadeInUp" delay="0s">
        <div className="thankyou-section">
          <img src={Logo} />
          <h4>Thanks For Registering</h4>
          <p>
            You’ll receive an email with details on attending the workshop. We
            look forward to seeing you there !
          </p>
        </div>
      </ReactWOW>
    </>
  );
};

export default RegistrationThankYou;
