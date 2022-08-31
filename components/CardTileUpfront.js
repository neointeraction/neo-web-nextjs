import React, { Component } from "react";
// import "../css/main.css";
import Arrow from "assets/images/Arrow.svg";
import { baseUrl } from "../globalConfig";
import moment from "moment";

export default class CardTileUpfront extends Component {
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
      category,
      className,
      backgroundImages,
      cardTitle,
      blogtag1,
      author,
      postedTime,
    } = this.props;
    return (
      <div data-category={category}>
        <div
          className={`card-tile hover-zoom ${className}`}
          style={{ backgroundImage: `url(${baseUrl}${backgroundImages})` }}
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

              <ul className="blog-tag-flex">
                {blogtag1.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <div className="info-box info-box-cu info-box-blog animated slideInUp fast">
                <div className="card-title animated fadeIn">
                  <h1>{cardTitle}</h1>
                </div>
                <p className="infoText">
                  by <span className="author-name">{author}</span>
                  <span className="time-posted">
                    {moment(`${postedTime}`).startOf("hour").fromNow()}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
