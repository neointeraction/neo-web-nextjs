import React, { Component } from "react";
import Link from "next/link";

// import "../css/main.css";
import ArrowRight from "assets/images/SlideArrow.svg";
import CardTwoOne from "assets/images/cardtwo-1.svg";
import CardTwoTwo from "assets/images/cardtwo-2.svg";

export default class CardTileLinks extends Component {
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
      LinkOneName,
      LinkTwoName,
      LinkThreeName,
      LinkOne,
      LinkTwo,
      LinkThree,
    } = this.props;
    return (
      <div>
        <div
          className={`card-tile ${className}`}
          style={{
            backgroundColor: `${bgColor}`,
          }}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          <div className="card-title menu-title animated fadeIn">
            <h1>{cardTitle}</h1>
          </div>
          <div className="menu-card-links">
            <ul className="link-flex">
              <li>
                <Link href={`/${LinkOne}`}>
                  <div className="link-card">
                    <span>{LinkOneName}</span>
                    <span>
                      <img src={ArrowRight} alt="ArrowRight" />
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={`/${LinkTwo}`}>
                  <div className="link-card">
                    {LinkTwoName}
                    <span>
                      <img src={ArrowRight} alt="ArrowRight" />
                    </span>
                  </div>
                </Link>
              </li>
              {/* <li>
                <Link className="link-card" href={`/${LinkThree}`}>
                  <div className="link-card">
                    {LinkThreeName}
                    <span>
                      <img src={ArrowRight} alt="ArrowRight" />
                    </span>
                  </div>
                </Link>
              </li> */}
            </ul>
            <div className="animation-area">
              <ul className="svg-card-two ">
                <li>
                  <img src={CardTwoOne} />
                </li>
                <li>
                  <img src={CardTwoTwo} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
