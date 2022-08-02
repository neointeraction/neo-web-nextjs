import React, { useState } from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import Menu from "../images/n-images/menu.svg";
import Close from "../images/n-images/close.svg";
import Facebook from "../images/facebook.svg";
import LinkedIn from "../images/linkedIn.svg";
import Twitter from "../images/twitter.svg";
import Instagram from "../images/instagram.svg";
import Dribble from "../images/dribbble.svg";
import Behance from "../images/behance.svg";
import Youtube from "../images/youtube.svg";
import Medium from "../images/medium.svg";

const Header = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
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
      x: 5,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  const textMotion = {
    rest: {
      color: "grey",

      transition: {
        duration: 1,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      color: "blue",

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

  return (
    <div className="header-with-panel">
      <div className="n-header-container">
        <motion.div
          className="n-menu"
          onClick={handleMenuOpen}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.img src={Menu} alt="Menu" variants={textMotion} />
          <motion.p variants={slashMotion} className="n-menu-text">
            Menu
          </motion.p>
        </motion.div>
        <div
          className="logo-container n-logo-container"
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
              transition={{ delay: 0.5, duration: 0.5 }}
              className="logo-text"
            >
              <div className="logo-text">
                <p>neointeraction design</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="n-header-contact">
          <button class="custom-btn" onClick={() => handleRoute("/ContactUs")}>
            Contact Us
          </button>
        </div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial="hidden"
            animate={{ y: [-1000, 0], opacity: [0.5, 1] }}
            exit={{ y: [0, -1000] }}
            transition={{ duration: 0.4 }}
            className={`nav-menu ${openMenu ? "open" : "close"}`}
          >
            <img
              src={Close}
              alt="Close"
              onClick={handleMenuClose}
              className="menu-close"
            />
            <motion.div
              initial="hidden"
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="n-menu-content"
            >
              <div className="row ">
                <div className="col-md-6">
                  <ul className="n-menu-list">
                    <li
                      className={`n-menu-item ${
                        router.pathname === "/" ? "active" : ""
                      }`}
                      onClick={() => handleRoute("/")}
                    >
                      Home
                    </li>
                    <li
                      className={`n-menu-item ${
                        router.pathname === "/AboutUs" ? "active" : ""
                      }`}
                      onClick={() => handleRoute("/AboutUs")}
                    >
                      About Us
                    </li>
                    <li
                      className={`n-menu-item ${
                        router.pathname === "/Projects" ? "active" : ""
                      }`}
                      onClick={() => handleRoute("/Projects")}
                    >
                      Projects
                    </li>
                    <li
                      className={`n-menu-item ${
                        router.pathname === "/UxService" ||
                        router.pathname === "/UiEngineering"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleRoute("/UxService")}
                    >
                      Service
                    </li>
                    <li
                      className={`n-menu-item ${
                        router.pathname === "/Career" ? "active" : ""
                      }`}
                      onClick={() => handleRoute("/Career")}
                    >
                      Career
                    </li>
                    <li
                      className={`n-menu-item ${
                        router.pathname === "/Blog" ? "active" : ""
                      }`}
                      onClick={() => handleRoute("/Blog")}
                    >
                      Blog
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 text-end">
                  <div className="menu-right-content">
                    <button
                      class="custom-btn"
                      onClick={() => handleRoute("/ContactUs")}
                    >
                      Contact Us
                    </button>
                    <ul className="social-icons n-social-icons no-bg">
                      <li id="ln">
                        <a
                          href="https://www.linkedin.com/company/neointeraction-designs/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                      </li>

                      <li id="insta">
                        <a
                          href="https://www.instagram.com/neointeraction/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={Instagram} alt="Instagram" />
                        </a>
                      </li>
                      <li id="dribble">
                        <a
                          href="https://dribbble.com/neointeraction"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={Dribble} alt="Dribble" />
                        </a>
                      </li>
                      <li id="behance">
                        <a
                          href="https://www.behance.net/neointeraction"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={Behance} alt="Behance" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
