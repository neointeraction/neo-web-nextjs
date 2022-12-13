import React, { useEffect } from "react";
import Router from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CareerImg from "assets/images/n-images/animated/career-card.svg";
import ContactImg from "assets/images/n-images/animated/contact-card.svg";

const titleVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const ContactSection = () => {
  const handleRoute = (path) => {
    Router.push(path);
  };

  const { ref, inView } = useInView({
    rootMargin: "-80px 0px -150px 0px",
  });

  return (
    <div className="contact-cards-section" ref={ref}>
      <div className="row">
        <div className="col-md-6">
          <div className="n-contact-card">
            <h4>
              Passion and excitement are our <br /> chai and coffee
            </h4>
            <h3>Work with us</h3>
            <button
              className="custom-btn"
              onClick={() => handleRoute("/career")}
            >
              Career
            </button>

            <object
              type="image/svg+xml"
              data={ContactImg}
              className="cc-image-top card-img contact-card-img"
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
              className="custom-btn"
              onClick={() => handleRoute("/contact-us")}
            >
              Contact Us
            </button>
            {/* <img
              src={CareerImg}
              alt="CareerImg"
              className="cc-image card-img"
            /> */}
            <AnimatePresence>
              {inView && (
                <object
                  type="image/svg+xml"
                  data={CareerImg}
                  className="cc-image card-img contact-card-img"
                >
                  <img src={CareerImg} alt="ContactImg" />
                </object>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
