import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";

import Right from "assets/images/n-images/slider-right.svg";
import Left from "assets/images/n-images/slider-left.svg";
import ProjImage from "assets/images/n-images/proj1.png";
import HomeBanner from "./HomeBanner";

const titleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -5 },
};

const subTitleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 5 },
};

const imageVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { opacity: 0, y: 20 },
};

const ProjectSlider = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  var slideSettings = {
    fade: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <div className="slider-nav-icon-left">
        <motion.img
          whileHover={{ opacity: [0.8, 1] }}
          transition={{ duration: 0.5 }}
          initial={false}
          src={Right}
          alt="Prev"
          className="slider-nav-icons"
        />
      </div>
    ),
    nextArrow: (
      <div className="slider-nav-icon-right">
        <motion.img
          whileHover={{ opacity: [0.8, 1] }}
          transition={{ duration: 0.5 }}
          initial={false}
          src={Left}
          alt="Prev"
        />
      </div>
    ),
  };

  return (
    <Slider {...slideSettings}>
      <div>
        <div className="slider-container">
          <div className="slider-content">
            <motion.h1
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={titleVariant}
              className="n-banner-title"
            >
              Share Trading Platform UX Redesign -
              <span className="highlight"> www.Geojit.com </span>
            </motion.h1>
            <motion.h4
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={subTitleVariant}
              className="n-banner-subtext"
            >
              A challenging project from the financial domain where user
              experience design meets directly with business goals.
            </motion.h4>
          </div>
          <div className="slider-image">
            <motion.img
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={imageVariant}
              src={ProjImage}
              alt="ProjImage"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="slider-container slide-2">
          <div className="slider-content">
            <motion.h1
              animate={{ opacity: [0, 1], y: [5, 0] }}
              initial="hidden"
              transition={{ delay: 0.5, duration: 0.5 }}
              className="n-banner-title"
            >
              Online Tutoring Platform
              <span className="highlight"> 90+ Tution App</span>
            </motion.h1>
            <motion.h4
              animate={{ opacity: [0, 1], y: [5, 0] }}
              initial="hidden"
              transition={{ delay: 0.5, duration: 0.5 }}
              className="n-banner-subtext"
            >
              A challenging project from the financial domain where user
              experience design meets directly with business goals.
            </motion.h4>
          </div>
          <div className="slider-image">
            <img src={ProjImage} alt="ProjImage" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <div>
        <div className="slider-container slide-3">
          <div className="slider-content">
            <motion.h1
              animate={{ opacity: [0, 1], y: [5, 0] }}
              initial="hidden"
              transition={{ delay: 0.5, duration: 0.5 }}
              className="n-banner-title"
            >
              Internet Banking - <span className="highlight">Dubai Bank</span>
            </motion.h1>
            <motion.h4
              animate={{ opacity: [0, 1], y: [5, 0] }}
              initial="hidden"
              transition={{ delay: 0.5, duration: 0.5 }}
              className="n-banner-subtext"
            >
              A challenging project from the financial domain where user
              experience design meets directly with business goals.
            </motion.h4>
          </div>
          <div className="slider-image">
            <img src={ProjImage} alt="ProjImage" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default ProjectSlider;
