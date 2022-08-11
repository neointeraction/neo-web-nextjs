import React from "react";
import { motion } from "framer-motion";
import BannerImage from "assets/images/n-images/home-svg.svg";

const HomeBanner = () => {
  return (
    <div className="section-animate-container">
      {/* <motion.div
        className="section-overlay"
        initial={{ height: "100%", background: "#ddd" }}
        animate={{ height: 0, background: "#ddd" }}
        transition={{ delay: 0, duration: 1 }}
      /> */}
      <motion.div
        className="n-banner-container"
        animate={{ y: [10, 0] }}
        initial="hidden"
        transition={{ delay: 0, duration: 0.5 }}
      >
        <div className="n-banner-content">
          <motion.h1
            animate={{ opacity: [0, 1], y: [-5, 0] }}
            initial="hidden"
            transition={{ delay: 0.6, duration: 0.5 }}
            className="n-banner-title"
          >
            Enterprise Product Design <span className="highlight">(UX)</span>{" "}
            and Engineering Studio
          </motion.h1>
          <motion.h4
            animate={{ opacity: [0, 1], y: [5, 0] }}
            initial="hidden"
            transition={{ delay: 0.6, duration: 0.5 }}
            className="n-banner-subtext"
          >
            focusing on User Centric Digital product experiences enabling design
            transformations for businesses
          </motion.h4>
        </div>
        <div className="n-banner-img">
          <motion.img
            animate={{ opacity: [0, 1] }}
            initial="hidden"
            transition={{ delay: 1, duration: 0.5 }}
            src={BannerImage}
            alt="BannerImage"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeBanner;
