import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import Head from "next/head";
import moment from "moment";
import { baseUrl } from "../globalConfig";
import axios from "axios";

import { withRouter } from "next/router";

import Loader from "components/Loader";
import { BlogContext } from "context/BlogContext";
import SectionTitle from "components/SectionTitle";
import CardTileUpfront from "components/CardTileUpfront";

import BackArrow from "assets/images/BackArrow.svg";

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
  class Blog extends Component {
    constructor(props) {
      super();
      this.state = {
        isMouseInside: false,
        filter: undefined,
        blogCategory: [],
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
        const response = await axios.get(baseUrl + "/blog-categories");
        this.setState({ blogCategory: response.data });
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
              <BlogContext.Consumer>
                {(context) => (
                  <div>
                    <div>
                      <h2 className="sub-title animated text-center fadeIn">
                        Blogs
                      </h2>
                      {context.state.blogs
                        .filter((tag) => {
                          if (tag.featured) return true;
                          return null;
                        })
                        .map((item) => (
                          <ReactWOW
                            animation="fadeIn"
                            delay="0s"
                            offset={-200}
                            key={item.id}
                          >
                            <Link
                              href={{
                                pathname: `/blogs/${item.blog_detail.SEOUrl.replace(
                                  /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                  ""
                                ).replace(/ /g, "-")}`,
                              }}
                            >
                              <div className="link video-yt">
                                <div className="featured-blog-card">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="fb-image">
                                        <img
                                          src={`${baseUrl}${item.blogCardHeadImage.url}`}
                                          alt="blog-cover"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="fb-content">
                                        <div>
                                          <h1 className="featured-blog-title">
                                            {item.blogTitle}
                                          </h1>
                                        </div>
                                        <div>
                                          <p className="featured-blog-summary">
                                            {item.blogSummary}
                                          </p>
                                        </div>
                                        <div>
                                          <p className="featured-blog-author">
                                            by{" "}
                                            <span className="author-name">
                                              {item.blogAuthor}&nbsp;
                                            </span>
                                            <span className="posted-time">
                                              {moment(`${item.created_at}`)
                                                .startOf("hour")
                                                .fromNow()}
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </ReactWOW>
                        ))}

                      {/* <ReactWOW animation="fadeIn" offset={-200}>
                            <div className="blog-listing-section">
                              <SectionTitle
                                title="Blog Articles"
                                subtitle="Check out our latest articles written by our team of expert designers"
                              />
                              <div className="filter-btn-group animated fadeIn delay-1s">
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
                                {this.state.blogCategory.map((item) => {
                                  return (
                                    <div className="btn-relative" key={item.id}>
                                      {item.blogCategoryName !== "menu" && (
                                        <button
                                          className={`filter-btn ${
                                            item.blogCategoryName ===
                                            this.state.filter
                                              ? "active"
                                              : "inactive"
                                          }`}
                                          onClick={() => {
                                            this.setState({
                                              filter: item.blogCategoryName,
                                            });
                                          }}
                                        >
                                          <span className="colorLabel">
                                            {item.blogCategoryName}
                                          </span>
                                        </button>
                                      )}
                                      {item.blogCategoryName ===
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
                              <div className="row p-cards">
                                {context.state.blogs
                                  .filter((name) => {
                                    if (!this.state.filter) return true;
                                    else
                                      return name.blog_categories
                                        .map((li) => li.blogCategoryName)
                                        .includes(`${this.state.filter}`);
                                  })
                                  .map((item) => (
                                    <div
                                      className="col-md-4 mb-5"
                                      key={item.id}
                                    >
                                      <Link
                                        href={{
                                          pathname: `/blogs/${item.id}`,
                                          query: {
                                            title: item.blogTitle
                                              .replace(/(:|\s+)/g, "-")
                                              .toLowerCase(),
                                          },
                                        }}
                                      >
                                        <div className="link" key={item.id}>
                                          <CardTileUpfront
                                            className={item.id}
                                            category={item.blog_categories.map(
                                              (cat) => cat.blogCategoryName
                                            )}
                                            cardTitle={item.blogTitle}
                                            backgroundImages={
                                              item.blogCardImage.url
                                            }
                                            blogtag1={item.blog_categories.map(
                                              (cat) => cat.blogCategoryName
                                            )}
                                            author={item.blogAuthor}
                                            postedTime={item.created_at}
                                          />
                                        </div>
                                      </Link>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </ReactWOW> */}
                    </div>
                  </div>
                )}
              </BlogContext.Consumer>
            </div>
          )}
        </div>
      );
    }
  }
);
