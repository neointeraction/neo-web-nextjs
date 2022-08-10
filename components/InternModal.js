import React, { Component } from "react";
import ReactWOW from "react-wow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "../css/main.css";

import { ReCaptcha } from "react-recaptcha-google";
import { loadReCaptcha } from "react-recaptcha-google";

import CloseModal from "assets/images/Black_close_icn.svg";
import Attach from "assets/images/attach_file_Icon.svg";
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
        accept=".pdf,.doc"
        onChange={props.onChange}
      />
    </label>
  );
}

export default class InternModal extends Component {
  constructor() {
    super();
    this.state = {
      message: "No Attachment",
      files: [],
      name: "",
      email: "",
      reason: "",
      submitStatus: false,
      jobType: "Internship",
      isCaptchaValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
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
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  SuccessToast = () => (
    <div className="success-msg-download">
      <div class="check-wrap"></div>
      <p>Mail Sent ! Your request has been successfully submitted!</p>
    </div>
  );

  submitHandler(e) {
    e.preventDefault();
    if (this.validator.allValid() && this.state.isCaptchaValid) {
      this.setState({ submitStatus: true });
      axios
        .post("https://www.neointeraction.com/server/career", this.state)
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
      message: "",
      files: [],
      name: "",
      email: "",
      reason: "",
    });
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
                      Applying for an Internship
                    </h1>
                    <p className="body-text">
                      Our studio take internships for below positions, while
                      applying you need to specific the duration/time period you
                      are looking for internships
                    </p>
                    <p className="ux-sub-text mt-3">Internship categories:</p>
                    <ul className="solution-list ux-pop-title mb-20p">
                      <li>UI Designer</li>
                      <li>UX Designer</li>
                      <li>UI Engineer</li>
                      <li>Digital Marketing</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div className="wrapper">
                      <form className="form-section">
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
                                  type="email"
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
                          <div className="input-custom-field">
                            <textarea
                              className="input-custom"
                              rows="4"
                              placeholder="Why join Neointeraction Design?"
                              name="reason"
                              onChange={this.handleChange}
                              value={this.state.reason}
                            ></textarea>

                            <span className="focus-border">
                              <i></i>
                            </span>
                          </div>
                          {this.validator.message(
                            "above",
                            this.state.reason,
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
                            onClick={this.submitHandler}
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
