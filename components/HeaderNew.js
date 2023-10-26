import React, { useState, useEffect } from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Menu from "assets/images/n-images/menu.svg";
import Close from "assets/images/n-images/close.svg";
import Facebook from "assets/images/facebook.svg";
import LinkedIn from "assets/images/linkedIn.svg";
import Twitter from "assets/images/twitter.svg";
import Instagram from "assets/images/instagram.svg";
import Dribble from "assets/images/dribbble.svg";
import Behance from "assets/images/behance.svg";
import Youtube from "assets/images/youtube.svg";
import Medium from "assets/images/medium.svg";
import Contact from "assets/images/n-images/header-contact.svg";
import Illustration from "assets/images/n-images/animated/menu-illustration.svg";

const HeaderNew = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const [fixed, setfixed] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);

    document.body.classList.add("menu-opened");
  };
  const handleMenuClose = () => {
    setOpenMenu(false);
    setTimeout(() => {
      document.body.classList.remove("menu-opened");
    }, 500);
  };

  const slashMotion = {
    rest: { x: 0, opacity: 1, ease: "easeOut", duration: 0.4, type: "tween" },
    hover: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  const textMotion = {
    rest: {
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const handleRoute = (path) => {
    Router.push(path);
    handleMenuClose();
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 0;
      if (scrollCheck) {
        setfixed(true);
      } else {
        setfixed(false);
      }
    });
  });

  const { ref, inView } = useInView({
    rootMargin: "-80px 0px -150px 0px",
  });

  return (
    <>
      <div className="header-block">
        <div className={`header-floating ${fixed ? "fixed" : ""}`}>
          <div className="n-header-container">
            <div
              className="logo-container n-logo-container upfront-logo-container"
              onClick={() => handleRoute("/")}
            >
              <div className="logo-container n-logo-container">
                <div className="logo-block block1 blockflip1" />
                <div className="logo-block block2 blockflip2" />
                <div className="logo-block block3 blockflip3" />
                <div className="logo-block block4 blockflip4" />
                <motion.div
                  animate={{ opacity: [0, 1] }}
                  initial="hidden"
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="logo-text"
                >
                  <div className="logo-text">
                    <p>neointeraction design</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <ul className="horizontal-menu-list">
              <li
                className={`${router.pathname === "/" ? "active" : ""}`}
                onClick={() => handleRoute("/")}
              >
                Home
              </li>
              <li
                className={` ${
                  router.pathname === "/about-us" ? "active" : ""
                }`}
                onClick={() => handleRoute("/about-us")}
              >
                About Us
              </li>
              <li
                className={` ${
                  router.pathname ===
                    "/ui-ux-design-developer-services-company-bangalore" ||
                  router.pathname ===
                    "/ui-engineering-services-bangalore-india" ||
                  router.pathname ===
                    "/design-transformation-services-bangalore-india" ||
                  router.pathname === "/product-design-services-bangalore-india"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleRoute(
                    "/ui-ux-design-developer-services-company-bangalore"
                  )
                }
              >
                Services
              </li>
              <li
                className={` ${
                  router.pathname === "/projects" ? "active" : ""
                }`}
                onClick={() => handleRoute("/projects")}
              >
                Projects
              </li>
              <li
                className={`${router.pathname === "/events" ? "active" : ""}`}
                onClick={() => handleRoute("/events")}
              >
                Events
              </li>
              <li
                className={`${router.pathname === "/blogs" ? "active" : ""}`}
                onClick={() => handleRoute("/blogs")}
              >
                Blogs
              </li>
            </ul>
            <div className="n-header-contact">
              <div className="right-menu-flex">
                <div className="join-menu">
                  <p
                    className={`${
                      router.pathname === "/career" ? "active" : ""
                    }`}
                    onClick={() => handleRoute("/career")}
                  >
                    Join Us
                  </p>
                </div>
                <div className="contact-block-btn">
                  <motion.div
                    className="n-menu contact-menu-btn"
                    onClick={() => handleRoute("/contact-us")}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <motion.img
                      src={Contact}
                      alt="Contact"
                      variants={textMotion}
                      className="contact-mob"
                    />
                    <motion.p variants={slashMotion} className="n-menu-text ">
                      Contact Us
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNew;
