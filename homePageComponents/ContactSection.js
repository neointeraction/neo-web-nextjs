import React from "react";

import CareerImg from "../images/n-images/career-card.svg";
import ContactImg from "../images/n-images/contact-card.svg";

const ContactSection = () => {
  return (
    <div className="contact-cards-section">
      <div className="row">
        <div className="col-md-6">
          <div className="n-contact-card">
            <p>
              Passion and excitement are our <br /> chai and coffee
            </p>
            <h1>Work with us</h1>
            <button class="custom-btn">Career</button>
            <img src={CareerImg} alt="CareerImg" className="cc-image" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="n-contact-card bg2">
            <p>
              Enhance your business design <br /> intelligence
            </p>
            <h1>Connect with us</h1>
            <button class="custom-btn">Contact Us</button>
            <img src={ContactImg} alt="ContactImg" className="cc-image-top" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
