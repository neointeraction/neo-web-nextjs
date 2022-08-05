import React, { useEffect, useState } from "react";

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
import UX from "../images/n-images/ux.svg";
import Product from "../images/n-images/product.svg";
import UI from "../images/n-images/ui.svg";
import Design from "../images/n-images/design.svg";

const titleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -5 },
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

  return (
    <div className="service-container">
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={titleVariant}
        className="n-banner-title"
      >
        Our <span className="highlight">Services</span>
      </motion.h1>
      <div className="row">
        <div className="col-md-6">
          <AnimatePresence>
            {activeAccord === "ux" && (
              <motion.img
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1, transition: { duration: 0.5 } }}
                // exit={{ opacity: 0 }}
                key="ux"
                initial={{ x: -200, y: 0, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                src={UX}
                alt="UX"
                className="service-img"
              />
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
                <AccordionItemButton>UX Design</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
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
                <AccordionItemButton>Product Design</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
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
                <AccordionItemButton>UI Engineering</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
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
                <AccordionItemButton>Design Transformation</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
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
