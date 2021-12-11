import React, { Component } from "react";
// import "../css/main.css";

export default class CombinedShapeCard extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className="cardbg">
        {content.map((data) => (
          <div key={data.key} className={`dpimg dpimg${data.key}`}>
            <img className="cscImg" src={data.img} alt="processImage" />
            <div className="cscContent">
              <h2 className="mc-title csc-title">{data.title}</h2>
              <h3 className="mc-text">{data.titleText}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
