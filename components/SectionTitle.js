import React, { Component } from "react";
// import "../css/main.css";

export default class SectionTitle extends Component {
  render() {
    const { title, subtitle, center } = this.props;
    return (
      <div>
        <h2
          className={`sub-title mt-0 ${center ? "text-center" : "text-left"}`}
        >
          {title}
        </h2>
        <p className="sub-text">{subtitle}</p>
      </div>
    );
  }
}
