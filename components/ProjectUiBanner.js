import React, { Component } from "react";

export default class ProjectUiBanner extends Component {
  render() {
    const { ProjectUiSrc, ProjectVidSrc } = this.props;
    return (
      <div>
        {ProjectVidSrc ? (
          <iframe
            src={ProjectVidSrc}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="video-full no-border"
            title="testimonials"
            ref="video"
          ></iframe>
        ) : (
          <img src={ProjectUiSrc} alt="project-img" className="width-100" />
        )}
      </div>
    );
  }
}
