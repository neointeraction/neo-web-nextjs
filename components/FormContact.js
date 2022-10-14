import React, { Component } from "react";
// import { ReCaptcha } from "react-recaptcha-google";
// import "../css/main.css";
import { ReCaptcha } from "react-recaptcha-google";
import { loadReCaptcha } from "react-recaptcha-google";
import { motion, AnimatePresence } from "framer-motion";

// import Lottie from "react-lottie";
import animationData from "../Lotties/cycle-anim.json";
import SimpleReactValidator from "simple-react-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ContactImg from "assets/images/contact-us-banner.jpg";

// const API_PATH =
//   "https://neointeraction.com/NEO_PROJECTS/neo_webiste_build/mailer.php";

import Illustration from "assets/images/n-images/contact-illustration.svg";

const axios = require("axios").default;

export default class FormContact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      mobile: "",
      email: "",
      description: "",
      // service: "",
      // nameError: "",
      // emailError: "",
      // mobError: "",
      isCaptchaValid: true,
      isErrorShown: false,
      isFormValid: false,
      mailSent: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
    // this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    // this.verifyCallback = this.verifyCallback.bind(this);
    this.validator = new SimpleReactValidator();
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  // componentDidMount() {
  //   loadReCaptcha();
  //   if (this.captchaDemo) {
  //     console.log("started, just a second...");
  //     this.captchaDemo.reset();
  //     //this.captchaDemo.execute();
  //   }
  // }

  // when submit btn is clicked

  submitEmail(e) {
    e.preventDefault();
    if (this.validator.allValid() && this.state.isCaptchaValid) {
      this.setState({ mailSent: true });
      // alert('You submitted the form and stuff!');
      // e.preventDefault();
      axios
        .post("https://www.neointeraction.com/server/send", this.state)
        .then((response) => {
          if (response.data.status === "success") {
            this.setState({ mailSent: false });
            toast(this.SuccessToast, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            // alert("Message Sent.");
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

  resetForm() {
    this.setState({
      name: "",
      mobile: "",
      email: "",
      description: "",
      // service: "",
      isCaptchaValid: true,
      isErrorShown: false,
      isFormValid: false,
    });
  }

  // handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   // Test
  //   if (
  //     this.state.email.length > 0 &&
  //     this.state.name.length > 0 &&
  //     this.state.description.length > 0 &&
  //     this.state.mobile.length > 0 &&
  //     this.state.service.length > 0
  //     // this.state.isCaptchaValid
  //   ) {
  //     this.setState({
  //       isErrorShown: false,
  //       isFormValid: true,
  //     });

  //     // Send the form with AJAX
  //     $.ajax({
  //       data: this.state,
  //       type: "POST",
  //       url: "https://neointeraction.com/NEO_PROJECTS/neo_webiste_build/mailer.php",
  //       success: function (data) {
  //         console.info(data);
  //       },
  //       error: function (xhr, status, err) {
  //         console.error(status, err.toString());
  //       },
  //     });

  //     // Reset state after sending the form
  //     this.setState({
  //       name: "",
  //       mobile: "",
  //       email: "",
  //       description: "",
  //       service: "",
  //       isCaptchaValid: false,
  //       isErrorShown: false,
  //       isFormValid: false,
  //     });
  //   } else {
  //     // Show error message
  //     this.setState({
  //       isErrorShown: true,
  //     });
  //   }
  // };

  // componentDidMount() {
  //   if (this.captchaDemo) {
  //     console.log("started, just a second...");
  //     this.captchaDemo.reset();
  //   }
  // }
  // onLoadRecaptcha() {
  //   if (this.captchaDemo) {
  //     this.captchaDemo.reset();
  //   }
  // }
  // verifyCallback(recaptchaToken) {
  //   this.setState({
  //     isCaptchaValid: true,
  //   });
  //   // Here you will get the final recaptchaToken!!!
  //   console.log(recaptchaToken, "<= your recaptcha token");
  // }
  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  SuccessToast = () => (
    <div className="success-msg-download width-md">
      <div className="check-wrap"></div>
      <p>
        Thank you for contacting us. We have received your request. Our team
        will connect with you shortly.!
      </p>
    </div>
  );

  // onLoadRecaptcha() {
  //   if (this.captchaDemo) {
  //     this.captchaDemo.reset();
  //     //this.captchaDemo.execute();
  //   }
  // }
  // verifyCallback(recaptchaToken) {
  //   this.setState({
  //     isCaptchaValid: true,
  //   });
  //   // Here you will get the final recaptchaToken!!!
  //   console.log(recaptchaToken, "<= your recaptcha token");
  // }

  render() {
    return (
      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-md-6 hide">
            <div className="contact-left-content">
              {/* <Lottie options={this.defaultOptions} height={400} width={400} /> */}
              <motion.div
                initial="hidden"
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="menu-illustration"
              >
                <object type="image/svg+xml" data={Illustration}>
                  <img src={Illustration} alt="Illustration" />
                </object>
              </motion.div>
            </div>
          </div>
          <div className="col-md-6 custom-position">
            <div className="wrapper">
              <form className="form-section" onSubmit={this.submitEmail}>
                <div className="side">
                  <h1 className="form-title contact-form-title">
                    Get in touch with us
                  </h1>
                  {/* <div className="InputGroup">
                    <input
                      type="radio"
                      name="service"
                      id="size_1"
                      value="UX Consultancy"
                      checked={this.state.service === "UX Consultancy"}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="size_1">UX Consultancy</label>
                    <input
                      type="radio"
                      name="service"
                      id="size_2"
                      value="UI Engineering"
                      checked={this.state.service === "UI Engineering"}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="size_2">UI Engineering</label>
                    <input
                      type="radio"
                      name="service"
                      id="size_3"
                      value="Product Design"
                      checked={this.state.service === "Product Design"}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="size_3">Product Design</label>
                  </div> */}
                  {/* {this.validator.message(
                    "service",
                    this.state.service,
                    "required"
                  )} */}
                  <div className="input-custom-field">
                    <input
                      className="input-custom"
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />

                    <span className="focus-border">
                      <i></i>
                    </span>
                  </div>
                  {this.validator.message(
                    "Name",
                    this.state.name,
                    "required|alpha"
                  )}
                  <div>{this.state.nameError}</div>
                  <div className="row ">
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
                        />
                        {/* <label>Mobile</label> */}
                        <span className="focus-border">
                          <i></i>
                        </span>
                      </div>
                      {this.validator.message(
                        "mobile",
                        this.state.mobile,
                        "required|phone"
                      )}
                      <div>{this.state.mobError}</div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-custom-field">
                        <input
                          className="input-custom"
                          type="email"
                          placeholder="Email"
                          name="email"
                          onChange={this.handleChange}
                          onBlur={() => this.validator.showMessageFor("email")}
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
                      <div>{this.state.emailError}</div>
                    </div>
                  </div>
                </div>
                <div className="side">
                  <div className="input-custom-field">
                    <textarea
                      className="input-custom"
                      rows="4"
                      placeholder="Project Description"
                      name="description"
                      onChange={this.handleChange}
                      value={this.state.description}
                    />

                    <span className="focus-border">
                      <i></i>
                    </span>
                  </div>
                  {this.validator.message(
                    "description",
                    this.state.description,
                    "required"
                  )}
                  <div className="input-custom-field captcha-feild">
                    {/* <ReCaptcha
                      ref={(el) => {
                        this.captchaDemo = el;
                      }}
                      size="normal"
                      render="explicit"
                      sitekey="6LefvnYcAAAAAOvQEHRZMlSVNv9WNqIm9OpQ3e8F"
                      onloadCallback={this.onLoadRecaptcha}
                      verifyCallback={this.verifyCallback}
                    /> */}
                  </div>

                  {/* <button className="custom-btn form-submit">
                    {this.state.mailSent ? "Submitting" : "Submit"}
                  </button> */}

                  <button className="custom-btn loader-btns">
                    {this.state.mailSent && this.state.isCaptchaValid ? (
                      <>
                        <span>Submit</span>
                        <div className="progress-bar">
                          <div className="circle border"></div>
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
                          Thank you for contacting me. I will reply in four
                          days.
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
              <div className="result-message">
                <h1 className="animated fadeInUp delay-2s">
                  Thanks for contacting us !
                </h1>
                <p className="animated fadeInUp delay-3s">
                  You are in good hands! <br /> We will get back to you within
                  24 hours.
                </p>

                <p className="animated fadeInUp delay-4s">
                  In meantime check out our most loved article about designing
                  <span>Dashboards</span>
                </p>
                <button className="link-text animated fadeInUp delay-4s">
                  For more
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
