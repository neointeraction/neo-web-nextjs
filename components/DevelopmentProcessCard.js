import React, { Component } from "react";
// import "../css/main.css";

export default class DevelopmentProcessCard extends Component {
  render() {
    const { Image, titleText } = this.props;
    return (
      <div className="modal-card dev-card justify-content-center">
        <img className="img-margin-bottom" src={Image} alt="processImage" />
        <h2 className="mc-title dev-title">{titleText}</h2>
      </div>
    );
  }
}
