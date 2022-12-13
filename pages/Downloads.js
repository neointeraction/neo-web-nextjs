import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../globalConfig";
import { BlogContext } from "context/BlogContext";

import { withRouter } from "next/router";

import Loader from "components/Loader";
import ImageVideoText from "components/ImageVideoText";
import CardTileUpfront from "components/CardTileUpfront";
import SectionTitle from "components/SectionTitle";

import BackArrow from "assets/images/BackArrow.svg";

export default withRouter(
  class Downloads extends Component {
    constructor() {
      super();
      this.state = {
        isMouseInside: false,
        downloads: [],
        loading: true,
        email: "",
        fileUrl: "",
        fileName: "",
        downloadSent: false,
      };
      this.handleBack = this.handleBack.bind(this);
      this.submitEmail = this.submitEmail.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.validator = new SimpleReactValidator();
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
        const response = await axios.get(baseUrl + "/downloads");
        this.setState({ downloads: response.data });
        // console.log(response.data);
        console.log(this.state.downloads);
        this.setState({ loading: false });
      } catch (error) {
        this.setState({ error });
      }
    };

    handleChange(event) {
      const { name, value, type, checked } = event.target;
      type === "checkbox"
        ? this.setState({ [name]: checked })
        : this.setState({ [name]: value });

      var url = event.target.getAttribute("data-url");
      var filename = event.target.getAttribute("data-name");
      this.setState({ fileUrl: url, fileName: filename });
    }

    SuccessToast = () => (
      <div className="success-msg-download">
        <div className="check-wrap"></div>
        <p>Success ! We have sent a mail with the download link!</p>
      </div>
    );

    submitEmail(e) {
      e.preventDefault();

      if (this.validator.allValid()) {
        this.setState({ downloadSent: true });
        // alert('You submitted the form and stuff!');
        // e.preventDefault();
        //"Success ! We have sent a mail with the download link!"
        axios
          .post(
            "https://www.neointeraction.com/server-downloads/download",
            this.state
          )
          .then((response) => {
            if (response.data.status === "success") {
              this.setState({ downloadSent: false });
              toast(this.SuccessToast, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              // setTimeout(() => {
              //   this.setState({ downloadSent: false });
              // }, 4000);
              this.resetForm();
            } else if (response.data.status === "fail") {
              alert("Message failed to send.");
            }
          });
      } else {
        this.validator.showMessages();
        // rerender to show messages for the first time
        // you can use the autoForceUpdate option to do this automatically`
        this.forceUpdate();
      }
    }

    resetForm() {
      this.setState({
        email: "",
        fileName: "",
        fileUrl: "",
      });
    }

    render() {
      return (
        <div>
          <Head>
            <title>
              Download Resources | Best UI/UX design company in India
            </title>
            <meta
              name="description"
              content="Get great design assets and resources created by one of the best UI/UX design companies to help in your new projects. Drop your Email to download for free."
            />
            <meta
              name="keywords"
              content="design templates, free illustrations, download design templates, New project template, B2B project template, best design illustrations, download free templates, download free illustrations of Indian cities"
            />
            <link
              rel="canonical"
              href="https://www.neointeraction.com/Downloads"
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
              <div className="page-content body-page">
                <div className="container animated fadeIn">
                  <h1 className="main-title animated fadeIn">
                    Download resources
                  </h1>
                  <h2 className="sub-title main-sub-title animated fadeIn">
                    Assets and design resources we would like to share with the
                    larger community
                  </h2>
                  {this.state.downloads.map((item) => (
                    <div>
                      <ImageVideoText
                        video={false}
                        ProjectVideo=""
                        componentOrientation="image-left"
                        ProjectImage={`${baseUrl}${item.DownloadImg.map(
                          (url) => url.url
                        )}`}
                        titleText={item.Title}
                        contentText={
                          <div>
                            <p>
                              <ReactMarkdown className="blog-para">
                                {item.DownloadDetailText}
                              </ReactMarkdown>
                            </p>
                            <form
                              className="form-section"
                              onSubmit={this.submitEmail}
                            >
                              <div className="row align-items-baseline">
                                <div className="col-md-8">
                                  <div className="newsletter-input">
                                    <div className="input-custom-field">
                                      <input
                                        className="input-custom"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={this.state.email}
                                        data-url={item.downloadUrl}
                                        data-name={item.Title}
                                        onBlur={() =>
                                          this.validator.showMessageFor("email")
                                        }
                                        onChange={this.handleChange}
                                      />
                                      {/* <label>Mobile</label> */}
                                      <span className="focus-border">
                                        <i></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <button className="custom-btn loader-btns">
                                    {this.state.downloadSent ? (
                                      <>
                                        <span>Sending..</span>
                                        <div className="progress-bar">
                                          <div className="circle border"></div>
                                        </div>
                                      </>
                                    ) : (
                                      <span>Download</span>
                                    )}
                                  </button>
                                </div>
                              </div>
                              {this.validator.message(
                                "email",
                                this.state.email,
                                "required|email"
                              )}
                            </form>
                          </div>
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="section-padding mb-spacing">
                <div className="container">
                  <ReactWOW animation="fadeIn" offset={-200}>
                    <div>
                      <SectionTitle
                        title="Read our latest blogs"
                        subtitle="Check out our latest articles written by our team of expert designers"
                      />
                      <BlogContext.Consumer>
                        {(context) => (
                          <div className="row p-cards">
                            {context.state.blogs.slice(0, 3).map((item) => (
                              <div className="col-md-4 mb-5" key={item.id}>
                                <Link
                                  href={{
                                    pathname: `/blogs/${item.blogTitle
                                      .replace(
                                        /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                        ""
                                      )
                                      .replace(/ /g, "-")}`,
                                  }}
                                >
                                  <div className="link">
                                    <CardTileUpfront
                                      className={item.id}
                                      category={item.blog_categories.map(
                                        (cat) => cat.blogCategoryName
                                      )}
                                      cardTitle={item.blogTitle}
                                      backgroundImages={item.blogCardImage.url}
                                      blogtag1={item.blog_categories.map(
                                        (cat) => cat.blogCategoryName
                                      )}
                                      // author={item.blogAuthor}
                                      // postedTime={item.created_at}
                                    />
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                      </BlogContext.Consumer>
                    </div>
                  </ReactWOW>
                </div>
                <ToastContainer />
              </div>
            </div>
          )}
        </div>
      );
    }
  }
);
