import React, { Component } from "react";
import Link from "next/link";

import Facebook from "assets/images/facebook.svg";
import LinkedIn from "assets/images/linkedIn.svg";
import Twitter from "assets/images/twitter.svg";
import Instagram from "assets/images/instagram.svg";
import Dribble from "assets/images/dribbble.svg";
import Behance from "assets/images/behance.svg";
import Youtube from "assets/images/youtube.svg";
import Medium from "assets/images/medium.svg";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      emailValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
    this.validator = new SimpleReactValidator();
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  submitEmail(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      // alert('You submitted the form and stuff!');
      // e.preventDefault();
      axios
        .post("https://dev.neointeraction.com/server/send", this.state)
        .then((response) => {
          if (response.data.status === "success") {
            alert("Message Sent.");
            this.resetForm();
          } else if (response.data.status === "fail") {
            alert("Message failed to send.");
          }
        });
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <h4 className="footer-links-title">Studio</h4>
                <ul className="footer-quick-links">
                  <li>
                    <Link href="/AboutUs">
                      <div className="link">About</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Projects">
                      <div className="link">Projects</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <div className="link">Contact Us</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/career">
                      <div className="link">Careers</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs">
                      <div className="link">Blog</div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h4 className="footer-links-title">Services</h4>
                <ul className="footer-quick-links">
                  <li>
                    <Link href="/ui-ux-design-developer-services-company-bangalore">
                      <div className="link">UX Design</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-engineering-services-bangalore-india">
                      <div className="link">UI Engineering</div>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/VideoService">
                      <div className="link">Motion Design</div>
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="col-md-2">
                <h4 className="footer-links-title">Others</h4>
                <ul className="footer-quick-links">
                  <li>
                    <Link href="/Downloads">
                      <div className="link">Downloads</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Terms">
                      <div className="link">Agency Terms</div>
                    </Link>
                  </li>
                  {/* <li>
                    <Link   href="/legal">
                      Legal & IP
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="col-md-6">
                <div className="footer-input-group-flex">
                  <div className="newsletter-input">
                    <h4 className="footer-label">Subscribe newsletter</h4>
                    {/* <div className="input-custom-field">
                      <input
                        className="input-custom"
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange}
                        onBlur={() => this.validator.showMessageFor("email")}
                        value={this.state.email}
                      />
                      <span className="focus-border">
                        <i></i>
                      </span>
                    </div> */}
                    {/* <!-- Begin Mailchimp Signup Form --> */}
                    <div id="mc_embed_signup">
                      <form
                        action="https://neointeraction.us1.list-manage.com/subscribe/post?u=10403882a2d5bd04c7fbaf44e&amp;id=d45c5fcd29"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                        rel="noopener noreferrer"
                        noValidate
                      >
                        <div
                          id="mc_embed_signup_scroll"
                          className="newsletter-flex"
                        >
                          <div className="mc-field-group">
                            <input
                              type="email"
                              placeholder="Email"
                              value={this.state.emailValue}
                              name="EMAIL"
                              id="mce-EMAIL"
                              onChange={(e) => {
                                this.setState({ emailValue: e.target.value });
                              }}
                              className="input-custom required email"
                            />
                          </div>
                          <div id="mce-responses" className="clear">
                            <div
                              className="response"
                              id="mce-error-response"
                              style={{ display: "none" }}
                            ></div>
                            <div
                              className="response"
                              id="mce-success-response"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                          <div
                            style={{ position: "absolute", left: "-5000px" }}
                            aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_10403882a2d5bd04c7fbaf44e_d45c5fcd29"
                              tabIndex="-1"
                              value=""
                            />
                          </div>
                          <div className="clear">
                            <input
                              type="submit"
                              value="Subscribe"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                              className="custom-btn news-letter-btn"
                            />
                          </div>
                        </div>
                      </form>
                    </div>

                    {/* <!--End mc_embed_signup--> */}
                  </div>
                  {/* 
                  <button className="custom-btn" onClick={this.submitEmail}>
                    Subscribe
                  </button> */}
                </div>
                {this.validator.message(
                  "email",
                  this.state.email,
                  "required|email"
                )}
              </div>
            </div>

            <div className="copyright-flex">
              <p className="copyright-text cf-basis cf-quote">We love DESIGN</p>
              <ul className="social-icons  cf-basis-2 no-bg">
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
                <li id="youtube">
                  <a
                    href="https://www.youtube.com/channel/UColRU5HHG_45hDtLKiofh4g"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Youtube} alt="Youtube" />
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
              </ul>
              <p className="copyright-text  cf-basis-3">
                © Neointeraction Design, All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
