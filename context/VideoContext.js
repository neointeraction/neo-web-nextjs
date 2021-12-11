import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../globalConfig";
// import VideoData from "../json/VideoData";

export const VideoContext = React.createContext();

export class VideoProvider extends Component {
  state = {
    videoData: [],
    sourceUrl: "https://www.youtube.com/embed/VIxYv8kylt0",
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(baseUrl + "/videos");
      this.setState({ videoData: response.data });
      // console.log(response.data);
    } catch (error) {
      this.setState({ error });
    }
  };

  HandleVideo = (e) => {
    this.setState({ sourceUrl: e.target.getAttribute("data-src") });
    // this.setState({ playVid: this.refs.video.play() });
  };

  render() {
    return (
      <VideoContext.Provider
        value={{
          state: this.state,
          HandleVideo: this.HandleVideo,
        }}
      >
        {this.props.children}
      </VideoContext.Provider>
    );
  }
}
