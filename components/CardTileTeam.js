import React, { Component } from "react";
// import "../css/main.css";
import { baseUrl } from "../globalConfig";

import LinkedIn from "../images/linkedIn.svg";
import Dribble from "../images/dribbble.svg";

export default class CardTileTeam extends Component {
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
      linkedIn,
      dribble,
      designation,
    } = this.props;
    return (
      <div>
        <div
          className={`card-tile cursor-default hover-zoom ${className}`}
          style={{
            backgroundColor: `${bgColor}`,
            backgroundImage: `url(${baseUrl}${BackgroundImageCareer})`,
          }}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          {this.state.isMouseInside ? (
            <div className="info-box info-box-menu fadeInCard">
              <div className="card-title menu-title animated fadeIn">
                <h1>{cardTitle}</h1>
              </div>
              <div className="info-text-p animated fadeIn">
                <p>{cardInfoText}</p>
              </div>
              <div className="info-text-p animated fadeIn">
                {/* <ul className="icon-flex">
                  <li className="icon-div">
                    <a href={`${linkedIn}`}>LinkedIn</a>
                  </li>
                  <li className="icon-div">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${dribble}`}
                    >
                      Dribble
                    </a>
                  </li>
                </ul> */}
                <ul className="social-icons team-icons  cf-basis no-bg">
                  {linkedIn ? (
                    <li id="ln">
                      <a href={`${linkedIn}`}>
                        <img src={LinkedIn} alt="LinkedIn" />
                      </a>
                    </li>
                  ) : null}

                  {dribble ? (
                    <li id="dribble">
                      <a href={`${dribble}`}>
                        <img src={Dribble} alt="Dribble" />
                      </a>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <div className="card-title menu-title animated fadeIn">
                <h1>{cardTitle}</h1>
              </div>
              <div className="info-text-p animated fadeIn">
                <p>{designation}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
