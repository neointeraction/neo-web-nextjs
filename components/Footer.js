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

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Footer = () => {
  const router = useRouter();

  const handleRoute = (path) => {
    Router.push(path);
  };

  const [activeAccord, setActiveAccord] = useState("ux");

  return (
    <div>
      <div
        className={`footer-container ${router.pathname === "/" ? "home" : ""}`}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-menu">
                <ul className="footer-menu-link">
                  <li onClick={() => handleRoute("/about-us")}>About Us</li>
                  <li onClick={() => handleRoute("/projects")}>Projects</li>
                  <li
                    onClick={() =>
                      handleRoute(
                        "/ui-ux-design-developer-services-company-bangalore"
                      )
                    }
                  >
                    Services
                  </li>
                  <li onClick={() => handleRoute("/career")}>Careers</li>
                  <li onClick={() => handleRoute("/events")}>Events</li>
                  <li onClick={() => handleRoute("/contact-us")}>Contact Us</li>
                  <li onClick={() => handleRoute("/blogs")}>Blogs</li>
                </ul>
                <ul className="social-icons n-social-icons no-bg  mob-view-social">
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
                <ul className="secondary-menu-links">
                  <li onClick={() => handleRoute("/Downloads")}>Downloads</li>
                  {/* <li onClick={() => handleRoute("/Terms")}>Agency Terms</li> */}
                  <li onClick={() => handleRoute("/privacy-policy")}>
                    Privacy Policy
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row mob-hide margin-footer">
                <div className="col-md-3">
                  <h4
                    className="footer-links-title"
                    onClick={() =>
                      handleRoute(
                        "/ui-ux-design-developer-services-company-bangalore"
                      )
                    }
                  >
                    UX Design
                  </h4>
                  <ul
                    className="footer-quick-links"
                    onClick={() =>
                      handleRoute(
                        "/ui-ux-design-developer-services-company-bangalore"
                      )
                    }
                  >
                    <li>
                      <div className="link">User Research</div>
                    </li>
                    <li>
                      <div className="link">Heuristic Evaluvation</div>
                    </li>
                    <li>
                      <div className="link">Persona Devolopment</div>
                    </li>
                    <li>
                      <div className="link">IA Validation</div>
                    </li>
                    <li>
                      <div className="link">User Journey Mapping</div>
                    </li>
                    <li>
                      <div className="link">Wireframing</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h4
                    className="footer-links-title"
                    onClick={(e) =>
                      handleRoute("/product-design-services-bangalore-india")
                    }
                  >
                    Product Design
                  </h4>
                  <ul
                    className="footer-quick-links"
                    onClick={(e) =>
                      handleRoute("/product-design-services-bangalore-india")
                    }
                  >
                    <li>
                      <div className="link">Define Product Vision</div>
                    </li>
                    <li>
                      <div className="link">Product Research</div>
                    </li>
                    <li>
                      <div className="link">Structure Ideas</div>
                    </li>
                    <li>
                      <div className="link">Agile Design Sprints</div>
                    </li>
                    <li>
                      <div className="link">Rapid Prototyping</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h4
                    className="footer-links-title"
                    onClick={() =>
                      handleRoute("/ui-engineering-services-bangalore-india")
                    }
                  >
                    UI Engineering
                  </h4>
                  <ul
                    className="footer-quick-links"
                    onClick={() =>
                      handleRoute("/ui-engineering-services-bangalore-india")
                    }
                  >
                    <li>
                      <div className="link">UI handoff dev team</div>
                    </li>
                    <li>
                      <div className="link">Building react components</div>
                    </li>
                    <li>
                      <div className="link">Creating Interactive flows</div>
                    </li>
                    <li>
                      <div className="link">Integrating service</div>
                    </li>
                    <li>
                      <div className="link">Testing business flow</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h4
                    className="footer-links-title"
                    onClick={(e) =>
                      handleRoute(
                        "/design-transformation-services-bangalore-india"
                      )
                    }
                  >
                    Design Transformation
                  </h4>
                  <ul
                    className="footer-quick-links"
                    onClick={(e) =>
                      handleRoute(
                        "/design-transformation-services-bangalore-india"
                      )
                    }
                  >
                    <li>
                      <div className="link">Set a design foundation</div>
                    </li>
                    <li>
                      <div className="link">Achieving Human Friendly UX</div>
                    </li>
                    <li>
                      <div className="link">Build Design Strategy</div>
                    </li>
                    <li>
                      <div className="link">Documentation of design</div>
                    </li>
                    <li>
                      <div className="link">Bridging UX and UI</div>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="social-icons n-social-icons no-bg footer-social-icns">
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
              </ul>
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
                        <span
                          onClick={() =>
                            handleRoute(
                              "/ui-ux-design-developer-services-company-bangalore"
                            )
                          }
                        >
                          UX Design
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul className="footer-quick-links pl-0">
                        <li>
                          <div
                            className="link"
                            onClick={() =>
                              handleRoute(
                                "/ui-ux-design-developer-services-company-bangalore"
                              )
                            }
                          >
                            User Research
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={() =>
                              handleRoute(
                                "/ui-ux-design-developer-services-company-bangalore"
                              )
                            }
                          >
                            Heuristic Evaluvation
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={() =>
                              handleRoute(
                                "/ui-ux-design-developer-services-company-bangalore"
                              )
                            }
                          >
                            Persona Devolopment
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={() =>
                              handleRoute(
                                "/ui-ux-design-developer-services-company-bangalore"
                              )
                            }
                          >
                            IA Validation
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={() =>
                              handleRoute(
                                "/ui-ux-design-developer-services-company-bangalore"
                              )
                            }
                          >
                            User Journey Mapping
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={() =>
                              handleRoute(
                                "/ui-ux-design-developer-services-company-bangalore"
                              )
                            }
                          >
                            Wireframing
                          </div>
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
                        <span
                          onClick={(e) =>
                            handleRoute(
                              "/product-design-services-bangalore-india"
                            )
                          }
                        >
                          Product Design
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul className="footer-quick-links">
                        <li>
                          <div
                            className="link"
                            onClick={(e) =>
                              handleRoute(
                                "/product-design-services-bangalore-india"
                              )
                            }
                          >
                            Define Product Vision
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={(e) =>
                              handleRoute(
                                "/product-design-services-bangalore-india"
                              )
                            }
                          >
                            Product Research
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={(e) =>
                              handleRoute(
                                "/product-design-services-bangalore-india"
                              )
                            }
                          >
                            Structure Ideas
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={(e) =>
                              handleRoute(
                                "/product-design-services-bangalore-india"
                              )
                            }
                          >
                            Agile Design Sprints
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={(e) =>
                              handleRoute(
                                "/product-design-services-bangalore-india"
                              )
                            }
                          >
                            Rapid Prototyping
                          </div>
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
                        <span
                          onClick={() =>
                            handleRoute(
                              "/ui-engineering-services-bangalore-india"
                            )
                          }
                        >
                          UI Engineering
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul className="footer-quick-links">
                        <li>
                          <div
                            className="link"
                            onClick={() =>
                              handleRoute(
                                "/ui-engineering-services-bangalore-india"
                              )
                            }
                          >
                            UI handoff dev team
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={() =>
                              handleRoute(
                                "/ui-engineering-services-bangalore-india"
                              )
                            }
                          >
                            Building react components
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={() =>
                              handleRoute(
                                "/ui-engineering-services-bangalore-india"
                              )
                            }
                          >
                            Creating Interactive flows
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={() =>
                              handleRoute(
                                "/ui-engineering-services-bangalore-india"
                              )
                            }
                          >
                            Integrating service
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={() =>
                              handleRoute(
                                "/ui-engineering-services-bangalore-india"
                              )
                            }
                          >
                            Testing business flow
                          </div>
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
                        <span
                          onClick={(e) =>
                            handleRoute(
                              "/design-transformation-services-bangalore-india"
                            )
                          }
                        >
                          Design Transformation
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul className="footer-quick-links">
                        <li>
                          <div
                            className="link"
                            onClick={(e) =>
                              handleRoute(
                                "/design-transformation-services-bangalore-india"
                              )
                            }
                          >
                            Set a design foundation
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={(e) =>
                              handleRoute(
                                "/design-transformation-services-bangalore-india"
                              )
                            }
                          >
                            Achieving Human Friendly UX
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={(e) =>
                              handleRoute(
                                "/design-transformation-services-bangalore-india"
                              )
                            }
                          >
                            Build Design Strategy
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={(e) =>
                              handleRoute(
                                "/design-transformation-services-bangalore-india"
                              )
                            }
                          >
                            Documentation of design
                          </div>
                        </li>
                        <li>
                          <div
                            className="link"
                            onClick={(e) =>
                              handleRoute(
                                "/design-transformation-services-bangalore-india"
                              )
                            }
                          >
                            Bridging UX and UI
                          </div>
                        </li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© Neointeraction Design 2023, All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
