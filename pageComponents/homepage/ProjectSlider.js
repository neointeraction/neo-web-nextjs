import React, { useEffect, useState } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DataContext } from "context/DataContext";
import { baseUrl } from "globalConfig";

import Right from "assets/images/n-images/slider-right.svg";
import Left from "assets/images/n-images/slider-left.svg";
import Link from "next/link";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
//import { Carousel } from "react-responsive-carousel";

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

  const [path, setPath] = useState("");

  console.log(path, "path");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      <div className="n-project-section">
        <DataContext.Consumer>
          {(context) => (
            <div>
              <Carousel
                swipeable={false}
                autoPlay
                infiniteLoop
                interval={5000}
                showIndicators={false}
                animationHandler="fade"
                renderArrowPrev={(clickHandler, hasPrev) => (
                  <>
                    {hasPrev && (
                      <div className="nav-l" onClick={clickHandler}>
                        <motion.img
                          whileHover={{ opacity: [0.8, 1] }}
                          transition={{ duration: 0.5 }}
                          initial={false}
                          src={Right}
                          alt="Prev"
                          className="slider-icon"
                        />
                      </div>
                    )}
                  </>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                  <>
                    {hasNext && (
                      <div className="nav-r" onClick={clickHandler}>
                        <motion.img
                          whileHover={{ opacity: [0.8, 1] }}
                          transition={{ duration: 0.5 }}
                          initial={false}
                          src={Left}
                          alt="Prev"
                          className="slider-icon"
                        />
                      </div>
                    )}
                  </>
                )}
              >
                {[...context.state.projects]
                  .sort((a, b) => a.projectId - b.projectId)
                  .filter((name) => {
                    console.log(name, "name");
                    return name.showInHomepage;
                  })
                  .map((cards, i) => (
                    <div className="slider-container">
                      <div className="slider-content">
                        <motion.h2
                          ref={ref}
                          initial={{ opacity: [0.8, 1] }}
                          animate={controls}
                          variants={titleVariant}
                          className="n-banner-title"
                        >
                          {cards.cardTitle}
                          {console.log(context.state.projects, "cards")}
                        </motion.h2>
                        <motion.h4
                          ref={ref}
                          initial={{ opacity: [0.8, 1] }}
                          animate={controls}
                          variants={subTitleVariant}
                          className="n-banner-subtext"
                        >
                          {cards.cardInfoText}
                        </motion.h4>
                      </div>
                      <Link
                        href={{
                          pathname: `/Projects/${cards.cardTitle
                            .replace(
                              /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                              ""
                            )
                            .replace(/ /g, "-")}`,
                        }}
                      >
                        <div className="slider-image" style={{ zIndex: 2 }}>
                          <div className="p-overlay">
                            <button class="custom-btn">Read more</button>
                          </div>
                          <motion.img
                            ref={ref}
                            initial={{ opacity: [0.8, 1] }}
                            animate={controls}
                            variants={imageVariant}
                            src={`${baseUrl}${cards.homePageBannerImg?.url}`}
                            alt="ProjImage"
                            style={{ width: "100%" }}
                            className="link-banner"
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
              </Carousel>
            </div>
          )}
        </DataContext.Consumer>
      </div>
    </AnimatePresence>
  );
};

export default ProjectSlider;
