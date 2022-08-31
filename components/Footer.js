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
                  <li onClick={() => handleRoute("/AboutUs")}>about us</li>
                  <li onClick={() => handleRoute("/Projects")}>projects</li>
                  <li onClick={() => handleRoute("/UxService")}>services</li>
                  <li onClick={() => handleRoute("/Career")}>careers</li>
                  <li onClick={() => handleRoute("/ContactUs")}>contact us</li>
                  <li onClick={() => handleRoute("/Blog")}>blogs</li>
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
                  <li onClick={() => handleRoute("/Terms")}>Agency Terms</li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row mob-hide margin-footer">
                <div className="col-md-3">
                  <h4
                    className="footer-links-title"
                    onClick={() => handleRoute("/UxService")}
                  >
                    ux design
                  </h4>
                  <ul
                    className="footer-quick-links"
                    onClick={() => handleRoute("/UxService")}
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
                    onClick={(e) => handleRoute("/ProductService")}
                  >
                    product design
                  </h4>
                  <ul
                    className="footer-quick-links"
                    onClick={(e) => handleRoute("/ProductService")}
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
                    onClick={() => handleRoute("/UiEngineering")}
                  >
                    ui engineering
                  </h4>
                  <ul
                    className="footer-quick-links"
                    onClick={() => handleRoute("/UiEngineering")}
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
                    onClick={(e) => handleRoute("/DesignTransformation")}
                  >
                    design transformation
                  </h4>
                  <ul
                    className="footer-quick-links"
                    onClick={(e) => handleRoute("/DesignTransformation")}
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
                      <AccordionItemButton>UX Design</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul className="footer-quick-links pl-0">
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
                      <ul className="footer-quick-links">
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
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem
                    uuid="ui"
                    className={`accordion__item ${
                      activeAccord === "ui" ? "ui" : ""
                    }`}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton>UI Engineering</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul className="footer-quick-links">
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
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul className="footer-quick-links">
                        <li>
                          <div className="link">Set a design foundation</div>
                        </li>
                        <li>
                          <div className="link">
                            Achieving Human Friendly UX
                          </div>
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
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© Neointeraction Design, All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
