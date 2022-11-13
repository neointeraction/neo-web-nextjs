import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import ReactModal from "react-modal";
import Head from "next/head";
import { baseUrl } from "../globalConfig";
import axios from "axios";

import Loader from "components/Loader";
import { BFSIContext } from "context/BFSIContext";
import GetQuoteModal from "components/GetQuoteModal";

// import BackArrow from "assets/images/BackArrow.svg";
import Close from "assets/images/Close.svg";
import ArrowRightBlack from "assets/images/arrowRightBlack.svg";

export default class BFSI extends Component {
  constructor() {
    super();
    this.state = {
      isMouseInside: false,
      filter: undefined,
      BFSICategory: [],
      loading: true,
      showModal: false,
    };
    this.handleBack = this.handleBack.bind(this);
  }

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(baseUrl + "/bfsi-categories");
      this.setState({ BFSICategory: response.data });
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ error });
    }
  };

  handleBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <div>
          <Head>
            <title>BFSI | Neointeraction</title>
            <meta
              name="description"
              content="Banking, Financial Services and Insurance"
            />
            <meta
              name="keywords"
              content="Best UI/UX design articles, UX blogs,designing blogs, design articles, important design case studies, UI/UX design case studies, download UI/UX case studies"
            />
            <link rel="canonical" href="https://www.neointeraction.com/bfsi" />
          </Head>
        </div>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div>
            {/* <Link to="#" onClick={this.handleBack}>
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
            </Link> */}
            <BFSIContext.Consumer>
              {(context) => (
                <div>
                  <div>
                    <div className="page-content body-page">
                      <div className="container animated fadeIn">
                        <h1 className="main-title animated fadeIn">
                          Banking, Financial Services and Insurance
                        </h1>
                        <h2 className="sub-title main-sub-title animated fadeIn ">
                          Learn about us and the design industry via our
                          perspectives and experiences.
                        </h2>

                        <ReactWOW animation="fadeIn" offset={-200}>
                          <div className="blog-listing-section">
                            <div className="filter-btn-group animated fadeIn pb-0 justify-center">
                              <button
                                className="filter-btn"
                                onClick={() => {
                                  this.setState({
                                    filter: undefined,
                                  });
                                }}
                              >
                                <span>All</span>
                              </button>
                              {this.state.BFSICategory.map((item) => {
                                return (
                                  <div className="btn-relative" key={item.id}>
                                    {item.BFSICategoryName !== "menu" && (
                                      <button
                                        className={`filter-btn ${
                                          item.BFSICategoryName ===
                                          this.state.filter
                                            ? "active"
                                            : "inactive"
                                        }`}
                                        onClick={() => {
                                          this.setState({
                                            filter: item.BFSICategoryName,
                                          });
                                        }}
                                      >
                                        <span className="colorLabel">
                                          {item.BFSICategoryName}
                                        </span>
                                      </button>
                                    )}
                                    {item.BFSICategoryName ===
                                      this.state.filter && (
                                      <button
                                        className="deselect-filter"
                                        onClick={() => {
                                          this.setState({
                                            filter: undefined,
                                          });
                                        }}
                                      >
                                        <img src={Close} alt="Close" />
                                      </button>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                            <div className="row">
                              {context.state.BFSIProject.filter((name) => {
                                if (!this.state.filter) return true;
                                else
                                  return name.bfsi_categories
                                    .map((li) => li.BFSICategoryName)
                                    .includes(`${this.state.filter}`);
                              }).map((item) => (
                                <div className="col-md-12" key={item.id}>
                                  <div className="featured-blog-card mt-0">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="fb-image">
                                          <img
                                            src={`${baseUrl}${item.projectImage.url}`}
                                            alt="blog-cover"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="fb-content">
                                          <div>
                                            <h1 className="featured-blog-title">
                                              {item.projectTitle}
                                            </h1>
                                          </div>
                                          <div>
                                            <p className="featured-blog-summary">
                                              {item.projectDescription}
                                            </p>
                                          </div>
                                          <div className="card-btn-flex">
                                            {item.link ? (
                                              <Link
                                                // href={item.link}
                                                href={{
                                                  pathname: `/${item.link}`,
                                                  query: {
                                                    title: JSON.stringify(
                                                      item.projectTitle
                                                    ),
                                                  },
                                                }}
                                              >
                                                <div className="link-btn-card">
                                                  <div className="btn-link">
                                                    Learn More
                                                    <span>
                                                      <img
                                                        src={ArrowRightBlack}
                                                        alt="ArrowRight"
                                                      />
                                                    </span>
                                                  </div>
                                                </div>
                                              </Link>
                                            ) : (
                                              <div></div>
                                            )}

                                            <button
                                              className="custom-btn hidden-btn-card"
                                              onClick={this.handleOpenModal}
                                            >
                                              Contact Us
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </ReactWOW>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </BFSIContext.Consumer>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="career"
              onRequestClose={this.handleCloseModal}
              className="career-modal animated zoomIn"
              overlayClassName="Overlay"
            >
              <GetQuoteModal
                formtitle="Get in touch with us"
                togglePopover={this.handleCloseModal}
              />
            </ReactModal>
          </div>
        )}
      </div>
    );
  }
}
