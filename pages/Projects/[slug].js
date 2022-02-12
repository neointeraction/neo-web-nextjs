import React, { Component } from "react";

import ReactWOW from "react-wow";
import ReactModal from "react-modal";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { baseUrl } from "../../globalConfig";

import { withRouter } from "next/router";

import ImageVideoText from "../../components/ImageVideoText";
import Quotes from "../../components/Quotes";
import SectionTitle from "../../components/SectionTitle";
import ProcessCard from "../../components/ProcessCard";
import OutcomeCard from "../../components/OutcomeCard";
import ProjectSlider from "../../components/ProjectSlider";
import Loader from "../../components/Loader";
import ProjectUiBanner from "../../components/ProjectUiBanner";

import BackArrow from "../../images/BackArrow.svg";
import DownloadArrow from "../../images/DownloadArrow.svg";
import Challenge from "../../images/process-outcome/Challenge.svg";
import Innovation from "../../images/process-outcome/Innovation.svg";
import Profits from "../../images/process-outcome/Profits.svg";
import Strategy from "../../images/process-outcome/Strategy.svg";
import NewUserEngagement from "../../images/process-outcome/NewUserEngagement.svg";
import NewCustomerAcquisition from "../../images/process-outcome/NewCustomerAcquisition.svg";

import GetQuoteModal from "../../components/GetQuoteModal";
import CaseStudyModal from "../../components/CaseStudyModal";

export async function getStaticPaths() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(baseUrl + `/projects`);
  const data = await res.json();

  const paths = data.map((x) => ({
    params: { slug: x.cardTitle.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ /g,"-").toString() },
}))

  return {
    paths,
    fallback: false,
  };
}

// export async function getStaticProps(context) {
//   const id = context.params.id;
//   const res = await fetch(baseUrl + `/projects/${id}`);
//   const data = await res.json();
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

export async function getStaticProps({params}) {

  const title = params.slug;

  const projectsRes = await fetch(baseUrl + `/projects`);
  const projectsData = await projectsRes.json();

  const id = projectsData.find(data => data.cardTitle.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ /g,"-") === title)?.id;

  const res = await fetch(baseUrl + `/projects/${id}`);
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
        // matchId: props.router.query.id,
        // projectInfo: {
        //   project_detail: {
        //     ProjectDetailLogo: {},
        //     introBlockImage: {},
        //     solutionImage: {},
        //     keyBenefitImage: {},
        //   },
        // },
        error: null,
        loading: true,
        showModal: false,
        showCaseStudyModal: false,
        projectInfo: props.post
      };
      this.componentDidMount = this.componentDidMount.bind(this);
      this.componentDidUpdate = this.componentDidUpdate.bind(this);
      this.handleBack = this.handleBack.bind(this);
    }

    
    componentDidUpdate = async (prevProps) => {
      // this.componentDidMount();
      if (this.props.router.query.slug !== prevProps.router.query.slug) {
        try {
          this.setState({ projectInfo: this.props.post });
          this.setState({ loading: false });
        } catch (error) {
          this.setState({ error });
        }
      }
    };

     componentDidMount = async () => {
       this.setState({loading: false})
     }

    // componentDidMount = async () => {
    //   try {
    //     const res = await axios.get(
    //       baseUrl + `/projects/${this.state.matchId}`
    //     );
    //     this.setState({ projectInfo: res.data });
    //     // console.log(response.data);

    //     this.setState({ loading: false });
    //   } catch (error) {
    //     this.setState({ error });
    //   }
    // };

    // componentDidUpdate = async (prevProps) => {
    //   // this.componentDidMount();
    //   if (this.props.router.query.id !== prevProps.router.query.id) {
    //     try {
    //       const result = await axios.get(
    //         baseUrl + `/projects/${this.props.router.query.id}`
    //       );
    //       this.setState({ projectInfo: result.data });
    //       this.setState({ loading: false });
    //     } catch (error) {
    //       this.setState({ error });
    //     }
    //   }
    // };

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

    handleOpenCSModal = () => {
      this.setState({ showCaseStudyModal: true });
    };

    handleCloseCSModal = () => {
      this.setState({ showCaseStudyModal: false });
    };

    handleBack() {
      this.props.router.back();
    }

    render() {
      const { projectInfo } = this.state;
      return (
        <div>
          <Head>
            <title>{this.props.post.project_detail.SEOTitle}</title>
            <meta
              name="description"
              content={this.props.post.project_detail.SEODescription}
            />
            <meta
              name="keywords"
              content={this.props.post.project_detail.SEOKeywords}
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
                  <div key={projectInfo.id}>
                    <h1 className="main-title animated fadeIn">
                      {projectInfo.cardTitle}
                    </h1>
                    <h2 className="sub-title main-sub-title animated fadeIn ">
                      {projectInfo.project_detail.projectDetailSubtitle}
                    </h2>
                    <div className="tags animated fadeIn nc-tag">
                      <ul>
                        {projectInfo.project_detail.projectDetailTag1 ? (
                          <li>
                            {projectInfo.project_detail.projectDetailTag1}
                          </li>
                        ) : null}
                        {projectInfo.project_detail.projectDetailTag2 ? (
                          <li>
                            {projectInfo.project_detail.projectDetailTag2}
                          </li>
                        ) : null}
                        {projectInfo.project_detail.projectDetailTag3 ? (
                          <li>
                            {projectInfo.project_detail.projectDetailTag3}
                          </li>
                        ) : null}
                      </ul>
                    </div>
                    <div className="tags detail-tags animated fadeIn ">
                      <ul>
                        {projectInfo.project_detail.ProjectDetailLogo ? (
                          <li>
                            <img
                              src={`${baseUrl}${projectInfo.project_detail.ProjectDetailLogo.url}`}
                              alt="company-logo"
                            />
                          </li>
                        ) : null}
                        {projectInfo.project_detail.caseStudyUrl ? (
                          <li>
                            <div
                              className="btn-link"
                              onClick={this.handleOpenCSModal}
                            >
                              Download casestudy
                              <span>
                                <img src={DownloadArrow} alt="download" />
                              </span>
                            </div>
                          </li>
                        ) : null}
                        <li>
                          {/* <Link to="/ContactUs"> */}
                          <button
                            className="custom-btn"
                            onClick={this.handleOpenModal}
                          >
                            Contact Us
                          </button>
                          {/* </Link> */}
                        </li>
                      </ul>
                    </div>
                    {/* ===== */}
                    {projectInfo.project_detail.introBlockTitle ? (
                      <ReactWOW animation="fadeIn" delay="0s" offset={0}>
                        <div>
                          <ImageVideoText
                            video={false}
                            ProjectVideo=""
                            componentOrientation="image-left"
                            ProjectImage={`${baseUrl}${projectInfo.project_detail.introBlockImage.url}`}
                            titleText={
                              projectInfo.project_detail.introBlockTitle
                            }
                            contentText={
                              <div>
                                <ReactMarkdown className="project-para">
                                  {
                                    projectInfo.project_detail
                                      .IntroBlockDescription
                                  }
                                </ReactMarkdown>
                              </div>
                            }
                          />
                        </div>
                      </ReactWOW>
                    ) : null}
                  </div>
                </div>
                {/* container-end ==== */}

                <ReactWOW animation="fadeIn" offset={-200}>
                  <div className="section-padding">
                    <ProjectUiBanner
                      ProjectUiSrc={`${baseUrl}${
                        projectInfo.project_detail.bannerVideoUrl
                          ? null
                          : projectInfo.project_detail.projectUiBanner.url
                      }`}
                      ProjectVidSrc={projectInfo.project_detail.bannerVideoUrl}
                    />
                  </div>
                </ReactWOW>
                <ReactWOW animation="fadeIn" offset={-200}>
                  <div>
                    <Quotes
                      quoteText={
                        projectInfo.project_detail.TestimonialKeyHighlight
                      }
                    />
                  </div>
                </ReactWOW>
                <div className="container animated fadeIn">
                  {projectInfo.project_detail.processTitle ? (
                    <ReactWOW animation="fadeIn" offset={-200}>
                      <div className="process-section">
                        <div className="container">
                          <SectionTitle
                            title={projectInfo.project_detail.processTitle}
                            subtitle=""
                          />
                          <div className="row p-cards">
                            <div className="col-md-4">
                              <ProcessCard
                                className="process-outcom-card"
                                backgroundImages={Challenge}
                                infoText={
                                  projectInfo.project_detail
                                    .processChallengeText
                                }
                                cardTitle="Challenge"
                              />
                            </div>
                            <div className="col-md-4">
                              <ProcessCard
                                className="process-outcom-card"
                                backgroundImages={Strategy}
                                infoText={
                                  projectInfo.project_detail.processStrategyText
                                }
                                cardTitle="Strategy"
                              />
                            </div>
                            <div className="col-md-4">
                              <ProcessCard
                                className="process-outcom-card"
                                backgroundImages={Innovation}
                                infoText={
                                  projectInfo.project_detail
                                    .processInnovationText
                                }
                                cardTitle="Innovation"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </ReactWOW>
                  ) : null}
                  {projectInfo.project_detail.solutionTitle ? (
                    <ReactWOW animation="fadeIn" offset={-200}>
                      <div className="container">
                        <ImageVideoText
                          video={false}
                          ProjectVideo=""
                          componentOrientation="image-right"
                          ProjectImage={`${baseUrl}${projectInfo.project_detail.solutionImage.url}`}
                          titleText={projectInfo.project_detail.solutionTitle}
                          contentText={
                            <div>
                              <ReactMarkdown className="project-para">
                                {projectInfo.project_detail.solutionDescription}
                              </ReactMarkdown>
                            </div>
                          }
                        />
                      </div>
                    </ReactWOW>
                  ) : null}
                  {projectInfo.project_detail.keyBenefitTitle ? (
                    <ReactWOW animation="fadeIn" offset={-200}>
                      <div className="container">
                        <ImageVideoText
                          video={false}
                          ProjectVideo=""
                          componentOrientation="image-left"
                          ProjectImage={`${baseUrl}${projectInfo.project_detail.keyBenefitImage.url}`}
                          titleText={projectInfo.project_detail.keyBenefitTitle}
                          contentText={
                            <div>
                              <ReactMarkdown className="project-para">
                                {
                                  projectInfo.project_detail
                                    .keyBenefitDescription
                                }
                              </ReactMarkdown>
                            </div>
                          }
                        />
                      </div>
                    </ReactWOW>
                  ) : null}

                  {projectInfo.project_detail.outcomeTitle ? (
                    <ReactWOW animation="fadeIn" offset={-200}>
                      <div className="process-section">
                        <div className="container">
                          <SectionTitle
                            title={projectInfo.project_detail.outcomeTitle}
                            subtitle=""
                          />
                          <div className="row p-cards">
                            <div className="col-md-4">
                              <OutcomeCard
                                className="process-outcom-card outcome-card"
                                backgroundImages={Profits}
                                infoLabel="Profits"
                                infoText={`${projectInfo.project_detail.outcomeProfitCount}+`}
                              />
                            </div>
                            <div className="col-md-4">
                              <OutcomeCard
                                className="process-outcom-card outcome-card"
                                backgroundImages={NewUserEngagement}
                                infoLabel="New User Engagement"
                                infoText={`${projectInfo.project_detail.outcomeRoiCount}%`}
                              />
                            </div>
                            <div className="col-md-4">
                              <OutcomeCard
                                className="process-outcom-card outcome-card"
                                backgroundImages={NewCustomerAcquisition}
                                infoLabel="New Customer Acquisition"
                                infoText={`${projectInfo.project_detail.outcomeRiseCount}%`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </ReactWOW>
                  ) : null}
                </div>
                <ReactWOW animation="fadeIn" offset={-200}>
                  <div className="contact-section">
                    <div className="container">
                      <SectionTitle
                        title="Do you have a  similar project ?"
                        subtitle="Our team can connect and understand on these requirements."
                      />
                      <button
                        className="custom-btn"
                        onClick={this.handleOpenModal}
                      >
                        Get a Quote
                      </button>
                    </div>
                  </div>
                </ReactWOW>
                <div className="container position-relative">
                  <div className="carousal-position">
                    <ReactWOW animation="fadeInUp" delay="0s">
                      <div>
                        <ProjectSlider />
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
                  <GetQuoteModal
                    formtitle="Get a Quote"
                    togglePopover={this.handleCloseModal}
                  />
                </ReactModal>
                <ReactModal
                  isOpen={this.state.showCaseStudyModal}
                  contentLabel="career"
                  onRequestClose={this.handleCloseCSModal}
                  className="career-modal animated zoomIn"
                  overlayClassName="Overlay"
                >
                  <CaseStudyModal
                    formtitle="Download Casestudy"
                    togglePopover={this.handleCloseCSModal}
                    caseStudyUrlLink={projectInfo.project_detail.caseStudyUrl}
                  />
                </ReactModal>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
);
