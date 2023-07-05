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
                  <ul
                    className="footer-quick-links"
                    onClick={() =>
                      handleRoute(
                        "/ui-ux-design-developer-services-company-bangalore"
                      )
                    }
                  >
                    <li>
                      <div className="link">About</div>
                    </li>
                    <li>
                      <div className="link">Projects</div>
                    </li>
                    <li>
                      <div className="link">Contact Us</div>
                    </li>
                    <li>
                      <div className="link">Careers</div>
                    </li>
                    <li>
                      <div className="link">Blog</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <h4
                    className="footer-links-title"
                    onClick={(e) =>
                      handleRoute("/product-design-services-bangalore-india")
                    }
                  >
                    Services
                  </h4>
                  <ul
                    className="footer-quick-links"
                    onClick={(e) =>
                      handleRoute("/product-design-services-bangalore-india")
                    }
                  >
                    <li>
                      <div className="link">UX Design</div>
                    </li>
                    <li>
                      <div className="link">UI Engineering</div>
                    </li>
                    <li>
                      <div className="link">Video Production</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <h4
                    className="footer-links-title"
                    onClick={(e) =>
                      handleRoute(
                        "/design-transformation-services-bangalore-india"
                      )
                    }
                  >
                    Others
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
                      <div className="link">Downloads</div>
                    </li>
                    <li>
                      <div className="link">Agency Terms</div>
                    </li>
                    <li>
                      <div className="link">Legal & IP</div>
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

                  {/* <form onSubmit={(e) => e.stopPropagation()}> */}
                  <div className="form-flex">
                    <input
                      type="email"
                      id="company"
                      name="company"
                      className={`input-custom ${email ? "" : "dark"}`}
                      placeholder="E-mail ID"
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                  </div>
                  <br />
                  {/* </form> */}
                  <button class="custom-btn subscribe-btn">Subscribe</button>
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
          <div className="footer-copyright landing-footer-flex">
            <p>We love DESIGN.</p>
            <ul className="social-icons n-social-icons no-bg footer-social-icns landing-social-icons">
              <li id="ln">
                <a
                  href="https://www.linkedin.com/company/neointeraction-designs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedIn} alt="LinkedIn" />
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
