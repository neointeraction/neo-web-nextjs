import React, { Component } from "react";
// import "../css/main.css";
import Arrow from "assets/images/Arrow.svg";
import CardFourOne from "assets/images/cardfour-1.svg";
import CardFourTwo from "assets/images/cardfour-2.svg";
import CardFourThree from "assets/images/cardfour-3.svg";

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

              <div className="animation-area">
                <ul className="svg-card-four ">
                  <li>
                    <img src={CardFourOne} />
                  </li>
                  <li>
                    <img src={CardFourTwo} />
                  </li>
                  <li>
                    <img src={CardFourThree} />
                  </li>
                </ul>
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
