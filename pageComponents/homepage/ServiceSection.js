import React, { useEffect, useState } from "react";

import Router from "next/router";

import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import UX from "assets/images/n-images/ux.svg";
import Product from "assets/images/n-images/product.svg";
import UI from "assets/images/n-images/ui.svg";
import Design from "assets/images/n-images/design.svg";
import ArrowRight from "assets/images/n-images/view-more-arrow.svg";

const titleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -5 },
};

const subTitleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 5 },
};

const ServiceSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [activeAccord, setActiveAccord] = useState("ux");

  const handleRoute = (path) => {
    Router.push(path);
  };

  return (
    <div className="service-container">
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={titleVariant}
        className="n-banner-title"
      >
        Our <span className="highlight">Services</span>
        <motion.h4
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={subTitleVariant}
          className="n-banner-subtext"
        >
          We have worked with some cool people to make their tech user friendly
        </motion.h4>
      </motion.h2>
      <div className="row">
        <div className="col-md-6">
          <AnimatePresence>
            {activeAccord === "ux" && (
              // <motion.img
              //   // initial={{ opacity: 0 }}
              //   // animate={{ opacity: 1, transition: { duration: 0.5 } }}
              //   // exit={{ opacity: 0 }}
              //   key="ux"
              //   initial={{ x: -200, y: 0, opacity: 0 }}
              //   animate={{ x: 0, y: 0, opacity: 1 }}
              //   src={UX}
              //   alt="UX"
              //   className="service-img"
              // />
              <motion.div
                key="product"
                initial={{ x: -200, y: 0, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                className="service-img"
              >
                <object type="image/svg+xml" data={UX}>
                  <img key="ux" src={UX} alt="UX" />
                </object>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {activeAccord === "product" && (
              <motion.img
                key="product"
                initial={{ x: -200, y: 0, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                src={Product}
                alt="Product"
                className="service-img"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {activeAccord === "ui" && (
              <motion.img
                key="ui"
                initial={{ x: -200, y: 0, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                src={UI}
                alt="UI"
                className="service-img"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {activeAccord === "design" && (
              <motion.img
                key="design"
                initial={{ x: -200, y: 0, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                src={Design}
                alt="Design"
                className="service-img"
              />
            )}
          </AnimatePresence>
        </div>
        <div className="col-md-6">
          <Accordion
            // allowZeroExpanded
            onChange={(id) => setActiveAccord(id.toString())}
            preExpanded={["ux"]}
          >
            <AccordionItem
              uuid="ux"
              className={`accordion__item ${activeAccord === "ux" ? "ux" : ""}`}
            >
              <AccordionItemHeading>
                <AccordionItemButton>
                  UX Design
                  <button
                    className="n-link-btn"
                    onClick={() => {
                      handleRoute("/UxService");
                    }}
                  >
                    <span className="view-txt">View More</span>
                    <span className="btn-arrow">
                      <img src={ArrowRight} alt="ArrowRight" />
                    </span>
                  </button>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <motion.div
                  key="product"
                  initial={{ x: -200, y: 0, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  className="service-img service-img-mob"
                >
                  <object type="image/svg+xml" data={UX}>
                    <img key="ux" src={UX} alt="UX" />
                  </object>
                </motion.div>
                <ul className="service-list">
                  <li>User Research</li>
                  <li>IA Validation</li>
                  <li>Heuristic Evaluvation</li>
                  <li>User Journey Mapping</li>
                  <li>Persona Devolopment</li>
                  <li>Wireframing</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="product"
              className={`accordion__item ${
                activeAccord === "product" ? "product" : ""
              }`}
            >
              <AccordionItemHeading>
                <AccordionItemButton>
                  Product Design
                  <button
                    className="n-link-btn"
                    onClick={(e) => handleRoute("/ProductService")}
                  >
                    <span className="view-txt">View More</span>
                    <span className="btn-arrow">
                      <img src={ArrowRight} alt="ArrowRight" />
                    </span>
                  </button>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <motion.img
                  key="product"
                  initial={{ x: -200, y: 0, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  src={Product}
                  alt="Product"
                  className="service-img service-img-mob"
                />
                <ul className="service-list">
                  <li>Define Product Vision</li>
                  <li>Product Research</li>
                  <li>Structure Ideas</li>
                  <li>Agile Design Sprints</li>
                  <li>Rapid Prototyping</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="ui"
              className={`accordion__item ${activeAccord === "ui" ? "ui" : ""}`}
            >
              <AccordionItemHeading>
                <AccordionItemButton>
                  UI Engineering
                  <button
                    className="n-link-btn"
                    onClick={(e) => handleRoute("/UiEngineering")}
                  >
                    <span className="view-txt">View More</span>
                    <span className="btn-arrow">
                      <img src={ArrowRight} alt="ArrowRight" />
                    </span>
                  </button>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <motion.img
                  key="ui"
                  initial={{ x: -200, y: 0, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  src={UI}
                  alt="UI"
                  className="service-img service-img-mob"
                />
                <ul className="service-list">
                  <li>UI handoff dev team</li>
                  <li>Building react components</li>
                  <li>Creating Interactive flows</li>
                  <li>Integrating service</li>
                  <li>Testing business flow</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="design"
              className={`accordion__item ${
                activeAccord === "design" ? "design" : ""
              }`}
            >
              <AccordionItemHeading>
                <AccordionItemButton>
                  Design Transformation
                  <button
                    className="n-link-btn"
                    onClick={(e) => handleRoute("/DesignTransformation")}
                  >
                    <span className="view-txt">View More</span>
                    <span className="btn-arrow">
                      <img src={ArrowRight} alt="ArrowRight" />
                    </span>
                  </button>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <motion.img
                  key="design"
                  initial={{ x: -200, y: 0, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  src={Design}
                  alt="Design"
                  className="service-img service-img-mob"
                />
                <ul className="service-list">
                  <li>Set a design foundation</li>
                  <li>Achieving Human Friendly UX</li>
                  <li>Build Design Strategy</li>
                  <li>Documentation of design</li>
                  <li>Bridging UX and UI</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
