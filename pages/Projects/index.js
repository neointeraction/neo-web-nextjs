import React, { Component } from "react";
import Head from "next/head";
import FilterCardProjects from "../../components/FilterCardProjects";
import BackArrow from "../../images/BackArrow.svg";

import { withRouter } from "next/router";

export default withRouter(
  class Projects extends Component {
    constructor() {
      super();
      this.state = {
        isMouseInside: false,
      };
      this.handleBack = this.handleBack.bind(this);
    }

    mouseEnter = () => {
      this.setState({ isMouseInside: true });
    };
    mouseLeave = () => {
      this.setState({ isMouseInside: false });
    };

    handleBack() {
      this.props.router.back();
    }
    render() {
      return (
        <div>
          <div>
            <Head>
              <title>Projects | Neointeraction</title>
              <meta
                name="description"
                content="Check out the best projects we have designed for our happy customers. Our designs are detial-oriented and simplified to boost your business. Contact us now!"
              />
              <meta
                name="keywords"
                content="design projects, best design case studies, UI/UX design projects, ui/ux ux design case study, best ux design projects"
              />
            </Head>
          </div>

          <a to="#" onClick={this.handleBack}>
            <div
              className="back-btn"
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
            >
              <img
                src={BackArrow}
                alt="back"
                style={{ opacity: this.state.isMouseInside ? 1 : 0.6 }}
              />
            </div>
          </a>
          <div className="container">
            <div className="home-content">
              <h1 className="main-title animated fadeIn delay-0.5s">
                Projects
              </h1>
              <div>
                <FilterCardProjects />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);
