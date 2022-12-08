import React, { useEffect, useState } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";

import Right from "assets/images/n-images/slider-right.svg";
import Left from "assets/images/n-images/slider-left.svg";

const titleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -10 },
};

const subTitleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 10 },
};

const HomeBannerSlider = () => {
  const controls = useAnimation();
  const controls1 = useAnimation();
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();

  const [path, setPath] = useState([]);

  console.log(path, "path");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls, inView, inView1, controls1]);

  var slideSettings = {
    // autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
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
    <div>
      <Slider {...slideSettings}>
        <div className="banner-slider1" ref={ref}>
          <div className="banner-slider-container">
            <div className="slider-content">
              <motion.h2
                initial="hidden"
                animate={controls}
                variants={titleVariant}
                className="b-banner-title"
              >
                Product Design <span className="highlight"> (UX) </span> and
                Engineering Studio
              </motion.h2>
              <motion.h4
                initial="hidden"
                animate={controls}
                variants={subTitleVariant}
                className="b-banner-subtext"
              >
                Simple and Impactful{" "}
                <span className="underline-highlight mob-bsb">
                  User Centric digital experiences
                </span>
              </motion.h4>
            </div>
          </div>
        </div>
        <div className="banner-slider2" ref={ref1}>
          <div className="banner-slider-container">
            <div className="slider-content">
              <AnimatePresence>
                <motion.h2
                  initial="hidden"
                  animate={controls}
                  exit={{ opacity: 0, y: -10 }}
                  variants={titleVariant}
                  className="b-banner-title"
                >
                  Designing experiences touching{" "}
                  <span className="highlight"> (People’s lives) </span>
                </motion.h2>
              </AnimatePresence>
              <motion.h4
                initial="hidden"
                animate={controls}
                variants={subTitleVariant}
                className="b-banner-subtext"
              >
                <span className="underline-highlight">
                  Impacting Businesses
                </span>{" "}
                solving real life problems
              </motion.h4>
            </div>
          </div>
        </div>
        <div className="banner-slider3">
          <div className="banner-slider-container">
            <div className="slider-content">
              <motion.h2
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={titleVariant}
                className="b-banner-title"
              >
                Design
                <span className="highlight"> (Transformation) </span>
                Partner
              </motion.h2>
              <motion.h4
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={subTitleVariant}
                className="b-banner-subtext"
              >
                Accelerate{" "}
                <span className="underline-highlight">Business Success</span> by
                Design
              </motion.h4>
            </div>
          </div>
        </div>
        <div className="banner-slider4">
          <div className="banner-slider-container">
            <div className="slider-content">
              <motion.h2
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={titleVariant}
                className="b-banner-title"
              >
                <span className="highlight"> (Hire) </span>
                our UX Consultants & UI Developers
              </motion.h2>
              <motion.h4
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={subTitleVariant}
                className="b-banner-subtext"
              >
                <span className="underline-highlight">Boost your Business</span>{" "}
                with the best minds
              </motion.h4>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeBannerSlider;
