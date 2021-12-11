import React, { Component } from "react";
import ReactWOW from "react-wow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "../css/main.css";

import { ReCaptcha } from "react-recaptcha-google";
import { loadReCaptcha } from "react-recaptcha-google";

import CloseModal from "../images/Black_close_icn.svg";
import Attach from "../images/attach_file_Icon.svg";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";

function InputFile(props) {
  return (
    <label className="InputFile" onChange={props.onChange}>
      <span className="upload-file-input">
        <span>
          <img src={Attach} alt="close-modal" />
        </span>
        <span className="upload-content">
          <p className="upload-label">Attach resume/portfolio (5Mb Max)</p>
          <p className="upload-filename">{props.filename}</p>
        </span>
      </span>
      <input
        type="file"
        name="image"
        accept=".docx,.pdf"
        onChange={props.onChange}
      />
    </label>
  );
}

export default class UxModal extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "No Attachment",
      files: [],
      description: "",
      service: "",
      currentSalary: "",
      expectedSalary: "",
      noticePeriod: "",
      reason: "",
      link: "",
      submitStatus: false,
      jobType: "UI Designer",
      isCaptchaValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.validator = new SimpleReactValidator();
  }

  handleInputChange = (e) => {
    const maxAllowedSize = 5 * 1024 * 1024; //5MB

    if (e.target.files[0]) {
      if (e.target.files[0].size > maxAllowedSize) {
        alert("The uploaded file is exceeds Max Mb");
      } else {
        this.setState({ files: [] });
        const Files = e.target.files;
        //const filesLength = Files.length;
        const FileName = e.target.files[0].name;

        let reader = new FileReader();
        let file = Files[0];
        reader.onloadend = () => {
          this.setState({ files: reader.result, message: FileName });
        };
        reader.readAsDataURL(file);
      }
    }
  };

  handleSendFiles = () => {
    console.log(this.state.files[0]);

    // this.state.files
  };

  SuccessToast = () => (
    <div className="success-msg-download">
      <div class="check-wrap"></div>
      <p>Mail Sent ! Your request has been successfully submitted!</p>
    </div>
  );

  submitEmail(e) {
    e.preventDefault();
    if (this.validator.allValid() && this.state.isCaptchaValid) {
      this.setState({ submitStatus: true });
      // alert('You submitted the form and stuff!');
      // e.preventDefault();
      axios
        .post("https://www.neointeraction.com/server/jobrequest", this.state)
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
  }

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
      message: "",
      files: [],
      description: "",
      service: "",
      currentSalary: "",
      expectedSalary: "",
      noticePeriod: "",
      reason: "",
      link: "",
    });
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  render() {
    const { togglePopover } = this.props;
    return (
      <div>
        <div className="modal-container animated fadeIn">
          <div className="popover-relative">
            <button
              onClick={togglePopover}
              className="modal-close model-close-ux"
            >
              <img src={CloseModal} alt="close-modal" />
            </button>
          </div>
          <ReactWOW animation="fadeIn" offset={-200}>
            <div className="intern-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="main-title animated text-left fadeIn pop-title">
                      Applying for an UI Designer
                    </h1>
                    <ul className="apply-info">
                      <li>
                        <strong> Position</strong> : UI Designer
                      </li>
                      <li>
                        <strong>Experience</strong> : 1+ year
                      </li>
                      <li>
                        <strong>Location</strong> : Bangalore, India
                      </li>
                    </ul>
                    <p className="ux-sub-text">Role & Responsibilities</p>
                    <ul className="solution-list ux-pop-title mb-20p">
                      <li>
                        Establish the visual identity of a project and create
                        interfaces/screens as per the requirements.
                      </li>
                      <li>
                        Setup or work within a UI guideline which will ensure
                        the uniformity and standardization of a brand’s vision
                        and style.
                      </li>
                      <li>
                        Design reusable UI components, graphics, icons,
                        infographics, and logos.
                      </li>
                      <li>
                        Collaborate with stakeholders and UX designers to
                        understand the flow and needs of a user.
                      </li>
                      <li>
                        Work closely with developers and inspect the quality of
                        the designs.
                      </li>
                    </ul>
                    <p className="ux-sub-text">Skills</p>
                    <ul className="solution-list ux-pop-title">
                      <li>
                        Good knowledge of colors, typography, visual aesthetics,
                        layout, and white space.
                      </li>
                      <li>
                        Experience with software like Adobe XD, Sketch, and
                        Figma.
                      </li>
                      <li>
                        Ability to develop new and fresh UI keeping simplicity a
                        priority.
                      </li>
                      <li>Handle and reflect on design feedback.</li>
                      <li>Bring identity to every design work.</li>
                      <li>
                        A strong design portfolio showcasing your design skills.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div className="wrapper">
                      <form className="form-section margin-add">
                        <div className="side">
                          <h1 className="form-title">Tell us about yourself</h1>

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
                          <div className="row ">
                            <div className="col-md-12">
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
                            </div>
                          </div>
                        </div>

                        <div className="side">
                          <div className="form-group input-custom-field">
                            <div className="FileUploadForm">
                              <InputFile
                                onChange={this.handleInputChange}
                                filename={this.state.message}
                                name="attachment"
                              />
                            </div>
                          </div>
                          {this.validator.message(
                            "attachment",
                            this.state.message !== "No Attachment"
                              ? this.state.message
                              : null,
                            "required"
                          )}
                          <div className="row ">
                            <div className="col-md-4">
                              <div className="input-custom-field">
                                <input
                                  className="input-custom"
                                  type="text"
                                  placeholder="Current salary"
                                  name="currentSalary"
                                  onChange={this.handleChange}
                                  value={this.state.currentSalary}
                                />
                                <span className="focus-border">
                                  <i></i>
                                </span>
                              </div>
                              {this.validator.message(
                                "current salary",
                                this.state.currentSalary,
                                "required|numeric|min:0,num"
                              )}
                            </div>
                            <div className="col-md-4">
                              <div className="input-custom-field">
                                <input
                                  className="input-custom"
                                  type="text"
                                  placeholder="Expected salary"
                                  name="expectedSalary"
                                  onChange={this.handleChange}
                                  value={this.state.expectedSalary}
                                />
                                <span className="focus-border">
                                  <i></i>
                                </span>
                              </div>
                              {this.validator.message(
                                "expected salary",
                                this.state.expectedSalary,
                                "required|numeric|min:0,num"
                              )}
                            </div>
                            <div className="col-md-4">
                              <div className="input-custom-field">
                                <input
                                  className="input-custom"
                                  type="text"
                                  placeholder="Notice period"
                                  name="noticePeriod"
                                  onChange={this.handleChange}
                                  value={this.state.noticePeriod}
                                />
                                <span className="focus-border">
                                  <i></i>
                                </span>
                              </div>
                              {this.validator.message(
                                "notice period",
                                this.state.noticePeriod,
                                "required"
                              )}
                            </div>
                          </div>
                          <div className="row ">
                            <div className="col-md-12">
                              <div className="input-custom-field">
                                <input
                                  className="input-custom"
                                  type="text"
                                  placeholder="Reason for job change"
                                  name="reason"
                                  onChange={this.handleChange}
                                  value={this.state.reason}
                                />
                                <span className="focus-border">
                                  <i></i>
                                </span>
                              </div>
                              {this.validator.message(
                                "job change",
                                this.state.reason,
                                "required"
                              )}
                            </div>
                          </div>
                          <div className="input-custom-field">
                            <textarea
                              className="input-custom"
                              rows="4"
                              placeholder="Add your Behance/Dribble/Linkedin links here"
                              name="link"
                              onChange={this.handleChange}
                              value={this.state.link}
                            ></textarea>

                            <span className="focus-border">
                              <i></i>
                            </span>
                          </div>
                          {this.validator.message(
                            "above",
                            this.state.link,
                            "required"
                          )}
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
                          <button
                            className="custom-btn form-submit loader-btns"
                            onClick={this.submitEmail}
                          >
                            {this.state.submitStatus ? (
                              <>
                                <span>Submiting</span>
                                <div class="progress-bar">
                                  <div class="circle border"></div>
                                </div>
                              </>
                            ) : (
                              <span>Submit</span>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ReactWOW>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
