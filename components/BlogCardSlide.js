import React, { Component } from "react";
// import "../css/main.css";
import Link from "next/link";
import BlogSlider from "./BlogSlider";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { baseUrl } from "../globalConfig";

import { BlogContext } from "context/BlogContext";

import Arrow from "assets/images/Arrow.svg";
import CarousalLeft from "assets/images/White_arrow_left.svg";
import CarousalRight from "assets/images/White_arrow_right.svg";

export default class BlogCardSlide extends Component {
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
            <div className="info-box info-box-menu fadeInCard menu-title">
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
                <ul className="box-area">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="card-title menu-title animated fadeIn">
              <h1>{cardTitle}</h1>
              <div className="blogsliderhome">
                {/* <BlogSlider  /> */}
                <BlogContext.Consumer>
                  {(context) => (
                    <React.Fragment>
                      <div
                        className="project-carousal"
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}
                      >
                        <Carousel
                          autoPlay={8000}
                          slidesPerPage={1}
                          addArrowClickHandler
                          infinite
                          offset={0}
                          itemWidth={360}
                          stopAutoPlayOnHover={true}
                          animationSpeed={1500}
                        >
                          {[...context.state.blogs].map((item) => (
                            <React.Fragment key={item.id}>
                              <Link
                                href={{
                                  pathname: `/blogs/${item.blog_detail.SEOUrl.replace(
                                    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                    ""
                                  ).replace(/ /g, "-")}`,
                                }}
                              >
                                <div className="link">
                                  <div className="video-card-thumb">
                                    <div className="project-slider-card blog-card-thumb">
                                      <h1 className="blog-title-home">
                                        {item.blogTitle}
                                      </h1>
                                      <img
                                        className="video-card-thumb project-card-thumb  width-100"
                                        src={`${baseUrl}${item.blogCardImage.url}`}
                                        alt="carousal-img"
                                      />
                                      <div
                                        className="info-slide-bg fadeInCard"
                                        style={{
                                          display: this.state.isMouseInside
                                            ? "block"
                                            : "none",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </React.Fragment>
                          ))}
                        </Carousel>
                      </div>
                    </React.Fragment>
                  )}
                </BlogContext.Consumer>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
