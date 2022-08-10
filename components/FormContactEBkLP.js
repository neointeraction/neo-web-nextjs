import React, { Component } from "react";
// import { ReCaptcha } from "react-recaptcha-google";
// import "../css/main.css";
import { ReCaptcha } from "react-recaptcha-google";
import { loadReCaptcha } from "react-recaptcha-google";

import animationData from "../Lotties/cycle-anim.json";
import SimpleReactValidator from "simple-react-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import FormImage from "assets/images/image-10.jpg";
// import ContactImg from "assets/images/contact-us-banner.jpg";

// const API_PATH =
//   "https://neointeraction.com/NEO_PROJECTS/neo_webiste_build/mailer.php";

const axios = require("axios").default;

export default class FormContactEBkLP extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      mobile: "",
      email: "",
      // description: "",
      // service: "",
      // nameError: "",
      // emailError: "",
      // mobError: "",
      // isCaptchaValid: false,
      // isErrorShown: false,
      // isFormValid: false,
      // mailSent: false,
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
  //     // this.captchaDemo.execute();
  //   }
  // }

  // when submit btn is clicked

  submitEmail(e) {
    // console.log("hello",this.state);

    e.preventDefault();
    if (this.validator.allValid()) {
      this.setState({ mailSent: true });
      // alert('You submitted the form and stuff!'); "http://localhost:4000/sendebk" https://www.neointeraction.com/server/sendebk
      e.preventDefault();
      axios
        .post("https://www.neointeraction.com/server/sendebk", this.state)
        .then((response) => {
          if (response.data.status === "success") {
            this.setState({ mailSent: false });
            toast(this.SuccessToast, {
              position: "top-right",
              autoClose: 10000,
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
      email: "",
      // isCaptchaValid: false,
      isErrorShown: false,
      isFormValid: false,
    });
  }

  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  SuccessToast = () => (
    <div className="success-msg-ebk width-md">
      <div class="check-wrap"></div>
      <p>The e-book will be delivered to your email shortly.</p>
    </div>
  );

  // onLoadRecaptcha() {
  //   if (this.captchaDemo) {
  //     this.captchaDemo.reset();
  //     // this.captchaDemo.execute();
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
        <div className="align-items-right">
          {/* <div className="col-md-6 hide">
            <div className="contact-left-content">
              <img src={FormImage} alt="form-image"/>
            </div>
          </div> */}
          <div className="custom-position">
            <div className="wrapper">
              <form className="form-section" onSubmit={this.submitEmail}>
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
                  "required|alpha_space"
                )}

                <div className="input-custom-field">
                  <input
                    className="input-custom"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
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

                <button
                  className="custom-btn loader-btns"
                  onClick={this.submitEmail}
                >
                  {this.state.mailSent ? (
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
                        Thank you for contacting me. I will reply in four days.
                      </p>
                    </fieldset>
                  )}

                  {this.state.isErrorShown && (
                    <fieldset className="error-text mt-10">
                      <p>Please, make sure to fill all fields.</p>
                    </fieldset>
                  )}
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
