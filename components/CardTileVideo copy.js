import React, { Component } from "react";
// import "../css/main.css";
import { baseUrl } from "../globalConfig";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { VideoContext } from "context/VideoContext";

import Play from "assets/images/Play.svg";

export default class CardTileVideo extends Component {
  constructor() {
    super();
    this.state = {
      isMouseInside: false,
      sourceUrl: "",
    };
    this.HandleVideoLink = this.HandleVideoLink.bind(this);
  }

  HandleVideoLink = (e) => {
    this.setState(
      { sourceUrl: e.currentTarget.attributes["data-src"].value },
      () => {
        this.props.sendVideoLink(this.state.sourceUrl);
      }
    );
  };

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  };

  render() {
    const { className, cardTitle } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      arrows: false,
    };
    return (
      <div>
        <VideoContext.Consumer>
          {(context) => (
            <React.Fragment>
              <Slider {...settings}>
                {[...context.state.videoData]
                  .filter((name) => {
                    return name.video_categories
                      .map((li) => li.videoCategoryName)
                      .includes("Testimonial");
                  })
                  .map((item) => (
                    <div>
                      <div
                        className={`card-tile hover-zoom cursor-pointer video-card ${className}`}
                        // style={{
                        //   backgroundImage: `url(${baseUrl}${item.videoThumbnail.url})`,
                        // }}
                        style={{
                          backgroundImage: `url(https://img.youtube.com/vi/${item.videoThumb}/hqdefault.jpg)`,
                        }}
                        // src={`https://img.youtube.com/vi/${item.videoThumb}/hqdefault.jpg`}
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}
                        key={item.id}
                        data-src={item.videoUrl}
                        onClick={this.HandleVideoLink}
                      >
                        <div className="play-btn">
                          <img src={Play} alt="Mail" />
                        </div>
                        <div className="card-title menu-title video-title animated fadeIn">
                          <h1>{cardTitle}</h1>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
            </React.Fragment>
          )}
        </VideoContext.Consumer>
      </div>
    );
  }
}
