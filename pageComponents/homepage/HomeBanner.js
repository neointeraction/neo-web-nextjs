import React from "react";
import { motion } from "framer-motion";
import BannerImage from "assets/images/n-images/animated/home-svg.svg";

const HomeBanner = () => {
  return (
    <div className="section-animate-container">
      {/* <motion.div
        className="section-overlay"
        initial={{ height: "100%", background: "#ddd" }}
        animate={{ height: 0, background: "#ddd" }}
        transition={{ delay: 0, duration: 1 }}
      /> */}
      <div className="n-banner-container">
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
            Focusing on User Centric Digital product experience enables business
            success
          </motion.h4>
        </div>
        <div className="n-banner-img">
          {/* <motion.img
            animate={{ opacity: [0, 1] }}
            initial="hidden"
            transition={{ delay: 1, duration: 0.5 }}
            src={BannerImage}
            alt="BannerImage"
          /> */}
          {/* <img key="ux" src={BannerImage} alt="UX" /> */}
          {/* <motion.div
            // key="product"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
          >
            <object type="image/svg+xml" src={BannerImage}>
              <img key="ux" src={BannerImage} alt="UX" />
            </object>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <object type="image/svg+xml" data={BannerImage}>
              <img key="ux" src={BannerImage} alt="UX" />
            </object>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
