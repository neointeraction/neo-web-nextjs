import React from "react";
import Router from "next/router";
import { motion } from "framer-motion";
import CareerImg from "assets/images/n-images/animated/career-card.svg";
import ContactImg from "assets/images/n-images/animated/contact-card.svg";

const ContactSection = () => {
  const handleRoute = (path) => {
    Router.push(path);
  };

  return (
    <div className="contact-cards-section">
      <div className="row">
        <div className="col-md-6">
          <div className="n-contact-card">
            <h4>
              Passion and excitement are our <br /> chai and coffee
            </h4>
            <h3>Work with us</h3>
            <button class="custom-btn" onClick={() => handleRoute("/Career")}>
              Career
            </button>

            <object
              type="image/svg+xml"
              data={ContactImg}
              className="cc-image-top card-img"
            >
              <img src={ContactImg} alt="ContactImg" />
            </object>

            {/* <img
              src={ContactImg}
              alt="ContactImg"
              className="cc-image-top card-img"
            /> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="n-contact-card bg2">
            <h4>
              Enhance your business design <br /> intelligence
            </h4>
            <h3>Connect with us</h3>
            <button
              class="custom-btn"
              onClick={() => handleRoute("/ContactUs")}
            >
              Contact Us
            </button>
            {/* <img
              src={CareerImg}
              alt="CareerImg"
              className="cc-image card-img"
            /> */}
            <object
              type="image/svg+xml"
              data={CareerImg}
              className="cc-image card-img"
            >
              <img src={CareerImg} alt="ContactImg" />
            </object>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
