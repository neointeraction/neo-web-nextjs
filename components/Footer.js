import React from "react";
import Router from "next/router";

import LinkedIn from "assets/images/linkedIn.svg";
import Instagram from "assets/images/instagram.svg";
import Dribble from "assets/images/dribbble.svg";
import Behance from "assets/images/behance.svg";

const Footer = () => {
  const handleRoute = (path) => {
    Router.push(path);
  };

  return (
    <div>
      <div className="footer-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-menu">
                <ul className="footer-menu-link">
                  <li onClick={() => handleRoute("/AboutUs")}>About</li>
                  <li onClick={() => handleRoute("/Projects")}>Our Work</li>
                  <li onClick={() => handleRoute("/ContactUs")}>Contact Us</li>
                  <li onClick={() => handleRoute("/Career")}>Careers</li>
                  <li onClick={() => handleRoute("/UxService")}>Services</li>
                  <li onClick={() => handleRoute("/Blog")}>Blogs</li>
                </ul>
                <ul className="secondary-menu-links">
                  <li onClick={() => handleRoute("/Downloads")}>Downloads</li>
                  <li onClick={() => handleRoute("/Terms")}>Agency Terms</li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-3">
                  <h4 className="footer-links-title">UX Design</h4>
                  <ul className="footer-quick-links">
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
                  <h4 className="footer-links-title">Product Design</h4>
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
                </div>
                <div className="col-md-3">
                  <h4 className="footer-links-title">UI Engineering</h4>
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
                </div>
                <div className="col-md-3">
                  <h4 className="footer-links-title">Design transformation</h4>
                  <ul className="footer-quick-links">
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
                <li id="behance">
                  <a
                    href="https://www.behance.net/neointeraction"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Behance} alt="Behance" />
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
              </ul>
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
