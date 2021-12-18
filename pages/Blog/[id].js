import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import Head from "next/head";
import { useRouter } from "next/router";

import moment from "moment";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { baseUrl } from "../../globalConfig";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import { withRouter } from "next/router";

import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";
import BlogSlider from "../../components/BlogSlider";

import BackArrow from "../../images/BackArrow.svg";
// import Author from "../images/Author2.png";
import FacebookIcon from "../../images/facebook.svg";
import LinkedInIcon from "../../images/linkedIn.svg";
import TwitterIcon from "../../images/twitter.svg";
import Menu from "../../images/9dots.svg";

export async function getStaticPaths() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(baseUrl + `/blogs`);
  const data = await res.json();

  const paths = data.map((x) => {
    return {
      params: { id: x.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(baseUrl + `/blogs/${id}`);
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}

export default withRouter(
  class ProjectDetailPage extends Component {
    constructor(props) {
      super();
      this.state = {
        isMouseInside: false,
        matchId: props.router.query.id,
        blogInfo: {
          blogCardImage: {},
          blog_detail: {},
          blogIllustration: {},
        },
        error: null,
        loading: true,
        pageHref: 0,
      };
      this.componentDidMount = this.componentDidMount.bind(this);
      this.componentDidUpdate = this.componentDidUpdate.bind(this);
      this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount = async () => {
      this.setState({ matchId: this.props.router.query.id });
      try {
        const res = await axios.get(baseUrl + `/blogs/${this.state.matchId}`);
        this.setState({ blogInfo: res.data });

        this.setState({ loading: false });
        this.props.post
          ? this.setState({ loading: false })
          : this.setState({ loading: true });
      } catch (error) {
        this.setState({ error });
      }
      var str = window.location.href;
      var n = str.lastIndexOf("/");
      var result = str.substring(n + 1);

      this.setState({ pageHref: result });
    };

    componentDidUpdate = async (prevProps) => {
      // this.componentDidMount();
      if (this.props.router.query.id !== prevProps.router.query.id) {
        try {
          const result = await axios.get(
            baseUrl + `/blogs/${this.props.router.query.id}`
          );
          this.setState({ blogInfo: result.data });
          this.setState({ loading: false });
        } catch (error) {
          this.setState({ error });
        }
      }
    };

    mouseEnter = () => {
      this.setState({ isMouseInside: true });
    };
    mouseLeave = () => {
      this.setState({ isMouseInside: false });
    };
    handleBack() {
      this.props.router.push("/Blog");
    }

    transformImageUri = (input) =>
      /^https?:/.test(input) ? input : `${baseUrl}${input}`;

    render() {
      const { blogInfo } = this.state;

      return (
        <div>
          <Head>
            <title>{this.props.post.blog_detail.SEOTitle}</title>
            <meta
              name="description"
              content={this.props.post.blog_detail.SEODescription}
            />
            <meta
              name="keywords"
              content={this.props.post.blog_detail.SEOKeywords}
            />
            <meta
              property="og:image"
              content={`${baseUrl}${this.props.post.blogCardHeadImage.url}`}
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
                <ReactWOW animation="fadeIn" delay="0s" offset={0}>
                  <div className="featured-blog-section">
                    <div className="section-flex">
                      <div className="sf-item image-z-negetive">
                        <div className="fb-image">
                          <img
                            src={`${baseUrl}${blogInfo.blogCardImage.url}`}
                            alt="blog-cover"
                          />
                        </div>
                      </div>
                      <div className="sf-item">
                        <div className="fb-content">
                          <div>
                            <h1 className="featured-blog-title">
                              {blogInfo.blogTitle ? blogInfo.blogTitle : null}
                            </h1>
                          </div>
                          <div>
                            <p className="featured-blog-author">
                              by&nbsp;
                              <span className="author-name">
                                {blogInfo.blogAuthor
                                  ? blogInfo.blogAuthor
                                  : null}
                                &nbsp;
                              </span>
                              <span className="posted-time">
                                {moment(`${blogInfo.created_at}`)
                                  .startOf("hour")
                                  .fromNow()}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ReactWOW>
                <div className="container animated fadeIn">
                  <div className="blog-content-display-block">
                    <ReactWOW animation="fadeIn" offset={-200}>
                      <p className="blog-text">
                        <ReactMarkdown
                          className="blog-para"
                          transformImageUri={this.transformImageUri}
                        >
                          {blogInfo.blog_detail.paragraph1}
                        </ReactMarkdown>
                      </p>
                    </ReactWOW>
                    <ReactWOW animation="fadeIn" offset={-200}>
                      <h2 className="blog-subtitle">
                        {blogInfo.blog_detail.title1}
                      </h2>
                      <p className="blog-text">
                        {/* {reactStringReplace(
                        blogInfo.blog_detail.paragraph2,
                        "**",
                        (match, i) => (
                          <strong></strong>
                        )
                      )} */}
                        <ReactMarkdown
                          className="blog-para"
                          transformImageUri={this.transformImageUri}
                        >
                          {blogInfo.blog_detail.paragraph2}
                        </ReactMarkdown>
                      </p>
                    </ReactWOW>
                    <ReactWOW animation="fadeIn" offset={-200}>
                      <div className="blog-quote-box">
                        <p className="b-quote-text">
                          {blogInfo.blog_detail.highlightQuoteText}
                        </p>
                      </div>
                    </ReactWOW>
                    <ReactWOW animation="fadeIn" offset={-200}>
                      <h2 className="blog-subtitle">
                        {blogInfo.blog_detail.title2}
                      </h2>
                      <p className="blog-text">
                        <ReactMarkdown
                          className="blog-para"
                          transformImageUri={this.transformImageUri}
                        >
                          {blogInfo.blog_detail.paragraph3}
                        </ReactMarkdown>
                      </p>
                    </ReactWOW>
                    {blogInfo.blog_detail.blogIllustration ? (
                      <ReactWOW animation="fadeIn" offset={-200}>
                        <div className="blog-content-image">
                          <img
                            src={`${baseUrl}${blogInfo.blog_detail.blogIllustration.url}`}
                            alt="blog-img"
                          />
                        </div>
                      </ReactWOW>
                    ) : null}

                    <ReactWOW animation="fadeIn" offset={-200}>
                      <h2 className="blog-subtitle">
                        {blogInfo.blog_detail.title3}
                      </h2>
                      <p className="blog-text">
                        <ReactMarkdown
                          className="blog-para"
                          transformImageUri={this.transformImageUri}
                        >
                          {blogInfo.blog_detail.paragraph4}
                        </ReactMarkdown>
                      </p>
                    </ReactWOW>
                    <ReactWOW animation="fadeIn" offset={-200}>
                      <h2 className="blog-subtitle">
                        {blogInfo.blog_detail.title4}
                      </h2>
                      <p className="blog-text mt-3">
                        <ReactMarkdown
                          className="blog-para"
                          transformImageUri={this.transformImageUri}
                        >
                          {blogInfo.blog_detail.paragraph5
                            ? blogInfo.blog_detail.paragraph5
                            : null}
                        </ReactMarkdown>
                      </p>
                    </ReactWOW>
                    <div className="divider"></div>
                    <ReactWOW animation="fadeIn" offset={-200}>
                      <h2 className="blog-subtitle text-center mb-3">
                        About Author
                      </h2>
                      <div className="author-card">
                        <div className="row">
                          <div className="col-md-3">
                            <img
                              src={`${baseUrl}${blogInfo.blog_detail.authorImg.url}`}
                              alt="author-pic"
                              className="author-pic width-100"
                            />
                          </div>
                          <div className="col-md-9">
                            <p className="blog-author-name">
                              {blogInfo.blogAuthor}
                            </p>
                            <p className="blog-text">
                              {blogInfo.blog_detail.aboutAuthor}
                            </p>
                          </div>
                        </div>
                      </div>
                    </ReactWOW>
                    <ReactWOW animation="fadeIn" offset={-200}>
                      <h2 className="blog-subtitle text-center mb-3">
                        Share this article
                      </h2>
                      <ul className="social-icons cf-basis blog-social">
                        <li id="fb">
                          <FacebookShareButton
                            url={`https://neointeraction.com/Blog/${this.props.router.query.id}`}
                            className="share-icn"
                          />
                          <img src={FacebookIcon} alt="facebook" />
                        </li>
                        <li id="ln">
                          <LinkedinShareButton
                            url={`https://neointeraction.com/Blog/${this.props.router.query.id}`}
                            className="share-icn"
                          />
                          <img src={LinkedInIcon} alt="LinkedIn" />
                        </li>
                        <li id="twitter">
                          <TwitterShareButton
                            url={`https://neointeraction.com/Blog/${this.props.router.query.id}`}
                            className="share-icn"
                          />
                          <img src={TwitterIcon} alt="Twitter" />
                        </li>
                      </ul>
                      <div className="go-to-blog">
                        <Link href="/Blog">
                          <img src={Menu} alt="menu" />
                        </Link>
                      </div>
                    </ReactWOW>
                  </div>
                </div>
                {/* container-end ==== */}
                <ReactWOW animation="fadeIn" offset={-200}>
                  <div className="contact-section">
                    <div className="container">
                      <SectionTitle
                        title="Want help with your business?"
                        subtitle="We can help you achieve your goals through excellent design processes and techniques."
                      />
                      <Link href="/ContactUs">
                        <button className="custom-btn">Contact Us</button>
                      </Link>
                    </div>
                  </div>
                </ReactWOW>
                <div className="container position-relative">
                  <div className="carousal-position">
                    <ReactWOW animation="fadeInUp" delay="0s">
                      <div>
                        <BlogSlider />
                      </div>
                    </ReactWOW>
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
