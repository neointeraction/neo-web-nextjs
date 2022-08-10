import React, { Component } from "react";
// import "../css/main.css";
import Arrow from "assets/images/Arrow.svg";
import CardThreeOne from "assets/images/cardthree-1.svg";
import CardThreeTwo from "assets/images/cardthree-2.svg";

export default class CardTileMenu extends Component {
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
      cardTitle,
      email,
      phone,
      img1,
      img2,
      img1L,
      img2L,
      cardInfoText,
    } = this.props;
    return (
      <div>
        <div
          className={`card-tile hover-zoom ${className}`}
          style={{
            backgroundColor: `${bgColor}`,
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
              <div className="icon-flex">
                <div className="icon-div">{img1L}</div>
                <div className="icon-div">{img2L}</div>
              </div>
            </div>
          ) : (
            <div>
              <div className="card-title menu-title animated fadeIn">
                <h1>{cardTitle}</h1>
              </div>
              <div className="menu-card-content">
                <p>{email}</p>
                <p>{phone}</p>
              </div>
              <div className="icon-flex">
                <div
                  className="icon-div"
                  style={{ opacity: this.state.isMouseInside ? 1 : 0.6 }}
                >
                  {img1}
                </div>
                <div
                  className="icon-div"
                  style={{ opacity: this.state.isMouseInside ? 1 : 0.6 }}
                >
                  {img2}
                </div>
              </div>
            </div>
          )}
          {/* <div class="animation-area">
            <ul class="blob">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
          </div> */}

          <div className=" animation-area">
            <ul className="svg-card-two ">
              <li>
                <img src={CardThreeOne} />
              </li>
              <li>
                <img src={CardThreeTwo} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
