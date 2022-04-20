import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import Head from "next/head";
import ReactModal from "react-modal";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { baseUrl } from "../globalConfig";
import axios from "axios";
import { BlogContext } from "../context/BlogContext";

import { withRouter } from "next/router";

import SectionTitle from "../components/SectionTitle";
import Faq from "../components/Faq";
import ModalCard from "../components/ModalCard";
import ImageVideoText from "../components/ImageVideoText";
import InternModal from "../components/InternModal";
import CardTileUpfront from "../components/CardTileUpfront";

import BackArrow from "../images/BackArrow.svg";
// import CareerImg1 from "../images/ux-img.jpg";
// import CareerImg2 from "../images/ux-img.jpg";
// import CareerImg3 from "../images/ux-img.jpg";
import internImg from "../images/internship.jpeg";
// import testVideo from "../images/testimonial-temp.png";

const FAQ = [
  {
    key: 1,
    faqQue: "What will my role be during the internship?",
    faqAns:
      "A. You will be helping the design and development teams for various project deliverables.",
  },
  {
    key: 2,
    faqQue: "What is the typical time duration of the internship?",
    faqAns:
      "A. We usually hire interns who can guarantee a commitment of 6 months..",
  },
  {
    key: 3,
    faqQue:
      "How will the internship help me in my career change or introduce me to a new field?",
    faqAns:
      "A. You will gain knowledge and experience by working on real-life projects with actual clients. We keep our interns involved in every step of the process which will help you grow and learn.",
  },
  {
    key: 4,
    faqQue: "Will I be paid during for my time as an Intern?",
    faqAns: "A. Yes, you will be provided with a monthly stipend.",
  },
  {
    key: 5,
    faqQue:
      "Can I publish the work on the internet which is done during the internship?",
    faqAns:
      "A. Our client projects are done with strict confidentiality, so publish project details are against our business policy.",
  },
];

export default withRouter(
  class Career extends Component {
    constructor() {
      super();
      this.state = {
        isMouseInside: false,
        showModal: false,
        career: [],
      };
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
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
        const response = await axios.get(baseUrl + "/careers");
        this.setState({ career: response.data });
        console.log(this.state.career);
        this.setState({ loading: false });
      } catch (error) {
        this.setState({ error });
      }
    };

    handleBack() {
      this.props.router.back();
    }

    render() {
      return (
        <div>
          <Head>
            <title>Career opportunities | Hire Top UX Designers </title>
            <meta
              name="description"
              content="Neointeraction design is one of the best companies for UI/UX designers. We have positions open for UI/UX designers, UI developers, and interns."
            />
            <meta
              name="keywords"
              content="internships, job openings, industry experience, open job positions, job opportunities"
            />
          </Head>
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
              <h1 className="main-title animated fadeIn">
                career opportunities
              </h1>
              <h2 className="sub-title main-sub-title animated fadeIn ">
                Take a look at our open positions for work and internship
                opportunities.
              </h2>
              <div className="tags animated fadeIn ">
                <ul className="anchor-links">
                  <li>
                    <AnchorLink className="custom-btn" href="#openings">
                      Job Openings
                    </AnchorLink>
                  </li>
                  <li>
                    <AnchorLink className="custom-btn" href="#intern">
                      Internships
                    </AnchorLink>
                  </li>
                </ul>
              </div>
            </div>
            <ReactWOW animation="fadeIn" delay="0s" offset={-200}>
              <div className="what-its-like">
                <div className="container">
                  <SectionTitle title="What’s it like to work here?" />
                  <ol className="wl-list">
                    <li>Work Ownership</li>
                    <li>Mentorship</li>
                    <li>Learn Design Practices</li>
                    <li>Collaboration</li>
                    <li>Industry Experience</li>
                    <li>Creative Thinking</li>
                  </ol>
                </div>
              </div>
            </ReactWOW>

            <ReactWOW animation="fadeIn" offset={-200}>
              <div className="opening-section" id="openings">
                <div className="container">
                  <SectionTitle
                    title="Current Openings"
                    subtitle="Here are the current work opportunities available at Neointeraction."
                  />
                  {this.state.career.map((item) => (
                    <div className="row p-cards job-cards">
                      {item.uxDesigner ? (
                        <div className="col-md-4">
                          <ModalCard
                            className="career-card"
                            title="ux designer"
                            text="Responsible for developing functional design solutions that creates better product experiences. The broad responsibility of a UX designer is to ensure that the product logically flows from one step to the next."
                            buttonText="Apply Now"
                            cardId="ux"
                          />
                        </div>
                      ) : null}
                      {item.uiDesigner ? (
                        <div className="col-md-4">
                          <ModalCard
                            className="career-card"
                            title="ui designer"
                            text="A creative individual who is responsible for creating the aesthetic look and feel of a product by using standard design principles and practices."
                            buttonText="Apply Now"
                            cardId="ui"
                          />
                        </div>
                      ) : null}
                      {item.uiDeveloper ? (
                        <div className="col-md-4">
                          <ModalCard
                            className="career-card"
                            title="ui engineer"
                            text="Responsible for converting the designer’s pixels to codes using the latest UI programming languages. We are looking for candidates who believe in design and are ready to adapt to the latest UI technologies and standards."
                            buttonText="Apply Now"
                            cardId="uiEngineer"
                          />
                        </div>
                      ) : null}
                      {item.digitalMarketer ? (
                        <div className="col-md-4">
                          <ModalCard
                            className="career-card"
                            title="digital marketing"
                            text="You will be working as a part of the Digital Marketing & Campaigning team that focuses on planning, executing, tracking and analysing direct marketing campaigns from inception to launch and to the evaluation of results."
                            buttonText="Apply Now"
                            cardId="marketing"
                          />
                        </div>
                      ) : null}
                      {item.projectManager ? (
                        <div className="col-md-4">
                          <ModalCard
                            className="career-card"
                            title="project manager"
                            text="An experienced person who can take the lead of managing a design team while maintaining the project’s requirements."
                            buttonText="Apply Now"
                            cardId="manager"
                          />
                        </div>
                      ) : null}
                      {item.analyst ? (
                        <div className="col-md-4">
                          <ModalCard
                            className="career-card"
                            title="business analyst"
                            text="This role requires gathering, analyzing, and delivering the requirements to the client along with validating the tasks thoroughly."
                            buttonText="Apply Now"
                            cardId="analyst"
                          />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </ReactWOW>

            <ReactWOW animation="fadeIn" offset={-200}>
              <div className="intern-section" id="intern">
                <div className="container">
                  <ImageVideoText
                    video={true}
                    ProjectVideo="https://www.youtube.com/embed/u8puU_M1jcQ"
                    componentOrientation="image-right"
                    ProjectImage={internImg}
                    titleText="We offer Internships for the young creative minds"
                    contentText={
                      <div>
                        <p className="body-text">
                          A great opportunity to learn and experience the
                          industry practises and get bootstrapped for your
                          career.
                        </p>

                        <ul className="solution-list">
                          <li>UI Designer</li>
                          <li>UX Designer</li>
                          <li>UI Engineer</li>
                          <li>Digital Marketing</li>
                        </ul>
                        <button
                          className="custom-btn margin-top"
                          onClick={this.handleOpenModal}
                        >
                          Apply Now
                        </button>
                      </div>
                    }
                  />
                </div>
              </div>
            </ReactWOW>
            {/* <ReactWOW animation="fadeIn" offset={-200}>
            <div className="testimonial-section">
              <div className="container">
                <SectionTitle title="Testimonials from our ex-interns" />
                <div className="row video-tile">
                  <div className="col-md-4">
                    <img src={testVideo} alt="img" />
                  </div>
                  <div className="col-md-4">
                    <img src={testVideo} alt="img" />
                  </div>
                  <div className="col-md-4">
                    <img src={testVideo} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </ReactWOW> */}
            <ReactWOW animation="fadeIn" offset={-200}>
              <div className="career-faq-section">
                <div className="container">
                  <SectionTitle title="FAQ’s about Internships" />
                  {[...FAQ].map((faq) => (
                    <div className="faq-block" key={faq.key}>
                      <Faq
                        id={`${faq.key}.`}
                        faqQue={faq.faqQue}
                        faqAns={faq.faqAns}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ReactWOW>
          </div>
          <div className="section-padding">
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
                                pathname: `/Blog/${item.blogTitle.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ /g,"-")}`,

                                // pathname: `/Blog/${item.id}`,
                                // query: {
                                //   title: item.blogTitle
                                //     .replace(/(:|\s+)/g, "-")
                                //     .toLowerCase(),
                                // },
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
                                  author={item.blogAuthor}
                                  postedTime={item.created_at}
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
          </div>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="career"
            onRequestClose={this.handleCloseModal}
            className="career-modal animated zoomIn"
            overlayClassName="Overlay"
          >
            <InternModal togglePopover={this.handleCloseModal} />
          </ReactModal>
        </div>
      );
    }
  }
);
