import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "../css/main.css";
import Arrow from "assets/images/Arrow.svg";
import CardOneOne from "assets/images/cardone-1.svg";
import CardOneTwo from "assets/images/cardone-2.svg";
import CardOneThree from "assets/images/cardone-3.svg";
import CardFiveOne from "assets/images/cardfive-1.svg";
import CardFiveTwo from "assets/images/cardfive-2.svg";

// import AboutUsImg from "assets/images/about-us.jpeg";
import AboutUsImgOne from "assets/images/about-us-1.jpg";
import AboutUsImgTwo from "assets/images/about-us-2.jpg";
import AboutUsImgFour from "assets/images/about-us-4.jpg";
import AboutUsImgFive from "assets/images/about-us-5.jpg";
import AboutUsImgSix from "assets/images/about-us-6.jpg";
import AboutUsImgSeven from "assets/images/about-us-7.jpg";
// import CarousalLeft from "assets/images/White_arrow_left.svg";
// import CarousalRight from "assets/images/White_arrow_right.svg";

const aboutimages = [
  // {
  //   image: AboutUsImg,
  //   name: "AboutUsImg",
  // },

  {
    image: AboutUsImgOne,
    name: "AboutUsImg",
  },
  {
    image: AboutUsImgTwo,
    name: "AboutUsImg",
  },

  // {
  //   image: AboutUsImgThree,
  //   name: "AboutUsImg",
  // },

  {
    image: AboutUsImgFour,
    name: "AboutUsImg",
  },
  {
    image: AboutUsImgFive,
    name: "AboutUsImg",
  },
  {
    image: AboutUsImgSix,
    name: "AboutUsImg",
  },
  {
    image: AboutUsImgSeven,
    name: "AboutUsImg",
  },
];

export default class CardTileMenuImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      isMouseInside: false,
      divstyle: {
        visibility: "visible",
        opacity: 1,
        transition: "opacity 2s linear",
      },
    };
  }

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  };
  onSlideChange = () => {
    this.setState({
      divstyle: {
        ...this.state.divstyle,
        visibility: "hidden",
        opacity: 0,
        transition: "visibility 0s 1s, opacity 1s linear",
      },
    });
  };

  render() {
    const {
      className,
      bgColor,
      BackgroundImageCareer,
      cardTitle,
      cardInfoText,
    } = this.props;

    var settings = {
      dots: false,
      infinite: true,
      fade: true,
      slidesToShow: 1,
      initialSlide: 0,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: true,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            autoplay: true,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1.5,
            autoplay: true,
            cssEase: "linear",
          },
        },
      ],
    };

    return (
      <div>
        <div className={`card-tile hover-zoom ${className}`}>
          <div
            style={
              {
                //   backgroundColor: `${bgColor}`,
                //    backgroundImage: `url(${BackgroundImageCareer})`,
              }
            }
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
                {cardTitle == "about us" ? (
                  <div>
                    <div className=" animation-area">
                      <ul className="svg-card-two ">
                        <li>
                          <img src={CardOneOne} />
                        </li>
                        <li>
                          <img src={CardOneTwo} />
                        </li>
                        <li>
                          <img src={CardOneThree} />
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className=" animation-area">
                    <ul className="svg-card-two ">
                      <li>
                        <img src={CardFiveOne} />
                      </li>
                      <li>
                        <img src={CardFiveTwo} />
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="card-title menu-title animated fadeIn">
                  <h1>{cardTitle}</h1>
                </div>
                <div className="blogsliderhome">
                  <Slider {...settings}>
                    {aboutimages.map((item) => (
                      <img
                        src={item.image}
                        className="imageslider"
                        style={this.state.divstyle}
                      />
                    ))}
                  </Slider>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
