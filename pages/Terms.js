import React, { Component } from "react";
import ReactWOW from "react-wow";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { baseUrl } from "../globalConfig";

import { withRouter } from "next/router";

import Loader from "../components/Loader";

import BackArrow from "../images/BackArrow.svg";

export default withRouter(
  class Terms extends Component {
    constructor() {
      super();
      this.state = {
        isMouseInside: false,
        terms: [],
        loading: true,
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

    componentDidMount = async () => {
      try {
        const response = await axios.get(baseUrl + "/terms");
        this.setState({ terms: response.data });
        // console.log(response.data);
        console.log(this.state.terms);
        this.setState({ loading: false });
      } catch (error) {
        this.setState({ error });
      }
    };
    render() {
      return (
        <div>
          <Head>
            <title>Agency Terms | Neointeraction </title>
            <meta
              name="description"
              content="Neointeraction terms and conditions."
            />
          </Head>
          {this.state.loading ? (
            <Loader />
          ) : (
            <div>
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
              <div className="page-content">
                <div className="container animated fadeIn">
                  <h1 className="main-title animated fadeIn">Agency Terms</h1>
                  <h2 className="sub-title main-sub-title animated fadeIn delay-1s">
                    Take a look at our agency terms.
                  </h2>
                  <ReactWOW animation="fadeIn" delay="2s" offset={-200}>
                    <div className="about-project">
                      {this.state.terms.map((item) => (
                        <p className="sub-text">
                          <ReactMarkdown className="terms-para">
                            {item.termsText}
                          </ReactMarkdown>
                        </p>
                      ))}
                    </div>
                  </ReactWOW>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
);
