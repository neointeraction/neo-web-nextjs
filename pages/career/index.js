import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import Head from "next/head";
import ReactModal from "react-modal";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { baseUrl } from "../../globalConfig";
import axios from "axios";
import { BlogContext } from "context/BlogContext";

import { withRouter } from "next/router";

import SectionTitle from "components/SectionTitle";
import Faq from "components/Faq";
import ModalCard from "components/ModalCard";
import ImageVideoText from "components/ImageVideoText";
import InternModal from "components/InternModal";
import CardTileUpfront from "components/CardTileUpfront";

import BackArrow from "assets/images/BackArrow.svg";
// import CareerImg1 from "assets/images/ux-img.jpg";
// import CareerImg2 from "assets/images/ux-img.jpg";
// import CareerImg3 from "assets/images/ux-img.jpg";
import internImg from "assets/images/internship.jpeg";
import HomeTeam from "pageComponents/homepage/HomeTeam";
import Breadcrumbs from "nextjs-breadcrumbs";
// import testVideo from "assets/images/testimonial-temp.png";

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
  class career extends Component {
    constructor(props) {
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
      const JobrolesURL =
        "https://api-vidrec.neointeraction.com/api/v1/plugin/getJobRolesUnderOrganization";
      try {
        const response = await axios.post(
          JobrolesURL,
          {
            orgId: 70,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        this.setState({ career: response.data.data });
        this.setState({ loading: false });
      } catch (error) {
        this.setState({ error });
      }
    };

    componentDidUpdate = async (prevProps, prevState) => {
      if (
        this.props.roomId !== prevProps.roomId ||
        this.state.serverUrl !== prevState.serverUrl
      ) {
        this.destroyConnection();
        this.setupConnection();
      }
    };

    handleBack() {
      this.props.router.back();
    }

    render() {
      return (
        <div>
          <Head>
            <title>
              Career Opportunities | UI/UX Design Services - Neointeraction
              Design{" "}
            </title>
            <meta
              name="description"
              content="Neointeraction Design - a global UX design company is always on the lookout for talented UI UX designers, UX researchers, UI developers, and interns."
            />
            <meta
              name="keywords"
              content="internships, job openings, industry experience, open job positions, job opportunities"
            />
            <link
              rel="canonical"
              href="https://www.neointeraction.com/career"
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
          <div className="page-content body-page">
            <div className="container animated fadeIn">
              <Breadcrumbs
                containerClassName="breadcrumb"
                activeItemClassName="bc-active"
                inactiveItemClassName="bc-inactive"
                listClassName="bc-list"
                replaceCharacterList={[
                  {
                    from: "career",
                    to: "Career",
                  },
                ]}
              />
              <h1 className="main-title animated fadeIn">
                Career Opportunities
              </h1>
              <h2 className="sub-title main-sub-title animated fadeIn ">
                Take a look at our open positions for work and internship
                opportunities.
              </h2>
              <div className="tags animated fadeIn ">
                <ul className="anchor-links">
                  <li>
                    <AnchorLink
                      offset={() => 60}
                      className="custom-btn"
                      href="#openings"
                    >
                      View Job/Internship Openings
                    </AnchorLink>
                  </li>
                </ul>
              </div>
            </div>
            <ReactWOW animation="fadeIn" delay="0s" offset={-200}>
              <div className="what-its-like">
                {/* <div className="container">
                  <SectionTitle title="What’s it like to work here?" />
                  <ol className="wl-list">
                    <li>Work Ownership</li>
                    <li>Mentorship</li>
                    <li>Learn Design Practices</li>
                    <li>Collaboration</li>
                    <li>Industry Experience</li>
                    <li>Creative Thinking</li>
                  </ol>
                </div> */}
              </div>
            </ReactWOW>

            <ReactWOW animation="fadeIn" offset={-200}>
              <div className="opening-section" id="openings">
                <div className="container">
                  <SectionTitle
                    title="Current Openings"
                    subtitle="Here are the current work opportunities available at Neointeraction."
                  />
                  <div className="row p-cards job-cards">
                    {this.state.career?.map((item) => (
                      <div className="col-md-4" key={item?.id}>
                        <JobCard
                          title={item?.roleName}
                          text={item?.roleDiscription}
                          id={item?.id}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ReactWOW>
            <div className="career-team-banner">
              <HomeTeam careerText="Grow your skills and expertise centered with a design thinking approach" />
            </div>
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
                                pathname: `/blogs/${item.blog_detail.SEOUrl.replace(
                                  /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                  ""
                                ).replace(/ /g, "-")}`,
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

function JobCard({ title, text, id }) {
  return (
    <div className={`modal-card career-card`}>
      <div>
        <h2 className="mc-title">{title}</h2>
        <div>
          <h3
            className="mc-text"
            style={{
              whiteSpace: "wrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {text.substr(0, 190)}...
          </h3>
        </div>
        <a
          href={`https://app.kapiree.com/info-candidate?id=${id}`}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <button className="custom-btn btn-text card-btn">Apply</button>
        </a>
      </div>
    </div>
  );
}
