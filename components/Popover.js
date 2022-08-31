import React, { Component } from "react";
// import "../css/main.css";
// import { baseUrl } from "../globalConfig";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

//TO ADD VIDEOS GO TO THIS FILE
import { VideoContext } from "context/VideoContext";

import CarousalLeft from "assets/images/White_arrow_left.svg";
import CarousalRight from "assets/images/White_arrow_right.svg";
import CloseModal from "assets/images/White_close_icn.svg";

export default class Popover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceUrl: "",
    };
    this.HandleVideo = this.HandleVideo.bind(this);
  }

  componentWillReceiveProps({ sourceUrl }) {
    this.setState({ ...this.state, sourceUrl });
  }

  HandleVideo = (e) => {
    this.setState({ sourceUrl: e.target.getAttribute("data-src") });
    // this.setState({ playVid: this.refs.video.play() });
  };

  render() {
    const { togglePopover } = this.props;
    let videos = React.createRef();

    const settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      nextArrow: <img src={CarousalRight} alt="CarousalRight" />,
      prevArrow: <img src={CarousalLeft} alt="CarousalLeft" />,
    };
    return (
      <div>
        <VideoContext.Consumer>
          {(context) => (
            <React.Fragment>
              <div className="popover-container animated fadeIn video-popover">
                <div className="popover-relative">
                  <button onClick={togglePopover} className="modal-close">
                    <img src={CloseModal} alt="close-modal" />
                  </button>
                  <div className="video">
                    {/* <video
                src={this.state.sourceUrl}
                autoPlay
                className="video-full"
                ref="video"
                controls
                // poster={imageTwo}
              >
                Your browser does not support the video tag.
              </video>  */}
                    <iframe
                      src={this.state.sourceUrl}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      className="video-full"
                      title="testimonials"
                      ref={videos}
                    ></iframe>
                  </div>
                  <div className="carousal">
                    <h4 className="popover-title">
                      Watch our testimonial videos
                    </h4>
                    <Slider {...settings}>
                      {[...context.state.videoData]
                        .filter((name) => {
                          return name.video_categories
                            .map((li) => li.videoCategoryName)
                            .includes("Testimonial");
                        })
                        .map((item) => (
                          <div
                            className="video-card-thumb cursor-pointer"
                            key={item.key}
                          >
                            <img
                              className="video-card-thumb"
                              // src={`${baseUrl}${item.videoThumbnail.url}`}
                              src={`https://img.youtube.com/vi/${item.videoThumb}/hqdefault.jpg`}
                              alt="carousal-img"
                              data-src={item.videoUrl}
                              onClick={this.HandleVideo}
                            />
                          </div>
                        ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </VideoContext.Consumer>
      </div>
    );
  }
}
