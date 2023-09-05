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

const Header = ({ upfront, isOpen }) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [isPromoActive, setIsPromoActive] = useState(false);

  useEffect(() => {
    setIsPromoActive(isOpen);
  }, [isOpen]);

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

  const [fixed, setfixed] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 0;
      if (scrollCheck) {
        setfixed(true);
        setIsPromoActive(false);
      } else {
        setfixed(false);
        setIsPromoActive(false);
        if (isOpen) {
          setIsPromoActive(true);
        }
      }
    });
  });

  const { ref, inView } = useInView({
    rootMargin: "-80px 0px -150px 0px",
  });

  return (
    <>
      {upfront ? (
        <div
          className={`header-with-panel ${fixed ? "fixed" : ""} ${
            isPromoActive ? "promo-banner-active" : ""
          }`}
        >
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
                  transition={{ delay: 0.5, duration: 0.5 }}
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
                home
              </li>
              <li
                className={` ${
                  router.pathname === "/about-us" ? "active" : ""
                }`}
                onClick={() => handleRoute("/about-us")}
              >
                about us
              </li>
              <li
                className={` ${
                  router.pathname ===
                    "/ui-ux-design-developer-services-company-bangalore" ||
                  router.pathname === "/ui-engineering-services-bangalore-india"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleRoute(
                    "/ui-ux-design-developer-services-company-bangalore"
                  )
                }
              >
                services
              </li>
              <li
                className={` ${
                  router.pathname === "/projects" ? "active" : ""
                }`}
                onClick={() => handleRoute("/projects")}
              >
                projects
              </li>
              <li
                className={`${router.pathname === "/blogs" ? "active" : ""}`}
                onClick={() => handleRoute("/blogs")}
              >
                blogs
              </li>
            </ul>
            <div className="n-header-contact">
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
          <AnimatePresence>
            {openMenu && (
              <motion.div
                initial="hidden"
                animate={{ y: [-1000, 0], opacity: [0.5, 1] }}
                exit={{ y: [0, -1000] }}
                // initial={{ opacity: [0, 1] }}
                // animate={{ opacity: [0, 1] }}
                // exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`nav-menu ${openMenu ? "open" : "close"}`}
              >
                <img
                  src={Close}
                  alt="Close"
                  onClick={handleMenuClose}
                  className="menu-close"
                />
                <div
                  initial="hidden"
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="n-menu-content"
                >
                  <div className="row ">
                    <div className="col-md-4">
                      <motion.ul
                        className="n-menu-list"
                        initial="hidden"
                        animate={{ x: [-300, 0], opacity: [0, 1] }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <li
                          className={`n-menu-item ${
                            router.pathname === "/" ? "active" : ""
                          }`}
                          onClick={() => handleRoute("/")}
                        >
                          home
                        </li>
                        <li
                          className={`n-menu-item ${
                            router.pathname === "/about-us" ? "active" : ""
                          }`}
                          onClick={() => handleRoute("/about-us")}
                        >
                          about us
                        </li>
                        <li
                          className={`n-menu-item ${
                            router.pathname === "/projects" ? "active" : ""
                          }`}
                          onClick={() => handleRoute("/projects")}
                        >
                          projects
                        </li>
                        <li
                          className={`n-menu-item ${
                            router.pathname ===
                              "/ui-ux-design-developer-services-company-bangalore" ||
                            router.pathname ===
                              "/ui-engineering-services-bangalore-india"
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            handleRoute(
                              "/ui-ux-design-developer-services-company-bangalore"
                            )
                          }
                        >
                          services
                        </li>
                        <li
                          className={`n-menu-item ${
                            router.pathname === "/career" ? "active" : ""
                          }`}
                          onClick={() => handleRoute("/career")}
                        >
                          career
                        </li>
                        <li
                          className={`n-menu-item ${
                            router.pathname === "/contact-us" ? "active" : ""
                          }`}
                          onClick={() => handleRoute("/contact-us")}
                        >
                          contact us
                        </li>
                        <li
                          className={`n-menu-item ${
                            router.pathname === "/blogs" ? "active" : ""
                          }`}
                          onClick={() => handleRoute("/blogs")}
                        >
                          blogs
                        </li>
                        <li>
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
                            <li id="medium">
                              <a
                                href="https://neointeraction-design.medium.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img src={Medium} alt="medium" />
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
                            <li id="insta">
                              <a
                                href="https://www.instagram.com/neointeraction/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img src={Instagram} alt="Instagram" />
                              </a>
                            </li>
                            <li id="fb">
                              <a
                                href="https://www.facebook.com/Neointeraction/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img src={Facebook} alt="facebook" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </motion.ul>
                    </div>
                    <div className="col-md-8 text-end">
                      <div className="menu-right-content" ref={ref}>
                        <AnimatePresence>
                          {inView && (
                            <motion.div
                              initial="hidden"
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.2 }}
                              className="menu-illustration"
                            >
                              <object type="image/svg+xml" data={Illustration}>
                                <img src={Illustration} alt="Illustration" />
                              </object>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div
          className={`header-with-panel ${fixed ? "fixed" : ""} ${
            isPromoActive ? "promo-banner-active" : ""
          }`}
        >
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
          <AnimatePresence>
            {openMenu && (
              <motion.div
                initial="hidden"
                animate={{ y: [-1000, 0], opacity: [0.5, 1] }}
                exit={{ y: [0, -1000] }}
                // initial={{ opacity: [0, 1] }}
                // animate={{ opacity: [0, 1] }}
                // exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`nav-menu ${openMenu ? "open" : "close"}`}
              >
                <img
                  src={Close}
                  alt="Close"
                  onClick={handleMenuClose}
                  className="menu-close"
                />
                <div
                  initial="hidden"
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="n-menu-content"
                >
                  <div className="row ">
                    <div className="col-md-4">
                      <motion.ul
                        className="n-menu-list"
                        initial="hidden"
                        animate={{ x: [-300, 0], opacity: [0, 1] }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
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
                            router.pathname === "/about-us" ? "active" : ""
                          }`}
                          onClick={() => handleRoute("/about-us")}
                        >
                          About Us
                        </li>
                        <li
                          className={`n-menu-item ${
                            router.pathname === "/projects" ? "active" : ""
                          }`}
                          onClick={() => handleRoute("/projects")}
                        >
                          Projects
                        </li>
                        <li
                          className={`n-menu-item ${
                            router.pathname ===
                              "/ui-ux-design-developer-services-company-bangalore" ||
                            router.pathname ===
                              "/ui-engineering-services-bangalore-india" ||
                            router.pathname ===
                              "/design-transformation-services-bangalore-india" ||
                            router.pathname ===
                              "/product-design-services-bangalore-india"
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
                          className={`n-menu-item ${
                            router.pathname === "/career" ? "active" : ""
                          }`}
                          onClick={() => handleRoute("/career")}
                        >
                          Careers
                        </li>
                        <li
                          className={`n-menu-item ${
                            router.pathname === "/contact-us" ? "active" : ""
                          }`}
                          onClick={() => handleRoute("/contact-us")}
                        >
                          Contact Us
                        </li>
                        <li
                          className={`n-menu-item ${
                            router.pathname === "/blogs" ? "active" : ""
                          }`}
                          onClick={() => handleRoute("/blogs")}
                        >
                          Blogs
                        </li>
                        <li>
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
                            <li id="medium">
                              <a
                                href="https://neointeraction-design.medium.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img src={Medium} alt="medium" />
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
                            <li id="insta">
                              <a
                                href="https://www.instagram.com/neointeraction/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img src={Instagram} alt="Instagram" />
                              </a>
                            </li>
                            <li id="fb">
                              <a
                                href="https://www.facebook.com/Neointeraction/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img src={Facebook} alt="facebook" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </motion.ul>
                    </div>
                    <div className="col-md-8 text-end">
                      <div className="menu-right-content" ref={ref}>
                        <AnimatePresence>
                          {inView && (
                            <motion.div
                              initial="hidden"
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.2 }}
                              className="menu-illustration"
                            >
                              <object type="image/svg+xml" data={Illustration}>
                                <img src={Illustration} alt="Illustration" />
                              </object>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default Header;
