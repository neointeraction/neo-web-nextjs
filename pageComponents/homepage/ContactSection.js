import React from "react";
import Router from "next/router";

import CareerImg from "assets/images/n-images/career-card.svg";
import ContactImg from "assets/images/n-images/contact-card.svg";

const ContactSection = () => {
  const handleRoute = (path) => {
    Router.push(path);
  };

  return (
    <div className="contact-cards-section">
      <div className="row">
        <div className="col-md-6">
          <div className="n-contact-card">
            <p>
              Passion and excitement are our <br /> chai and coffee
            </p>
            <h1>Work with us</h1>
            <button class="custom-btn" onClick={() => handleRoute("/Career")}>
              Career
            </button>

            <img
              src={ContactImg}
              alt="ContactImg"
              className="cc-image-top card-img"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="n-contact-card bg2">
            <p>
              Enhance your business design <br /> intelligence
            </p>
            <h1>Connect with us</h1>
            <button
              class="custom-btn"
              onClick={() => handleRoute("/ContactUs")}
            >
              Contact Us
            </button>
            <img
              src={CareerImg}
              alt="CareerImg"
              className="cc-image card-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
