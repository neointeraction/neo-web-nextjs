import React, { Component } from "react";
// import "../css/main.css";

export default class Form extends Component {
  render() {
    return (
      <div className="form-group">
        {/* <h1 className="form-title">Tell us about your project</h1> */}
        <div className="wrapper">
          <article className="letter">
            <form className="form-section">
              <div className="side">
                <div className="InputGroup">
                  <input type="radio" name="size" id="size_1" value="small" />
                  <label htmlFor="size_1">UI Design</label>
                  <input type="radio" name="size" id="size_2" value="small" />
                  <label htmlFor="size_2">UI Engineering</label>
                  <input type="radio" name="size" id="size_3" value="small" />
                  <label htmlFor="size_3">Video Services</label>
                </div>
                <div className="input-custom-field">
                  <input
                    className="input-custom"
                    type="text"
                    placeholder=""
                    required
                  />
                  <label>Name</label>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="input-custom-field">
                  <input className="input-custom" type="text" required />
                  <label>Mobile</label>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="input-custom-field">
                  <input className="input-custom" type="text" required />
                  <label>Email</label>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
              </div>
              <div className="side">
                <div className="input-custom-field">
                  <textarea
                    className="input-custom"
                    rows="4"
                    required
                  ></textarea>
                  <label>Project Description</label>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <button
                  className="custom-btn form-submit"
                  onClick={() => {
                    let formGroup = document.querySelector(".wrapper");
                    formGroup.classList.add("sent");
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </article>
          <div className="envelope front"></div>
          <div className="envelope back"></div>
          <div className="result-message">
            <h1 className="animated fadeInUp delay-2s">
              Thanks for contacting us !
            </h1>
            <p className="animated fadeInUp delay-3s">
              You are in good hands! <br /> We will get back to you within 24
              hours.
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
    );
  }
}
