import React, { Component } from "react";
// import "../css/main.css";
import Arrow from "../images/Arrow.svg";
import { baseUrl } from "../globalConfig";

export default class CardTile extends Component {
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
    const { category, className, backgroundImages, cardTitle, cardInfoText } =
      this.props;
    return (
      <div data-category={category}>
        <div
          className={`card-tile hover-zoom ${className}`}
          style={{
            backgroundImage: `url('${baseUrl}${backgroundImages}')`,
          }}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          {/* <div className="arrow-click">
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
          </div> */}
          {this.state.isMouseInside ? (
            <div className="info-box info-box-menu fadeInCard ">
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
            <div className="card-title animated fadeIn">
              <h1>{cardTitle}</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}
