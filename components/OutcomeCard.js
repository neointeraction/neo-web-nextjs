import React, { Component } from "react";
// import "../css/main.css";

export default class OutcomeCard extends Component {
  constructor() {
    super();
    this.state = {
      isMouseInside: false,
    };
  }

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  };

  render() {
    const { className, backgroundImages, infoText, infoLabel } = this.props;
    return (
      <div>
        <div
          className={`process-card hover-zoom ${className}`}
          style={{ backgroundImage: `url(${backgroundImages})` }}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          <div className="pc-info-box-position">
            <div className="pc-info-box animated slideInUp fast">
              <p className="oc-label">{infoLabel}</p>
              <p className="oc-text">{infoText}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
