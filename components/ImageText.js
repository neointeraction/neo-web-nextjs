import React, { Component } from "react";
// import "../css/main.css";

export default class ImageText extends Component {
  render() {
    const { componentOrientation, ProjectImage, titleText, contentText } =
      this.props;
    return (
      <div className="about-project">
        <div className={`row ${componentOrientation}`}>
          <div className="col-md-6">
            <img
              className="br-7 width-100"
              src={ProjectImage}
              alt="ProjectImage"
            />
          </div>
          <div className="col-md-6">
            <div className="it-content">
              <h2 className="sub-title text-left mt-0">{titleText}</h2>
              <div className="pd-content">{contentText}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
