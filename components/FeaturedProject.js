import React, { Component } from "react";
import Link from "next/link";
// import "../css/main.css";
import Arrow from "assets/images/Arrow.svg";
import ViewAll from "assets/images/ViewAll.svg";
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
          {this.state.isMouseInside ? (
            <div className="info-box info-box-menu fadeInCard ">
              <div className="arrow-click animated fadeInRight delay-04s">
                <Link href={{ pathname: `/projects` }}>
                  <button
                    className={
                      this.state.isMouseInside
                        ? "card-view-btn-hovered"
                        : "card-view-btn"
                    }
                  >
                    <img
                      src={ViewAll}
                      alt="logo"
                      style={{ opacity: this.state.isMouseInside ? 1 : 0.6 }}
                      className="viewall"
                    />
                  </button>
                </Link>
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
