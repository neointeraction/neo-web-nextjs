import React, { useEffect, useState } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";

import Right from "assets/images/n-images/slider-right.svg";
import Left from "assets/images/n-images/slider-left.svg";
import ImageVideoText from "components/ImageVideoText";

const titleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -10 },
};

const subTitleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 10 },
};

const EventsBannerSlider = () => {
  const controls = useAnimation();
  const controls1 = useAnimation();
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();

  const [path, setPath] = useState([]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls, inView, inView1, controls1]);

  var slideSettings = {
    autoplay: false,
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
        <div className="event-slider1" ref={ref}>
          <div className="event-slider-container">
            <div className="slider-content">
              <div className="event-text-block">
                <motion.h2
                  initial="hidden"
                  animate={controls}
                  variants={titleVariant}
                  className="b-banner-title"
                >
                  Designing Profits:{" "}
                  <span className="highlight">
                    A Journey to Crafting Success{" "}
                  </span>
                </motion.h2>
                <motion.h4
                  initial="hidden"
                  animate={controls}
                  variants={subTitleVariant}
                  className="b-banner-subtext"
                >
                  Unlocking{" "}
                  <span className="underline-highlight">
                    Business Potential
                  </span>{" "}
                  Through Thoughtful UX/UI
                </motion.h4>
              </div>
            </div>
          </div>
        </div>
        <div className="event-slider2" ref={ref1}>
          <div className="event-slider-container">
            <div className="slider-content">
              <div className="event-text-block">
                <AnimatePresence>
                  <motion.h2
                    initial="hidden"
                    animate={controls}
                    exit={{ opacity: 0, y: -10 }}
                    variants={titleVariant}
                    className="b-banner-title"
                  >
                    Navigate Business
                    <span className="highlight"> Transformation </span>
                  </motion.h2>
                </AnimatePresence>
                <motion.h4
                  initial="hidden"
                  animate={controls}
                  variants={subTitleVariant}
                  className="b-banner-subtext"
                >
                  Maximizing
                  <span className="underline-highlight">
                    Business Impact
                  </span>{" "}
                  Through UX/UI Master
                </motion.h4>
              </div>
            </div>
          </div>
        </div>
        <div className="event-slider3">
          <div className="event-slider-container">
            <div className="slider-content">
              <div className="event-text-block">
                <motion.h2
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={titleVariant}
                  className="b-banner-title"
                >
                  Discovering the
                  <span className="highlight"> ROI </span>
                  of Exceptional UX/UI
                </motion.h2>
                <motion.h4
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={subTitleVariant}
                  className="b-banner-subtext"
                >
                  <span className="underline-highlight">Proven Strategies</span>{" "}
                  for Real-World Results
                </motion.h4>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default EventsBannerSlider;
