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
import HomePageEvent from "assets/images/homepage-event.png";

const EventsSection = ({ inner }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleRoute = (path) => {
    Router.push(path);
  };

  return (
    <div className={`homepage-event-container ${inner ? "nobg" : ""}`}>
      <div className="row">
        <div
          className={`${
            inner ? "col-md-5" : "col-md-6"
          } homepage-event-content`}
        >
          <h2>
            Neointeraction <span>Design Events</span>
          </h2>
          <p>
            Join us on a journey of strategic enlightenment, thoughtfully
            crafted to offer valuable insights into the world of design and
            development. Here, we reveal the deep and meaningful business impact
            of design solutions
          </p>
          <button
            onClick={() => {
              handleRoute("/events");
            }}
          >
            Explore
          </button>
        </div>
        <div
          className={` ${
            inner ? "col-md-7" : "col-md-6"
          } homepage-event-image-container`}
        >
          <div>
            <img src={HomePageEvent} alt="lady watching an event" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
