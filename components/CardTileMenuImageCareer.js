import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Arrow from "../images/Arrow.svg";
import CardOneOne from "../images/cardone-1.svg";
import CardOneTwo from "../images/cardone-2.svg";
import CardOneThree from "../images/cardone-3.svg";
import CardFiveOne from "../images/cardfive-1.svg";
import CardFiveTwo from "../images/cardfive-2.svg";





const openings = [
  {
    role: "UX Designer",
    experience: "1+ year",
    wrkschedule: "FULL TIME",
  },
  {
    role: "UX Designer",
    experience: "2+ year",
    wrkschedule: "FULL TIME",
  },
  {
    role: "UX Designer",
    experience: "4+ year",
    wrkschedule: "PART TIME",
  },
  {
    role: "UI Designer",
    experience: "1+ year",
    wrkschedule: "FULL TIME",
  },
  {
    role: "UI Engineer(ReactJS)",
    experience: "1+ year",
    wrkschedule: "FULL TIME",
  },
  {
    role: "UI Engineer(ReactJS)",
    experience: "2+ Years",
    wrkschedule: "PART TIME",
  },
  {
    role: "UI Engineer(ReactJS)",
    experience: "4+ year",
    wrkschedule: "FULL TIME",
  },

  {
    role: "Digital Marketing ",
    experience: "1+ year",
    wrkschedule: "CONSULTANT",
  },
  {
    role: "Project Manager",
    experience: "3+ year",
    wrkschedule: "FULL TIME",
  },
  {
    role: "Business Analyst",
    experience: "3+ year",
    wrkschedule: "PART TIME",
  },
];

export default class CardTileMenuImage extends Component {
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

    var settings = {
      dots: false,
      infinite: true,
      vertical:true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
    };

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
            <div className="info-box info-box-menu fadeInCard career-scroll">
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
              <div className="career-opt inside-red career-scroll">
              <Slider {...settings}> 
              {openings.map((item) => (
                <div className="job-roles">
                <h4>{item.role}</h4>
                <ul>
                <li>{item.experience}</li>
                <li className="wrkschdle">{item.wrkschedule}</li>
                </ul>
                </div>
                ))}
                </Slider>
              </div>
              {cardTitle == "about us" ? (
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
            <div>
            <div className="career-opt">
            <Slider {...settings}> 
            {openings.map((item) => (
                       <div className="job-roles">
                       <h4>{item.role}</h4>
                           <ul>
                           <li>{item.experience}</li>
                           <li>{item.technology}</li>
                           <li className="wrkschdle">{item.wrkschedule}</li>
                           </ul>
                       </div>
             ))}
              </Slider>
            </div>
            {cardTitle == "contact us" ? (
                <div className="animation-area">
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
              ) : (
                <div>
                </div>
              )}





            </div>
           

            </div>
          )}
        </div>
      </div>
    );
  }
}
