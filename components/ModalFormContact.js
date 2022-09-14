import React, { Component } from "react";
import { ReCaptcha } from "react-recaptcha-google";
// import "../css/main.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactImg from "assets/images/quote-banner.jpg";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";

// const API_PATH =
//   "https://neointeraction.com/NEO_PROJECTS/neo_webiste_build/mailer.php";

export default class ModalFormContact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      mobile: "",
      duration: "",
      projectType: "",
      description: "",
      isCaptchaValid: false,
      isErrorShown: false,
      isFormValid: false,
      submitStatus: false,
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
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const { name, mobile, email } = this.state;
  //   const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   name.length < 1
  //     ? this.setState({ nameError: "Enter Valid Name" })
  //     : this.setState({ nameError: "" });

  //   mobile.length < 10
  //     ? this.setState({ mobError: "Enter Valid Mobile Number" })
  //     : this.setState({ mobError: "" });

  //   regexp.test(email)
  //     ? this.setState({ emailError: "error in length" })
  //     : this.setState({ emailError: "" });
  // }

  // when submit btn is clicked
  handleFormSubmit = (e) => {
    // e.preventDefault();
    // if (this.validator.allValid()) {
    //     // Test
    // if (
    //   this.state.name.length > 0 &&
    //   this.state.duration.length > 0 &&
    //   this.state.projectType.length > 0 &&
    //   this.state.description.length > 0
    //   // this.state.isCaptchaValid
    // ) {
    //   this.setState({
    //     isErrorShown: false,
    //     isFormValid: true,
    //   });

    //   // Send the form with AJAX
    //   $.ajax({
    //     data: this.state,
    //     type: "POST",
    //     url:
    //       "https://neointeraction.com/NEO_PROJECTS/neo_webiste_build/mailer.php",
    //     success: function (data) {
    //       console.info(data);
    //     },
    //     error: function (xhr, status, err) {
    //       console.error(status, err.toString());
    //     },
    //   });

    //   // Reset state after sending the form
    //   this.setState({
    //     name: "",
    //     duration:"",
    //     email:"",
    //     mobile:"",
    //     projectType:"",
    //     description: "",
    //     isCaptchaValid: false,
    //     isErrorShown: false,
    //     isFormValid: false,
    //   });
    // } else {
    //   // Show error message
    //   this.setState({
    //     isErrorShown: true,
    //   });
    // }
    // } else {
    //   this.validator.showMessages();
    //   // rerender to show messages for the first time
    //   // you can use the autoForceUpdate option to do this automatically`
    //   this.forceUpdate();
    // }

    e.preventDefault();
    if (this.validator.allValid()) {
      this.setState({ submitStatus: true });
      // alert('You submitted the form and stuff!');
      // e.preventDefault();
      axios
        .post("https://www.neointeraction.com/server/hiredeveloper", this.state)
        .then((response) => {
          if (response.data.status === "success") {
            this.setState({ submitStatus: false });
            toast(this.SuccessToast, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
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
  resetForm() {
    this.setState({
      name: "",
      email: "",
      mobile: "",
      duration: "",
      projectType: "",
      description: "",
      isCaptchaValid: false,
      isErrorShown: false,
      isFormValid: false,
    });
  }

  componentDidMount() {
    if (this.captchaDemo) {
      console.log("started, just a second...");
      this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }
  verifyCallback(recaptchaToken) {
    this.setState({
      isCaptchaValid: true,
    });
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  }

  SuccessToast = () => (
    <div className="success-msg-download width-md">
      <div className="check-wrap"></div>
      <p>
        Your request has been submitted successfully ! You will receive a
        call/email from our team shortly.
      </p>
    </div>
  );

  render() {
    return (
      <div className="form-group">
        <div className="row justify-content-center ">
          <div className="col-md-5 hide">
            <div className="contact-left-content">
              <img src={ContactImg} className="contact-img" alt="ContactImg" />
            </div>
          </div>
          <div className="col-md-5 custom-position">
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
                  </div>
                  <div className="row ">
                    <div className="col-md-6">
                      <div className="input-custom-field">
                        <select
                          className="input-custom"
                          name="duration"
                          id="Duration"
                          onChange={this.handleChange}
                          value={this.state.duration}
                        >
                          <option value="">Select Duration</option>
                          <option value="3">1-3 Months</option>
                          <option value="6">3-4 Months</option>
                          <option value="1">6+ Months</option>
                        </select>
                        <span className="focus-border">
                          <i></i>
                        </span>
                      </div>
                      {/* <div>{this.state.mobError}</div> */}
                      {this.validator.message(
                        "duration",
                        this.state.duration,
                        "required"
                      )}
                    </div>
                    <div className="col-md-6">
                      <div className="input-custom-field">
                        <select
                          className="input-custom"
                          name="projectType"
                          id="Duration"
                          onChange={this.handleChange}
                          value={this.state.projectType}
                        >
                          <option value="">Select Project Type</option>
                          <option value="ux">UX Audit</option>
                          <option value="ui">Ux Design</option>
                          <option value="uxr">UX Research</option>
                          <option value="uie">UI Engineering</option>
                          <option value="dt">Digital Transformation</option>
                          <option value="su">Startup Ux</option>
                        </select>

                        <span className="focus-border">
                          <i></i>
                        </span>
                      </div>
                      {/* <div>{this.state.emailError}</div> */}
                      {this.validator.message(
                        "project type",
                        this.state.projectType,
                        "required"
                      )}
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
                  <div className="input-custom-field">
                    <ReCaptcha
                      ref={(el) => {
                        this.captchaDemo = el;
                      }}
                      size="normal"
                      data-theme="light"
                      render="explicit"
                      sitekey="6LefvnYcAAAAAOvQEHRZMlSVNv9WNqIm9OpQ3e8F"
                      onloadCallback={this.onLoadRecaptcha}
                      verifyCallback={this.verifyCallback}
                    />
                  </div>
                  <button
                    className="custom-btn form-submit loader-btns"
                    onClick={this.handleFormSubmit}
                  >
                    {this.state.submitStatus ? (
                      <>
                        <span>Submiting</span>
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
