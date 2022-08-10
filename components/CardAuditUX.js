import React, { Component } from "react";
import Slider from "react-slick";
// import "../css/main.css";
import Arrow from "assets/images/Arrow.svg";

export default class CardAuditUX extends Component {
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

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      initialSlide: 0,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1.5,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
          },
        },
      ],
    };

    return (
      <div>
        {/* <Slider {...settings}>
          {clients.map((item) => (
            <div className="client-box">
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </Slider> */}
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
        </div>
      </div>
    );
  }
}
