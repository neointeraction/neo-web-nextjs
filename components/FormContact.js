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
import Select from "react-select";

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
      location: "",
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

  handleChangeCountry = (selectedOption) => {
    this.setState({ location: selectedOption });
  };

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
      location: "",
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
                      {/* <select
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
                      </select> */}
                      <Select
                        className="react-select-container"
                        classNamePrefix="react-select"
                        name="location"
                        id="location"
                        onChange={this.handleChangeCountry}
                        value={this.state.location}
                        options={[
                          { label: "Albania", value: "AL" },
                          { label: "Åland Islands", value: "AX" },
                          { label: "Algeria", value: "DZ" },
                          { label: "American Samoa", value: "AS" },
                          { label: "Andorra", value: "AD" },
                          { label: "Angola", value: "AO" },
                          { label: "Anguilla", value: "AI" },
                          { label: "Antarctica", value: "AQ" },
                          { label: "Antigua and Barbuda", value: "AG" },
                          { label: "Argentina", value: "AR" },
                          { label: "Armenia", value: "AM" },
                          { label: "Aruba", value: "AW" },
                          { label: "Australia", value: "AU" },
                          { label: "Austria", value: "AT" },
                          { label: "Azerbaijan", value: "AZ" },
                          { label: "Bahamas (the)", value: "BS" },
                          { label: "Bahrain", value: "BH" },
                          { label: "Bangladesh", value: "BD" },
                          { label: "Barbados", value: "BB" },
                          { label: "Belarus", value: "BY" },
                          { label: "Belgium", value: "BE" },
                          { label: "Belize", value: "BZ" },
                          { label: "Benin", value: "BJ" },
                          { label: "Bermuda", value: "BM" },
                          { label: "Bhutan", value: "BT" },
                          {
                            label: "Bolivia (Plurinational State of)",
                            value: "BO",
                          },
                          {
                            label: "Bonaire, Sint Eustatius and Saba",
                            value: "BQ",
                          },
                          { label: "Bosnia and Herzegovina", value: "BA" },
                          { label: "Botswana", value: "BW" },
                          { label: "Bouvet Island", value: "BV" },
                          { label: "Brazil", value: "BR" },
                          {
                            label: "British Indian Ocean Territory (the)",
                            value: "IO",
                          },
                          { label: "Brunei Darussalam", value: "BN" },
                          { label: "Bulgaria", value: "BG" },
                          { label: "Burkina Faso", value: "BF" },
                          { label: "Burundi", value: "BI" },
                          { label: "Cabo Verde", value: "CV" },
                          { label: "Cambodia", value: "KH" },
                          { label: "Cameroon", value: "CM" },
                          { label: "Canada", value: "CA" },
                          { label: "Cayman Islands (the)", value: "KY" },
                          {
                            label: "Central African Republic (the)",
                            value: "CF",
                          },
                          { label: "Chad", value: "TD" },
                          { label: "Chile", value: "CL" },
                          { label: "China", value: "CN" },
                          { label: "Christmas Island", value: "CX" },
                          {
                            label: "Cocos (Keeling) Islands (the)",
                            value: "CC",
                          },
                          { label: "Colombia", value: "CO" },
                          { label: "Comoros (the)", value: "KM" },
                          {
                            label: "Congo (the Democratic Republic of the)",
                            value: "CD",
                          },
                          { label: "Congo (the)", value: "CG" },
                          { label: "Cook Islands (the)", value: "CK" },
                          { label: "Costa Rica", value: "CR" },
                          { label: "Croatia", value: "HR" },
                          { label: "Cuba", value: "CU" },
                          { label: "Curaçao", value: "CW" },
                          { label: "Cyprus", value: "CY" },
                          { label: "Czechia", value: "CZ" },
                          { label: "Côte d'Ivoire", value: "CI" },
                          { label: "Denmark", value: "DK" },
                          { label: "Djibouti", value: "DJ" },
                          { label: "Dominica", value: "DM" },
                          { label: "Dominican Republic (the)", value: "DO" },
                          { label: "Ecuador", value: "EC" },
                          { label: "Egypt", value: "EG" },
                          { label: "El Salvador", value: "SV" },
                          { label: "Equatorial Guinea", value: "GQ" },
                          { label: "Eritrea", value: "ER" },
                          { label: "Estonia", value: "EE" },
                          { label: "Eswatini", value: "SZ" },
                          { label: "Ethiopia", value: "ET" },
                          {
                            label: "Falkland Islands (the) [Malvinas]",
                            value: "FK",
                          },
                          { label: "Faroe Islands (the)", value: "FO" },
                          { label: "Fiji", value: "FJ" },
                          { label: "Finland", value: "FI" },
                          { label: "France", value: "FR" },
                          { label: "French Guiana", value: "GF" },
                          { label: "French Polynesia", value: "PF" },
                          {
                            label: "French Southern Territories (the)",
                            value: "TF",
                          },
                          { label: "Gabon", value: "GA" },
                          { label: "Gambia (the)", value: "GM" },
                          { label: "Georgia", value: "GE" },
                          { label: "Germany", value: "DE" },
                          { label: "Ghana", value: "GH" },
                          { label: "Gibraltar", value: "GI" },
                          { label: "Greece", value: "GR" },
                          { label: "Greenland", value: "GL" },
                          { label: "Grenada", value: "GD" },
                          { label: "Guadeloupe", value: "GP" },
                          { label: "Guam", value: "GU" },
                          { label: "Guatemala", value: "GT" },
                          { label: "Guernsey", value: "GG" },
                          { label: "Guinea", value: "GN" },
                          { label: "Guinea-Bissau", value: "GW" },
                          { label: "Guyana", value: "GY" },
                          { label: "Haiti", value: "HT" },
                          {
                            label: "Heard Island and McDonald Islands",
                            value: "HM",
                          },
                          { label: "Holy See (the)", value: "VA" },
                          { label: "Honduras", value: "HN" },
                          { label: "Hong Kong", value: "HK" },
                          { label: "Hungary", value: "HU" },
                          { label: "Iceland", value: "IS" },
                          { label: "India", value: "IN" },
                          { label: "Indonesia", value: "ID" },
                          { label: "Iran (Islamic Republic of)", value: "IR" },
                          { label: "Iraq", value: "IQ" },
                          { label: "Ireland", value: "IE" },
                          { label: "Isle of Man", value: "IM" },
                          { label: "Israel", value: "IL" },
                          { label: "Italy", value: "IT" },
                          { label: "Jamaica", value: "JM" },
                          { label: "Japan", value: "JP" },
                          { label: "Jersey", value: "JE" },
                          { label: "Jordan", value: "JO" },
                          { label: "Kazakhstan", value: "KZ" },
                          { label: "Kenya", value: "KE" },
                          { label: "Kiribati", value: "KI" },
                          {
                            label:
                              "Korea (the Democratic People's Republic of)",
                            value: "KP",
                          },
                          { label: "Korea (the Republic of)", value: "KR" },
                          { label: "Kuwait", value: "KW" },
                          { label: "Kyrgyzstan", value: "KG" },
                          {
                            label: "Lao People's Democratic Republic (the)",
                            value: "LA",
                          },
                          { label: "Latvia", value: "LV" },
                          { label: "Lebanon", value: "LB" },
                          { label: "Lesotho", value: "LS" },
                          { label: "Liberia", value: "LR" },
                          { label: "Libya", value: "LY" },
                          { label: "Liechtenstein", value: "LI" },
                          { label: "Lithuania", value: "LT" },
                          { label: "Luxembourg", value: "LU" },
                          { label: "Macao", value: "MO" },
                          { label: "Madagascar", value: "MG" },
                          { label: "Malawi", value: "MW" },
                          { label: "Malaysia", value: "MY" },
                          { label: "Maldives", value: "MV" },
                          { label: "Mali", value: "ML" },
                          { label: "Malta", value: "MT" },
                          { label: "Marshall Islands (the)", value: "MH" },
                          { label: "Martinique", value: "MQ" },
                          { label: "Mauritania", value: "MR" },
                          { label: "Mauritius", value: "MU" },
                          { label: "Mayotte", value: "YT" },
                          { label: "Mexico", value: "MX" },
                          {
                            label: "Micronesia (Federated States of)",
                            value: "FM",
                          },
                          { label: "Moldova (the Republic of)", value: "MD" },
                          { label: "Monaco", value: "MC" },
                          { label: "Mongolia", value: "MN" },
                          { label: "Montenegro", value: "ME" },
                          { label: "Montserrat", value: "MS" },
                          { label: "Morocco", value: "MA" },
                          { label: "Mozambique", value: "MZ" },
                          { label: "Myanmar", value: "MM" },
                          { label: "Namibia", value: "NA" },
                          { label: "Nauru", value: "NR" },
                          { label: "Nepal", value: "NP" },
                          { label: "Netherlands (the)", value: "NL" },
                          { label: "New Caledonia", value: "NC" },
                          { label: "New Zealand", value: "NZ" },
                          { label: "Nicaragua", value: "NI" },
                          { label: "Niger (the)", value: "NE" },
                          { label: "Nigeria", value: "NG" },
                          { label: "Niue", value: "NU" },
                          { label: "Norfolk Island", value: "NF" },
                          {
                            label: "Northern Mariana Islands (the)",
                            value: "MP",
                          },
                          { label: "Norway", value: "NO" },
                          { label: "Oman", value: "OM" },
                          { label: "Pakistan", value: "PK" },
                          { label: "Palau", value: "PW" },
                          { label: "Palestine, State of", value: "PS" },
                          { label: "Panama", value: "PA" },
                          { label: "Papua New Guinea", value: "PG" },
                          { label: "Paraguay", value: "PY" },
                          { label: "Peru", value: "PE" },
                          { label: "Philippines (the)", value: "PH" },
                          { label: "Pitcairn", value: "PN" },
                          { label: "Poland", value: "PL" },
                          { label: "Portugal", value: "PT" },
                          { label: "Puerto Rico", value: "PR" },
                          { label: "Qatar", value: "QA" },
                          { label: "Republic of North Macedonia", value: "MK" },
                          { label: "Romania", value: "RO" },
                          { label: "Russian Federation (the)", value: "RU" },
                          { label: "Rwanda", value: "RW" },
                          { label: "Réunion", value: "RE" },
                          { label: "Saint Barthélemy", value: "BL" },
                          {
                            label:
                              "Saint Helena, Ascension and Tristan da Cunha",
                            value: "SH",
                          },
                          { label: "Saint Kitts and Nevis", value: "KN" },
                          { label: "Saint Lucia", value: "LC" },
                          { label: "Saint Martin (French part)", value: "MF" },
                          { label: "Saint Pierre and Miquelon", value: "PM" },
                          {
                            label: "Saint Vincent and the Grenadines",
                            value: "VC",
                          },
                          { label: "Samoa", value: "WS" },
                          { label: "San Marino", value: "SM" },
                          { label: "Sao Tome and Principe", value: "ST" },
                          { label: "Saudi Arabia", value: "SA" },
                          { label: "Senegal", value: "SN" },
                          { label: "Serbia", value: "RS" },
                          { label: "Seychelles", value: "SC" },
                          { label: "Sierra Leone", value: "SL" },
                          { label: "Singapore", value: "SG" },
                          { label: "Sint Maarten (Dutch part)", value: "SX" },
                          { label: "Slovakia", value: "SK" },
                          { label: "Slovenia", value: "SI" },
                          { label: "Solomon Islands", value: "SB" },
                          { label: "Somalia", value: "SO" },
                          { label: "South Africa", value: "ZA" },
                          {
                            label:
                              "South Georgia and the South Sandwich Islands",
                            value: "GS",
                          },
                          { label: "South Sudan", value: "SS" },
                          { label: "Spain", value: "ES" },
                          { label: "Sri Lanka", value: "LK" },
                          { label: "Sudan (the)", value: "SD" },
                          { label: "Suriname", value: "SR" },
                          { label: "Svalbard and Jan Mayen", value: "SJ" },
                          { label: "Sweden", value: "SE" },
                          { label: "Switzerland", value: "CH" },
                          { label: "Syrian Arab Republic", value: "SY" },
                          { label: "Taiwan (Province of China)", value: "TW" },
                          { label: "Tajikistan", value: "TJ" },
                          {
                            label: "Tanzania, United Republic of",
                            value: "TZ",
                          },
                          { label: "Thailand", value: "TH" },
                          { label: "Timor-Leste", value: "TL" },
                          { label: "Togo", value: "TG" },
                          { label: "Tokelau", value: "TK" },
                          { label: "Tonga", value: "TO" },
                          { label: "Trinidad and Tobago", value: "TT" },
                          { label: "Tunisia", value: "TN" },
                          { label: "Turkey", value: "TR" },
                          { label: "Turkmenistan", value: "TM" },
                          {
                            label: "Turks and Caicos Islands (the)",
                            value: "TC",
                          },
                          { label: "Tuvalu", value: "TV" },
                          { label: "Uganda", value: "UG" },
                          { label: "Ukraine", value: "UA" },
                          { label: "United Arab Emirates (the)", value: "AE" },
                          {
                            label:
                              "United Kingdom of Great Britain and Northern Ireland (the)",
                            value: "GB",
                          },
                          {
                            label: "United States Minor Outlying Islands (the)",
                            value: "UM",
                          },
                          {
                            label: "United States of America (the)",
                            value: "US",
                          },
                          { label: "Uruguay", value: "UY" },
                          { label: "Uzbekistan", value: "UZ" },
                          { label: "Vanuatu", value: "VU" },
                          {
                            label: "Venezuela (Bolivarian Republic of)",
                            value: "VE",
                          },
                          { label: "Viet Nam", value: "VN" },
                          { label: "Virgin Islands (British)", value: "VG" },
                          { label: "Virgin Islands (U.S.)", value: "VI" },
                          { label: "Wallis and Futuna", value: "WF" },
                          { label: "Western Sahara", value: "EH" },
                          { label: "Yemen", value: "YE" },
                          { label: "Zambia", value: "ZM" },
                          { label: "Zimbabwe", value: "ZW" },
                        ]}
                        placeholder="Select your Location"
                      />
                      <span className="focus-border">
                        <i></i>
                      </span>
                    </div>
                    {/* <div>{this.state.mobError}</div> */}
                    {/* {this.validator.message(
                      "location",
                      this.state.location,
                      "required"
                    )} */}
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
