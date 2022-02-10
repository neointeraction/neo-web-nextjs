import React, { Component } from "react";
// import "../css/main.css";

export default class ImageVideoText extends Component {
  render() {
    const {
      componentOrientation,
      ProjectImage,
      titleText,
      contentText,
      video,
      ProjectVideo,
      grid1,
      grid2,
    } = this.props;
    return (
      <div className="about-project">
        <div className={`row ${componentOrientation}`}>
          <div className={`col-lg-${grid1 || 6}`}>
            {video === false && (
              <img
                className="br-7 width-100"
                src={ProjectImage}
                alt="ProjectImage"
              />
            )}
            {video === true && (
              // <video
              //   width="532"
              //   height="492"
              //   src={ProjectVideo}
              //   controls
              //   className="video-player"
              // >
              //   Your browser does not support the video tag.
              // </video>
              <div className="video-wrapper">
                <iframe
                  src={ProjectVideo}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="video-full"
                  title="testimonials"
                  ref="video"
                ></iframe>
              </div>
            )}
          </div>
          <div className={`col-lg-${grid2 || 6}`}>
            <div className="it-content">
              <h2 className="sub-title text-left mt-0">{titleText}</h2>
              <div className="pd-content">{contentText}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
