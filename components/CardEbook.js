import React, { Component } from "react";
// import "../css/main.css";
import Arrow from "../images/Arrow.svg";

export default class CardEbook extends Component {
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
    const {
      className,
      bgColor,
      BackgroundImageCareer,
      cardTitle,
      cardInfoText,
    } = this.props;
    return (
      <div>
        <div
          className={`card-tile hover-zoom ${className}`}
          style={{
            backgroundColor: `${bgColor}`,
            backgroundImage: `url(${BackgroundImageCareer})`,
          }}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          {this.state.isMouseInside ? (
            <div className="info-box info-box-menu fadeInCard">
              <div className="arrow-click animated fadeInRight delay-04s">
                <button
                  className={
                    this.state.isMouseInside
                      ? "card-arrow-btn-hovered"
                      : "card-arrow-btn"
                  }
                >
                  <img
                    src={Arrow}
                    alt="logo"
                    style={{ opacity: this.state.isMouseInside ? 1 : 0.6 }}
                  />
                </button>
              </div>
              <div className="card-title menu-title animated fadeIn">
                <h1>{cardTitle}</h1>
              </div>
              <div className="info-text-p animated fadeIn">
                <p>{cardInfoText}</p>
              </div>
            </div>
          ) : (
            <div className="card-title menu-title animated fadeIn">
              <h1>{cardTitle}</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}
