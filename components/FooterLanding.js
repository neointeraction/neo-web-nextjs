import React, { useState } from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import Facebook from "assets/images/facebook.svg";
import LinkedIn from "assets/images/linkedIn.svg";
import Twitter from "assets/images/twitter.svg";
import Instagram from "assets/images/instagram.svg";
import Dribble from "assets/images/dribbble.svg";
import Behance from "assets/images/behance.svg";
import Youtube from "assets/images/youtube.svg";
import Medium from "assets/images/medium.svg";
import Subscription from "./Subscription";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FooterLanding = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleRoute = (path) => {
    Router.push(path);
  };

  const [activeAccord, setActiveAccord] = useState("ux");

  return (
    <div>
      <div
        className={`footer-container footer-landing ${
          router.pathname === "/" ? "home" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row mob-hide ">
                <div className="col-md-2">
                  <h4
                    className="footer-links-title"
                    onClick={() =>
                      handleRoute(
                        "/ui-ux-design-developer-services-company-bangalore"
                      )
                    }
                  >
                    Studio
                  </h4>
                  <ul className="footer-quick-links">
                    <li onClick={() => handleRoute("/about-us")}>
                      <div className="link">About</div>
                    </li>
                    <li onClick={() => handleRoute("/projects")}>
                      <div className="link">Projects</div>
                    </li>
                    <li onClick={() => handleRoute("/contact-us")}>
                      <div className="link">Contact Us</div>
                    </li>
                    <li onClick={() => handleRoute("/career")}>
                      <div className="link">Careers</div>
                    </li>
                    <li onClick={() => handleRoute("/blogs")}>
                      <div className="link">Blog</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <h4 className="footer-links-title">Services</h4>
                  <ul className="footer-quick-links">
                    <li
                      onClick={(e) =>
                        handleRoute(
                          "/ui-ux-design-developer-services-company-bangalore"
                        )
                      }
                    >
                      <div className="link">UX Design</div>
                    </li>
                    <li
                      onClick={(e) =>
                        handleRoute("/product-design-services-bangalore-india")
                      }
                    >
                      <div className="link">Product Design </div>
                    </li>
                    <li
                      onClick={(e) =>
                        handleRoute(
                          "/design-transformation-services-bangalore-india"
                        )
                      }
                    >
                      <div className="link">Design Tranformation</div>
                    </li>
                    <li
                      onClick={(e) =>
                        handleRoute("/ui-engineering-services-bangalore-india")
                      }
                    >
                      <div className="link">UI Engineering</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <h4 className="footer-links-title">Others</h4>
                  <ul className="footer-quick-links">
                    <li onClick={(e) => handleRoute("/Downloads")}>
                      <div className="link">Downloads</div>
                    </li>
                    <li onClick={(e) => handleRoute("/privacy-policy")}>
                      <div className="link">Privacy Policy</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <h4 className="footer-links-title">Contact</h4>
                  <ul className="footer-quick-links">
                    <li>
                      <div className="link">Allen Stephen</div>
                    </li>
                    <li>
                      <div className="link">+91 95133 38744</div>
                    </li>
                    <li>
                      <div className="link">allen@neointeraction.com</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="footer-links-title">Subscribe Newsletter</h4>
                  <Subscription isFooter={true} />
                </div>
              </div>
              <div className="row mob-show col-xs-12">
                <div className="col-xs-4">
                  <h4
                    className="footer-links-title"
                    onClick={() =>
                      handleRoute(
                        "/ui-ux-design-developer-services-company-bangalore"
                      )
                    }
                  >
                    Studio
                  </h4>
                  <ul className="footer-quick-links">
                    <li onClick={() => handleRoute("/about-us")}>
                      <div className="link">About</div>
                    </li>
                    <li onClick={() => handleRoute("/projects")}>
                      <div className="link">Projects</div>
                    </li>
                    <li onClick={() => handleRoute("/contact-us")}>
                      <div className="link">Contact Us</div>
                    </li>
                    <li onClick={() => handleRoute("/career")}>
                      <div className="link">Careers</div>
                    </li>
                    <li onClick={() => handleRoute("/blogs")}>
                      <div className="link">Blog</div>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-4">
                  <h4 className="footer-links-title">Services</h4>
                  <ul className="footer-quick-links">
                    <li
                      onClick={(e) =>
                        handleRoute(
                          "/ui-ux-design-developer-services-company-bangalore"
                        )
                      }
                    >
                      <div className="link">UX Design</div>
                    </li>
                    <li
                      onClick={(e) =>
                        handleRoute("/product-design-services-bangalore-india")
                      }
                    >
                      <div className="link">Product Design </div>
                    </li>
                    <li
                      onClick={(e) =>
                        handleRoute(
                          "/design-transformation-services-bangalore-india"
                        )
                      }
                    >
                      <div className="link">Design Tranformation</div>
                    </li>
                    <li
                      onClick={(e) =>
                        handleRoute("/ui-engineering-services-bangalore-india")
                      }
                    >
                      <div className="link">UI Engineering</div>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-4">
                  <h4 className="footer-links-title">Others</h4>
                  <ul className="footer-quick-links">
                    <li onClick={(e) => handleRoute("/Downloads")}>
                      <div className="link">Downloads</div>
                    </li>
                    <li onClick={(e) => handleRoute("/privacy-policy")}>
                      <div className="link">Privacy Policy</div>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 p-0">
                  <h4 className="footer-links-title">Subscribe Newsletter</h4>
                  <Subscription isFooter={true} />
                </div>
              </div>

              {/* <ul className="social-icons n-social-icons no-bg footer-social-icns">
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
                <li id="twitter">
                  <a
                    href="https://twitter.com/neointeraction?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Twitter} alt="Twitter" />
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
                <li id="behance">
                  <a
                    href="https://www.behance.net/neointeraction"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Behance} alt="Behance" />
                  </a>
                </li>
              </ul> */}
              <div className="mobile-accord">
                <Accordion
                  // allowZeroExpanded
                  onChange={(id) => setActiveAccord(id.toString())}
                  preExpanded={["ux"]}
                >
                  <AccordionItem
                    uuid="ux"
                    className={`accordion__item ${
                      activeAccord === "ux" ? "ux" : ""
                    }`}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Studio</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul className="footer-quick-links">
                        <li onClick={() => handleRoute("/about-us")}>
                          <div className="link">About</div>
                        </li>
                        <li onClick={() => handleRoute("/projects")}>
                          <div className="link">Projects</div>
                        </li>
                        <li onClick={() => handleRoute("/contact-us")}>
                          <div className="link">Contact Us</div>
                        </li>
                        <li onClick={() => handleRoute("/career")}>
                          <div className="link">Careers</div>
                        </li>
                        <li onClick={() => handleRoute("/blogs")}>
                          <div className="link">Blog</div>
                        </li>
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
                        <span>Services</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul className="footer-quick-links">
                        <li
                          onClick={(e) =>
                            handleRoute(
                              "/ui-ux-design-developer-services-company-bangalore"
                            )
                          }
                        >
                          <div className="link">UX Design</div>
                        </li>
                        <li
                          onClick={(e) =>
                            handleRoute(
                              "/product-design-services-bangalore-india"
                            )
                          }
                        >
                          <div className="link">Product Design </div>
                        </li>
                        <li
                          onClick={(e) =>
                            handleRoute(
                              "/design-transformation-services-bangalore-india"
                            )
                          }
                        >
                          <div className="link">Design Tranformation</div>
                        </li>
                        <li
                          onClick={(e) =>
                            handleRoute(
                              "/ui-engineering-services-bangalore-india"
                            )
                          }
                        >
                          <div className="link">UI Engineering</div>
                        </li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem
                    uuid="ui"
                    className={`accordion__item ${
                      activeAccord === "ui" ? "ui" : ""
                    }`}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Others</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul className="footer-quick-links">
                        <li onClick={(e) => handleRoute("/Downloads")}>
                          <div className="link">Downloads</div>
                        </li>
                        <li onClick={(e) => handleRoute("/privacy-policy")}>
                          <div className="link">Privacy Policy</div>
                        </li>
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
                        <span>Contact</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul className="footer-quick-links">
                        <li>
                          <div className="link">Allen Stephen</div>
                        </li>
                        <li>
                          <div className="link">+91 95133 38744</div>
                        </li>
                        <li>
                          <div className="link">allen@neointeraction.com</div>
                        </li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                <div className="mob-nletter">
                  <h4 className="footer-links-title">Subscribe Newsletter</h4>
                  <Subscription isFooter={true} />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright landing-footer-flex">
            <p>We love DESIGN.</p>
            <ul className="social-icons n-social-icons no-bg footer-social-icns landing-social-icons">
              <li id="fb">
                <a
                  href="https://www.facebook.com/Neointeraction/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Facebook} alt="facebook" />
                </a>
              </li>
              <li id="ln">
                <a
                  href="https://www.linkedin.com/company/neointeraction-designs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedIn} alt="LinkedIn" />
                </a>
              </li>
              <li id="twitter">
                <a
                  href="https://twitter.com/neointeraction?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="Twitter" />
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
              {/* <li id="medium">
                <a
                  href="https://neointeraction-design.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Medium} alt="medium" />
                </a>
              </li> */}
              <li id="dribble">
                <a
                  href="https://dribbble.com/neointeraction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Dribble} alt="Dribble" />
                </a>
              </li>

              {/* <li id="behance">
                <a
                  href="https://www.behance.net/neointeraction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Behance} alt="Behance" />
                </a>
              </li> */}
            </ul>
            <p>Copyright © 2023 Neointeraction Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLanding;
