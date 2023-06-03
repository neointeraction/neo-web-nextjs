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
      location: "IN",
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
            this.validator.hideMessages();
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
      location: "IN",
      isCaptchaValid: true,
      isErrorShown: false,
      isFormValid: false,
    });
  }

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
                          // onBlur={() => this.validator.showMessageFor("email")}
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
                  <div>
                    <div className="input-custom-field">
                      <select
                        className="input-custom"
                        name="location"
                        id="location"
                        onChange={this.handleChange}
                        value={this.state.location}
                        placeholder="select"
                      >
                        <option value="" disabled selected>
                          Select your Location
                        </option>
                        <option value="AF">Afghanistan</option>
                        <option value="AX">Åland Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas (the)</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">
                          Bolivia (Plurinational State of)
                        </option>
                        <option value="BQ">
                          Bonaire, Sint Eustatius and Saba
                        </option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="IO">
                          British Indian Ocean Territory (the)
                        </option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="CV">Cabo Verde</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="KY">Cayman Islands (the)</option>
                        <option value="CF">
                          Central African Republic (the)
                        </option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">
                          Cocos (Keeling) Islands (the)
                        </option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros (the)</option>
                        <option value="CD">
                          Congo (the Democratic Republic of the)
                        </option>
                        <option value="CG">Congo (the)</option>
                        <option value="CK">Cook Islands (the)</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CW">Curaçao</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czechia</option>
                        <option value="CI">Côte d'Ivoire</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic (the)</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="SZ">Eswatini</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">
                          Falkland Islands (the) [Malvinas]
                        </option>
                        <option value="FO">Faroe Islands (the)</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">
                          French Southern Territories (the)
                        </option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia (the)</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM">
                          Heard Island and McDonald Islands
                        </option>
                        <option value="VA">Holy See (the)</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran (Islamic Republic of)</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KP">
                          Korea (the Democratic People's Republic of)
                        </option>
                        <option value="KR">Korea (the Republic of)</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">
                          Lao People's Democratic Republic (the)
                        </option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands (the)</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">
                          Micronesia (Federated States of)
                        </option>
                        <option value="MD">Moldova (the Republic of)</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands (the)</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger (the)</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">
                          Northern Mariana Islands (the)
                        </option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS">Palestine, State of</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines (the)</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="MK">Republic of North Macedonia</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russian Federation (the)</option>
                        <option value="RW">Rwanda</option>
                        <option value="RE">Réunion</option>
                        <option value="BL">Saint Barthélemy</option>
                        <option value="SH">
                          Saint Helena, Ascension and Tristan da Cunha
                        </option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="MF">Saint Martin (French part)</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SX">Sint Maarten (Dutch part)</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="SS">South Sudan</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan (the)</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan (Province of China)</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">
                          Turks and Caicos Islands (the)
                        </option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates (the)</option>
                        <option value="GB">
                          United Kingdom of Great Britain and Northern Ireland
                          (the)
                        </option>
                        <option value="UM">
                          United States Minor Outlying Islands (the)
                        </option>
                        <option value="US">
                          United States of America (the)
                        </option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">
                          Venezuela (Bolivarian Republic of)
                        </option>
                        <option value="VN">Viet Nam</option>
                        <option value="VG">Virgin Islands (British)</option>
                        <option value="VI">Virgin Islands (U.S.)</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                      </select>

                      <span className="focus-border">
                        <i></i>
                      </span>
                    </div>
                    {/* <div>{this.state.mobError}</div> */}
                    {this.validator.message(
                      "location",
                      this.state.location,
                      "required"
                    )}
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
