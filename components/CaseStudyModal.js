import React, { Component } from "react";
import { ReCaptcha } from "react-recaptcha-google";
import { loadReCaptcha } from "react-recaptcha-google";
import ReactWOW from "react-wow";
// import "../css/main.css";

import ContactImg from "../images/DownloadCase study.png";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";

import CloseModal from "../images/Black_close_icn.svg";
// import Attach from "../images/attach_file_Icon.svg";

export default class CaseStudyModal extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      mobile: "",
      organization: "",
      fileUrl: "",
      isCaptchaValid: false,
      isErrorShown: false,
      isFormValid: false,
      successMail: false,
      downloadSent: false,

      // nameError: "",
      // emailError: "",
      // mobError: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.validator = new SimpleReactValidator();
  }

  handleChange(event) {
    var url = event.target.getAttribute("data-url");
    this.setState({ fileUrl: url });
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  // when submit btn is clicked
  handleFormSubmit = (e) => {
    this.setState({ downloadSent: true });
    e.preventDefault();
    if (this.validator.allValid() && this.state.isCaptchaValid) {
      // alert('You submitted the form and stuff!');
      // e.preventDefault();
      axios
        .post(
          "https://www.neointeraction.com/server-casestudy/casestudy",
          this.state
        )
        .then((response) => {
          if (response.data.status === "success") {
            this.setState({ downloadSent: false });
            this.setState({ successMail: true });
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
  };

  componentDidMount() {
    loadReCaptcha();
    if (this.captchaDemo) {
      console.log("started, just a second...");
      this.captchaDemo.reset();
      //this.captchaDemo.execute();
    }
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
      //this.captchaDemo.execute();
    }
  }
  verifyCallback(recaptchaToken) {
    this.setState({
      isCaptchaValid: true,
    });
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      mobile: "",
      organization: "",
      isCaptchaValid: false,
      isErrorShown: false,
      isFormValid: false,
    });
  }
  render() {
    const { togglePopover } = this.props;
    return (
      <div className="modal-content-container">
        <div className="modal-container animated fadeIn ">
          <div className="popover-relative">
            <button
              onClick={togglePopover}
              className="modal-close model-close-ux"
            >
              <img src={CloseModal} alt="close-modal" />
            </button>
          </div>
          <ReactWOW animation="fadeIn" offset={-200}>
            <div className="form-group">
              <div className="row justify-content-center ">
                <div className="col-md-5 hide">
                  <div className="contact-left-content">
                    <img
                      src={ContactImg}
                      className="contact-img"
                      alt="ContactImg"
                    />
                  </div>
                </div>
                <div className="col-md-5 custom-position">
                  {this.state.successMail ? (
                    <div className="result-success-message">
                      <div>
                        <h1 className="animated fadeInUp delay-1s">
                          Case study download request successful !
                        </h1>
                        <p className="animated fadeInUp delay-2s">
                          Thank you for your interest in our case study. Check
                          your email for the case study file.
                        </p>

                        <p className="animated fadeInUp delay-2s">
                          Thanks ,<br />
                          Neointeraction Design Team
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="wrapper">
                      <form className="form-section">
                        <div className="side">
                          <h1 className="form-title">{this.props.formtitle}</h1>
                          <div className="input-custom-field">
                            <input
                              className="input-custom"
                              type="text"
                              placeholder="Name"
                              name="name"
                              onChange={this.handleChange}
                              value={this.state.name}
                              data-url={this.props.caseStudyUrlLink}
                            />
                            <span className="focus-border">
                              <i></i>
                            </span>
                          </div>

                          {/* <div>{this.state.nameError}</div> */}
                          <div className="row ">
                            <div className="col-md-6">
                              <div className="input-custom-field">
                                <input
                                  className="input-custom"
                                  type="text"
                                  placeholder="Email"
                                  name="email"
                                  onChange={this.handleChange}
                                  data-url={this.props.caseStudyUrlLink}
                                  // onBlur={() => this.validator.showMessageFor('email')}
                                  value={this.state.email}
                                />
                                <span className="focus-border">
                                  <i></i>
                                </span>
                              </div>
                              {this.validator.message(
                                "email",
                                this.state.email,
                                "required|email"
                              )}
                            </div>
                            <div className="col-md-6">
                              <div className="input-custom-field">
                                <input
                                  className="input-custom"
                                  type="number"
                                  placeholder="Mobile"
                                  name="mobile"
                                  maxlength="10"
                                  onChange={this.handleChange}
                                  value={this.state.mobile}
                                  data-url={this.props.caseStudyUrlLink}
                                />
                                {/* <label>Mobile</label> */}
                                <span className="focus-border">
                                  <i></i>
                                </span>
                              </div>
                              <div>{this.state.mobError}</div>
                            </div>
                          </div>
                          <div className="input-custom-field">
                            <input
                              className="input-custom"
                              type="text"
                              placeholder="Organization"
                              name="organization"
                              onChange={this.handleChange}
                              value={this.state.organization}
                              data-url={this.props.caseStudyUrlLink}
                            />
                            <span className="focus-border">
                              <i></i>
                            </span>
                          </div>
                        </div>
                        <div className="side">
                          <div className="input-custom-field captcha-feild">
                            <ReCaptcha
                              ref={(el) => {
                                this.captchaDemo = el;
                              }}
                              size="normal"
                              render="explicit"
                              sitekey="6LefvnYcAAAAAOvQEHRZMlSVNv9WNqIm9OpQ3e8F"
                              onloadCallback={this.onLoadRecaptcha}
                              verifyCallback={this.verifyCallback}
                            />
                          </div>
                          {/* <button
                            className="custom-btn form-submit"
                            onClick={this.handleFormSubmit}
                          >
                            Submit
                          </button> */}
                          <button
                            className="custom-btn loader-btns"
                            onClick={this.handleFormSubmit}
                          >
                            {this.state.downloadSent &&
                            this.state.isCaptchaValid ? (
                              <>
                                <span>Submit</span>
                                <div class="progress-bar">
                                  <div class="circle border"></div>
                                </div>
                              </>
                            ) : (
                              <span>Submit</span>
                            )}
                          </button>
                          <div>
                            {this.state.isFormSubmitted && (
                              <fieldset>
                                <p>
                                  Thank you for contacting me. I will reply in
                                  four days.
                                </p>
                              </fieldset>
                            )}

                            {this.state.isErrorShown && (
                              <fieldset className="error-text mt-10">
                                <p>Please, make sure to fill all fields.</p>
                              </fieldset>
                            )}
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ReactWOW>
        </div>
      </div>
    );
  }
}
