import React, { Component } from "react";
import Link from "next/link";
// import "../css/main.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { baseUrl } from "../globalConfig";

import { BlogContext } from "../context/BlogContext";

import CarousalLeft from "../images/White_arrow_left.svg";
import CarousalRight from "../images/White_arrow_right.svg";

export default class BlogSlider extends Component {
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
    // const {} = this.props;
    return (
      <div>
        <BlogContext.Consumer>
          {(context) => (
            <React.Fragment>
              <div
                className="project-carousal"
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
              >
                <Carousel
                  autoPlay={4000}
                  slidesPerPage={1}
                  arrowLeft={<img src={CarousalLeft} alt="left-arrow" />}
                  arrowRight={<img src={CarousalRight} alt="right-arrow" />}
                  addArrowClickHandler
                  infinite
                  offset={0}
                  itemWidth={360}
                  stopAutoPlayOnHover={true}
                  animationSpeed={1500}
                >
                  {[...context.state.blogs].map((item) => (
                    <React.Fragment key={item.id}>
                      <Link href={`/Blog/${item.id}`}>
                        <div className="video-card-thumb">
                          <div className="project-slider-card blog-card-thumb">
                            <h1>{item.blogTitle}</h1>
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
                            >
                              <h1>{item.blogTitle}</h1>
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
    );
  }
}
