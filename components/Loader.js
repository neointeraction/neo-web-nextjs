import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      // <div className="loader">
      //   {/* <div className="loading"></div> */}
      //   {/* <div className="logo-container loader-logo">
      //     <div className="logo-block block1 blockflip1"></div>
      //     <div className="logo-block block2 blockflip2"></div>
      //     <div className="logo-block block3 blockflip3"></div>
      //     <div className="logo-block block4 blockflip4"></div>
      //   </div> */}

      // </div>
      <div className="ripple-loader-container">
        <div className="ripple-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
