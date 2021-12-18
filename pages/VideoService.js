import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import Head from "next/head";
import { DataContext } from "../context/DataContext";
import ReactModal from "react-modal";

import { withRouter } from "next/router";

import ImageVideoText from "../components/ImageVideoText";
import SectionTitle from "../components/SectionTitle";
import CardTile from "../components/CardTile";

import BackArrow from "../images/BackArrow.svg";
import UXImg from "../images/Video_Services.jpg";

import script from "../images/script.png";
import stroyboard from "../images/stroyboard.png";
import voiceOver from "../images/voice-over.png";
import lowVideo from "../images/low-video.png";
import finalAnim from "../images/final-animation.png";

import GetQuoteModal from "../components/GetQuoteModal";
import DevelopmentProcessCard from "../components/DevelopmentProcessCard";

const PROCESSIMAGE = [
  {
    key: 1,
    titleText: "Script",
    img: script,
  },
  {
    key: 2,
    titleText: "Stroyboarding",
    img: stroyboard,
  },
  {
    key: 3,
    titleText: "Voice Over Recording",
    img: voiceOver,
  },
  {
    key: 4,
    titleText: "Low Detailed Video",
    img: lowVideo,
  },
  {
    key: 5,
    titleText: "Final Animtion w/ BG music",
    img: finalAnim,
  },
];

export default withRouter(
  class VideoService extends Component {
    constructor() {
      super();
      this.state = {
        isMouseInside: false,
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

    handleBack() {
      this.props.router.back();
    }

    render() {
      return (
        <div>
          <Head>
            <title>Motion Video Services | Neointeraction </title>
            <meta
              name="description"
              content="We specialize in storytelling using the medium of motion graphics & videos and also creating digital product demos for marketing useful for early user feedback."
            />
            <meta
              name="keywords"
              content="motion design, video services, story boarding,marketing  videos,motion graphic designing, motion graphics"
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
              <h1 className="main-title animated fadeIn">Motion Design</h1>
              <h2 className="sub-title main-sub-title animated fadeIn">
                Motion design brings a new dimension to your business vision.
              </h2>
              <div className="tags service-tags animated fadeIn">
                <ul>
                  <li>
                    <Link href="/UxService">
                      <button className="custom-btn inactive">UX Design</button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/UiEngineering">
                      <button className="custom-btn inactive">
                        UI Engineering
                      </button>
                    </Link>
                  </li>
                  <li>
                    <button className="custom-btn ">Motion Design</button>
                  </li>
                </ul>
              </div>
              <ReactWOW animation="fadeIn" delay="0s" offset={-200}>
                <div className="container">
                  <ImageVideoText
                    video={false}
                    ProjectVideo=""
                    componentOrientation="image-left"
                    ProjectImage={UXImg}
                    titleText="Motion Design & Video Services"
                    contentText={
                      <div>
                        <p>
                          At Neointeraction Design we do visual storytelling
                          using the medium of motion graphics & videos. We
                          specialize in digital product demos for marketing,
                          early user feedbacks, feature demos, and UX flow
                          evaluations.
                        </p>
                        <h2 className="mc-title text-left mb-3">
                          Our promises
                        </h2>
                        <ul className="solution-list">
                          <li>Communicate better with motion graphics</li>
                          <li>
                            Get early feedback from users on your product
                            features
                          </li>
                          <li>
                            Explain key product features for marketing purpose
                          </li>
                          <li>
                            Visual storytelling made impactful with videos
                          </li>
                        </ul>
                      </div>
                    }
                  />
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" offset={-200}>
                <div className="container">
                  <SectionTitle title="Our Process" />
                  {/* <div className="service-process-img">
                  <img src={processImg} alt="processImg" />
                </div> */}
                  <div className="row p-cards justify-content-between">
                    {[...PROCESSIMAGE].map((data) => (
                      <React.Fragment key={data.key}>
                        <DevelopmentProcessCard
                          titleText={data.titleText}
                          Image={data.img}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </ReactWOW>

              <ReactWOW animation="fadeIn" offset={-200}>
                <div className="section-padding">
                  <div className="container">
                    <SectionTitle
                      title="Video related projects"
                      subtitle="A list of video related projects that we have proudly delivered."
                    />
                    <DataContext.Consumer>
                      {(context) => (
                        <div className="row p-cards">
                          {[...context.state.projects]
                            .filter((name) => {
                              return name.project_industry_categories
                                .map((li) => li.PICName)
                                .includes("Video");
                            })
                            .slice(0, 3)
                            .map((cards, i) => (
                              <div
                                className="col-md-4 card-margin-bottom font-sm"
                                key={cards.id}
                              >
                                <Link
                                  href={{
                                    pathname: `/Projects/${cards.id}`,
                                    query: {
                                      title: cards.cardTitle
                                        .replace(/(:|\s+)/g, "-")
                                        .toLowerCase(),
                                    },
                                  }}
                                >
                                  <div className="link">
                                    <CardTile
                                      key={cards.id}
                                      className={cards.className}
                                      category={cards.categories.map(
                                        (li) => li.categoryName
                                      )}
                                      cardTitle={cards.cardTitle}
                                      backgroundImages={cards.cardImage.url}
                                      cardInfoText={cards.cardInfoText}
                                    />
                                  </div>
                                </Link>
                              </div>
                            ))}
                        </div>
                      )}
                    </DataContext.Consumer>
                  </div>
                </div>
              </ReactWOW>
            </div>
            <ReactWOW animation="fadeIn" offset={-200}>
              <div className="contact-section no-slider mb-20">
                <div className="container">
                  <SectionTitle
                    title="Do you have a similar project ?"
                    subtitle="Our team can connect and understand on these requirements."
                  />
                  <button className="custom-btn" onClick={this.handleOpenModal}>
                    Get a Quote
                  </button>
                </div>
              </div>
            </ReactWOW>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="career"
              onRequestClose={this.handleCloseModal}
              className="career-modal animated zoomIn"
              overlayClassName="Overlay"
            >
              <GetQuoteModal togglePopover={this.handleCloseModal} />
            </ReactModal>
          </div>
        </div>
      );
    }
  }
);
