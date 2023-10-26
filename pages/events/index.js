import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import Head from "next/head";
import moment from "moment";
import { baseUrl } from "../../globalConfig";
import axios from "axios";

import { withRouter } from "next/router";

import Loader from "components/Loader";
import { BlogContext } from "context/BlogContext";
import SectionTitle from "components/SectionTitle";
import CardTileUpfront from "components/CardTileUpfront";

import BackArrow from "assets/images/BackArrow.svg";
import Close from "assets/images/Close.svg";
import Breadcrumbs from "nextjs-breadcrumbs";
import EventsBannerSlider from "pageComponents/events/EventsBannerSlider";
import ImageVideoText from "components/ImageVideoText";
import EventImage from "assets/images/events/event1.jpg";
import ClientSlider from "components/ClientSlider";
import { EventContext } from "context/EventContext";
import { TestimonialContext } from "context/TestimonialContext";

import ECBanner from "assets/images/events/ec.jpg";

// export async function getStaticProps(context) {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(baseUrl + "/blog-categories");
//   const data = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       blogData: data,
//     },
//   };
// }

export default withRouter(
  class Events extends Component {
    constructor(props) {
      super();
      this.state = {
        isMouseInside: false,
        filter: undefined,
        eventCategory: [],
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

    componentDidMount = async () => {
      try {
        const response = await axios.get(baseUrl + "/events");
        this.setState({
          eventCategory: response.data,
        });
        this.setState({ loading: false });
      } catch (error) {
        this.setState({ error });
      }
    };

    // componentDidMount = () => {
    //   this.state.blogCategory
    //     ? this.setState({ loading: false })
    //     : this.setState({ loading: true });
    // };

    handleBack() {
      this.props.router.back();
    }

    render() {
      return (
        <div>
          <div>
            <Head>
              <title>
                Events | UI/UX Design Services in Bangalore - Neointeraction
                Design
              </title>
              <meta
                name="description"
                content="Learn about design and how it affects business success by reading interesting blogs, articles, and case studies. Join our newsletter to be updated about the newest UI/UX developments."
              />
              <meta
                name="keywords"
                content="Best UI/UX design articles, UX blogs,designing blogs, design articles, important design case studies, UI/UX design case studies, download UI/UX case studies"
              />
              <link
                rel="canonical"
                href="https://www.neointeraction.com/blogs"
              />
            </Head>
          </div>
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
              <section className="event-section-home ">
                {/* <HomeBanner /> */}
                <EventsBannerSlider />
              </section>
              <div className="container">
                <div className="event-why">
                  <ImageVideoText
                    grid1={6}
                    grid2={6}
                    video={false}
                    ProjectVideo=""
                    componentOrientation="image-right"
                    ProjectImage={EventImage}
                    imageAlt="Hire React Developer - Neointeraction"
                    titleText={
                      <h2 className="event-page-title">
                        Why you should <span>join us</span>
                      </h2>
                    }
                    contentText={
                      <div>
                        <p>
                          Delve into these captivating facets that guarantee to
                          enhance your UX/UI experience
                        </p>
                        <ul class="solution-list event-list">
                          <li class="creative">Ignite Your Creativity</li>
                          <li class="experts">Connect with Industry Experts</li>
                          <li class="trends">Stay Ahead of Trends</li>
                          <li class="innovation">Collaborate for Innovation</li>
                          <li class="case-studies">Case Studies</li>
                          <li class="activities">Hand on Activities</li>
                        </ul>
                      </div>
                    }
                  />
                </div>
              </div>
              <div className="landing-client">
                <div className="container animated fadeIn">
                  <ReactWOW animation="fadeIn" delay="0s">
                    <div>
                      <h2 className="landing-title  mb-3 trusted__by event-section-title">
                        Trusted By
                      </h2>
                      <ClientSlider landing />
                    </div>
                  </ReactWOW>
                </div>
              </div>
              <div>
                <EventContext.Consumer>
                  {(context) => (
                    <div>
                      <div>
                        <div className="page-content body-page event-body">
                          <div className="container animated fadeIn">
                            <h2 className="event-section-title">
                              Event <span>Categories</span>
                            </h2>

                            <div className="event-filter-btn-group animated fadeIn delay-1s">
                              <button
                                className={`filter-btn ${
                                  this.state.filter === undefined
                                    ? "active"
                                    : "inactive"
                                }`}
                                onClick={() => {
                                  this.setState({
                                    filter: undefined,
                                  });
                                }}
                              >
                                <span>All</span>
                              </button>
                              {this.state.eventCategory.map((item) => {
                                return (
                                  <div className="btn-relative" key={item.id}>
                                    {item.eventTag !== "menu" && (
                                      <button
                                        className={`filter-btn ${
                                          item.eventTag === this.state.filter
                                            ? "active"
                                            : "inactive"
                                        }`}
                                        onClick={() => {
                                          this.setState({
                                            filter: item.eventTag,
                                          });
                                        }}
                                      >
                                        <span className="colorLabel">
                                          {item.eventTag}
                                        </span>
                                      </button>
                                    )}
                                    {item.eventTag === this.state.filter && (
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

                            {context.state.events
                              .filter((name) => {
                                if (!this.state.filter) return true;
                                else
                                  return name.eventTag.includes(
                                    `${this.state.filter}`
                                  );
                              })
                              .map((item) => (
                                <ReactWOW
                                  animation="fadeIn"
                                  delay="0s"
                                  offset={-200}
                                  key={item.id}
                                >
                                  {/* {console.log(
                                    item?.event_detail?.SEOUrl,
                                    "item.event_detail"
                                  )} */}
                                  <Link
                                    // href={"/"}
                                    href={
                                      item.event_detail?.SEOUrl === null
                                        ? "/"
                                        : {
                                            pathname: `/events/${item.event_detail?.SEOUrl.replace(
                                              /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                              ""
                                            ).replace(/ /g, "-")}`,
                                          }
                                    }
                                  >
                                    <a
                                      target="_blank"
                                      style={{ textDecoration: "none" }}
                                    >
                                      <div className="link">
                                        <div className="featured-blog-card events-card-section">
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="event-image">
                                                <img
                                                  src={`${baseUrl}${item.eventCoverImg?.url}`}
                                                  alt="blog-cover"
                                                />
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="fb-content event-content">
                                                <div>
                                                  <h1 className="featured-event-tag">
                                                    {item.eventTag
                                                      ? item.eventTag
                                                      : ""}
                                                  </h1>
                                                </div>
                                                <div>
                                                  <h1 className="event-title">
                                                    {item.eventName
                                                      ? item.eventName
                                                      : ""}
                                                  </h1>
                                                </div>
                                                <ul className="event-date-location">
                                                  <li>
                                                    {item.eventDate
                                                      ? item.eventDate
                                                      : ""}
                                                  </li>
                                                  <li>
                                                    {item.eventLocation
                                                      ? item.eventLocation
                                                      : ""}
                                                  </li>
                                                </ul>
                                                <div>
                                                  <p className="featured-blog-summary featured-event-summary">
                                                    {item.eventSummary
                                                      ? item.eventSummary
                                                      : ""}
                                                  </p>
                                                </div>
                                                <div>
                                                  <button class="custom-btn">
                                                    Read More
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </Link>
                                </ReactWOW>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </EventContext.Consumer>
              </div>
              <div>
                <TestimonialContext.Consumer>
                  {(context) => (
                    <div className="tm-section">
                      <div>
                        <div className="page-content body-page event-body">
                          <div className="container animated fadeIn">
                            <h2 className="event-section-title text-center">
                              What our <span>participants say about us</span>
                            </h2>
                            <div className="tm-block">
                              <div className="row">
                                {context.state.testimonials
                                  .filter((item) => item.category === "event")
                                  .map((item) => (
                                    <ReactWOW
                                      animation="fadeIn"
                                      delay="0s"
                                      offset={-200}
                                      key={item.id}
                                    >
                                      <div className="col-md-4">
                                        <div className="event-tm-card">
                                          <div className="tm-image">
                                            <img
                                              src={`${baseUrl}${item.userImg?.url}`}
                                              alt="blog-cover"
                                            />
                                          </div>
                                          <h1 className="etm-name">
                                            {item.name}
                                          </h1>
                                          <p className="etm-design">
                                            {item.designation}
                                          </p>
                                          <p className="etm-comment">
                                            {item.comments}
                                          </p>
                                        </div>
                                      </div>
                                    </ReactWOW>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </TestimonialContext.Consumer>
              </div>
              <div>
                <div className="container">
                  <div className="event-why">
                    <div className="featured-blog-card events-card-section event-contact-card">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="event-connect">
                            <h2 className="event-section-title">
                              Don’t want to miss out on {""}
                              <span>future events ?</span>
                            </h2>
                            <div class="form-flex event-form-flex">
                              <input
                                type="text"
                                id="email"
                                name="email"
                                value=""
                                class="input-custom"
                                placeholder="E-mail ID"
                              />
                              <button class="custom-btn">Submit</button>
                            </div>
                            <p className="event-sub-text">
                              Whether you would like to be our sponsor or a
                              guest speaker we would love to hear from you.
                              Reach out to us at{" "}
                              <a href="mailto:info@neointeraction.com">
                                info@neointeraction.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="event-image">
                            <img src={ECBanner} alt="blog-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
);
