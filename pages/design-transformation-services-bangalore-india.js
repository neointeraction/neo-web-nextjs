import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import Head from "next/head";
import { DataContext } from "context/DataContext";
import ReactModal from "react-modal";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { withRouter } from "next/router";

import ImageVideoText from "components/ImageVideoText";
import SectionTitle from "components/SectionTitle";
import ModalCard from "components/ModalCard";
import CardTile from "components/CardTile";

import BackArrow from "assets/images/BackArrow.svg";
import UXImg from "assets/images/n-images/dt-banner.jpg";

// import captureReq from "assets/images/capture-req.png";
// import keyScenarios from "assets/images/key-scenarios.png";
// import alternatives from "assets/images/alternatives.png";
// import evaluate from "assets/images/evaluate.png";
// import refine from "assets/images/refine.png";
// import detailSpecs from "assets/images/detail-specs.png";
// import uiSolution from "assets/images/ui-solution.png";

// import CombinedShapeCard from "components/CombinedShapeCard";
import GetQuoteModal from "components/GetQuoteModal";
import DesignProcess from "assets/images/design-process.png";

import d1 from "assets/images/n-images/services/d1.svg";
import d2 from "assets/images/n-images/services/d2.svg";
import d3 from "assets/images/n-images/services/d3.svg";
import d4 from "assets/images/n-images/services/d4.svg";
import Breadcrumbs from "nextjs-breadcrumbs";

const PROCESSCONTENT = [
  {
    key: 1,
    image: d1,
    title: "Discovery",
    text: "Discovery phase involves a thorough study of the business domain collaborating with stakeholders. Understand users journeys, navigational patterns, UI component documentation etc is done in detail",
    textItalic: "- User profiling, Personas, Market study, Competitor analysis",
  },
  {
    key: 2,
    image: d2,
    title: "Evaluate design pattern",
    text: "Analyze the benefits and drawbacks of the company's existing design language and examining the branding science",
    textItalic:
      "- Html, Css, Micro Interactions, Design systems, React Js, Storybook, Angular JS, VUE.js",
  },
  {
    key: 3,
    image: d3,
    title: "Build design system",
    text: "Atoms and molecules make up the building design system, which directs the developer in selecting and using the assets and Reusable components are used to prevent over-creating designs.",
    textItalic:
      "- Information Architecture, Card sorting,  Affinity Mapping, Business Goals,Design Systems",
  },
  {
    key: 4,
    image: d4,
    title: `Bring unified 
    experience `,
    text: "Regardless of the platform and framework, create a unified experience by using a common design language across the entire product.",
    textItalic:
      "- Information Architecture, User Journey, Affinity Mapping,  Heuristic Evaluation, Interviews, Navigation Design, Storyboarding & Prototyping",
  },
];

const ENGAGEMENTCONTENT = [
  {
    key: 1,
    title: "Fixed price",
    text: "A fixed-cost pricing strategy guarantees a project's budget regardless of time or expense. A fixed pricing approach is excellent for small trial projects since it involves minimum customer oversight and little client risk.",
  },
  {
    key: 2,
    title: "Effort based billings",
    text: "An effort-based pricing model will benefit you since it provides total transparency into what you're paying for vs what you're getting. It reduces the barrier to entry for new services by letting you test something new without committing to a long-term commitment that may be risky.",
  },
  {
    key: 3,
    title: "Team based hiring",
    text: "This implies you won't have to worry about hiring and training new employees to finish your assignment properly and on time. You'll work with a dedicated Account Manager who will be your point of contact throughout the process.",
  },
];

const HIREDESIGNERSCONTENT = [
  {
    key: 1,
    title: "UX Researher/ Business Analyst",
    text: "As a key member of the Product Design team, you will be the “doctor” of our product - doing regular check-ups to see if the experience is healthy, and can precisely articulate what worked well, and what needs to be improved to make our customers succeed. ",
    cardId: "quote",
  },
  {
    key: 2,
    title: "UX Designer",
    text: "Responsible for functional design solutions creating better product experiences. The broad responsibility of a UX designer is to ensure that the product logically flows from one step to the next.",
    cardId: "quote",
  },
  {
    key: 3,
    title: "UI Engineer",
    text: "UI Engineer who can take the designer’s pixels to codes using the latest UI programming languages. We are looking for candidates who believe in design and are ready to adapt to the latest UI technologies and standards.",
    cardId: "quote",
  },
];

// const PROCESSIMAGES = [
//   {
//     key: 1,
//     img: captureReq,
//     title: "Capture Requirements",
//     titleText: "Business, Users and Capabilities",
//   },
//   {
//     key: 2,
//     img: keyScenarios,
//     title: "Identify Key Scenarios",
//     titleText: "Personas, Settings and Tasks",
//   },
//   {
//     key: 3,
//     img: alternatives,
//     title: "Create Design Alternatives",
//     titleText: "Evaluate Design Options",
//   },
//   {
//     key: 4,
//     img: evaluate,
//     title: "Evaluate Design",
//     titleText: "Review with Stakeholders",
//   },
//   {
//     key: 5,
//     img: refine,
//     title: "Refine Design",
//     titleText: "Feedback and Refine",
//   },
//   {
//     key: 6,
//     img: detailSpecs,
//     title: "Detail Design Specs",
//     titleText: "UI Specs",
//   },
//   {
//     key: 7,
//     img: uiSolution,
//     title: "Build UI Solution",
//     titleText: "Functioning UI",
//   },
// ];

export default withRouter(
  class DesignTransformation extends Component {
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
            <title>
              Hire Best Design Transformation Services in Bangalore -
              Neointeraction Design
            </title>
            <meta
              name="description"
              content="Make an investment in your company's design transformation to stay up with the shifting customer expectations and to improve business ROI through a unified experience that will attract and retain users."
            />
            <meta
              name="keywords"
              content="Design Transformation services bangalore"
            />
            <link
              rel="canonical"
              href="https://www.neointeraction.com/design-transformation-services-bangalore-india"
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
                    from: "design-transformation-services-bangalore-india",
                    to: "Services  /  Design Transformation",
                  },
                ]}
              />
              <h1 className="main-title animated fadeIn">
                Design Transformation
              </h1>
              <h2 className="sub-title main-sub-title animated fadeIn ">
                Design to shape tomorrow's digital experiences.
              </h2>
              <div className="tags service-tags animated fadeIn">
                <ul>
                  <li>
                    <Link href="/ui-ux-design-developer-services-company-bangalore">
                      <button className="custom-btn inactive">UX Design</button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product-design-services-bangalore-india">
                      <button className="custom-btn inactive">
                        Product Design
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/design-transformation-services-bangalore-india">
                      <button className="custom-btn ">
                        Design Transformation
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-engineering-services-bangalore-india">
                      <button className="custom-btn inactive">
                        UI Engineering
                      </button>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/VideoService">
                      <button className="custom-btn inactive">
                        Motion Design
                      </button>
                    </Link>
                  </li> */}
                </ul>
              </div>
              <ReactWOW animation="fadeIn" delay="0s" offset={-200}>
                <div className="container">
                  <ImageVideoText
                    video={false}
                    ProjectVideo=""
                    componentOrientation="image-left"
                    ProjectImage={UXImg}
                    imageAlt="Design Transformation Services in Bangalore  - Neointeraction "
                    titleText="Design Transformation "
                    contentText={
                      <div>
                        <p>
                          Technology & user expectations change with time and
                          organizations are not nimble enough to adopt new
                          technologies as it requires retraining staff and
                          reworking existing systems, creating more overheads.
                        </p>
                        <p>
                          Digital transformation isn’t just about using more
                          software tools and upgrading a company’s IT
                          infrastructure. When an organization decides to
                          implement technologies in its business operations, the
                          way it engages with customers changes as well.
                        </p>
                        <p>
                          What this means is that if the user experience doesn’t
                          get enough attention, chances are the entire process
                          will fail. For the digital transformation of your
                          company to be successful, go for a Design
                          Transformation approach.
                        </p>
                        <p>
                          To know more about how we deliver great experiences,
                          take a look at our{" "}
                          <AnchorLink
                            className="link-btn-map pl-0"
                            href="#eng-modal"
                            offset={() => 100}
                          >
                            Engagement Model
                          </AnchorLink>
                        </p>
                      </div>
                    }
                  />
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" offset={-200}>
                <div className="section-padding pt-0">
                  <div className="container">
                    <SectionTitle title="Our Design Process" />
                    {/* <div className="section-padding"> */}
                    {/* <CombinedShapeCard content={PROCESSIMAGES} /> */}
                    {/* <img
                      src={DesignProcess}
                      alt="DesignProcess"
                      className="design-process"
                    /> */}
                    {/* </div> */}
                    <div className="row p-cards">
                      {[...PROCESSCONTENT].map((engage) => (
                        <div
                          className="col-md-4 card-margin-bottom"
                          key={engage.key}
                        >
                          <ModalCard
                            image={engage.image}
                            title={engage.title}
                            text={engage.text}
                            // textItalic={engage.textItalic}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" offset={-200}>
                <div className="section-padding pt-0">
                  <div className="container">
                    <SectionTitle
                      title="Hire Consultants"
                      subtitle="If your project demands experienced hands, reach us today."
                    />
                    <div className="row p-cards">
                      {[...HIREDESIGNERSCONTENT].map((engage) => (
                        <div
                          className="col-md-4 card-margin-bottom"
                          key={engage.key}
                        >
                          <ModalCard
                            title={engage.title}
                            text={engage.text}
                            cardId={engage.cardId}
                            buttonText="Hire Now"
                            className="career-card"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" offset={-200}>
                <div className="section-padding pt-0" id="eng-modal">
                  <div className="container">
                    <SectionTitle
                      title="The Engagement Model"
                      subtitle="Based on your core business, the models below may suit well that will add the right value for your short and long term project goals. Our team is familiar with the Agile & Learn methods of design delivery."
                    />
                    <div className="row p-cards">
                      {[...ENGAGEMENTCONTENT].map((engage) => (
                        <div
                          className="col-md-4 card-margin-bottom"
                          key={engage.key}
                        >
                          <ModalCard title={engage.title} text={engage.text} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ReactWOW>

              <ReactWOW animation="fadeIn" offset={-200}>
                <div>
                  <div className="container">
                    <SectionTitle
                      title="UX related projects"
                      subtitle="A list of UX Design related project that we have proudly delivered."
                    />
                    <DataContext.Consumer>
                      {(context) => (
                        <div className="row p-cards">
                          {[...context.state.projects]
                            .filter((name) => {
                              return name.project_industry_categories
                                .map((li) => li.PICName)
                                .includes("UX");
                            })
                            .slice(0, 3)
                            .map((cards, i) => (
                              <div
                                className="col-md-4 card-margin-bottom font-sm"
                                key={cards.id}
                              >
                                <Link
                                  href={{
                                    pathname: `/projects/${cards.cardTitle
                                      .replace(
                                        /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                        ""
                                      )
                                      .replace(/ /g, "-")}`,
                                  }}
                                >
                                  <div className="link">
                                    <CardTile
                                      key={cards.id}
                                      className="project-card-n"
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
              <div className="contact-section no-slider mb-20 mb-spacing">
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
              <GetQuoteModal
                togglePopover={this.handleCloseModal}
                formtitle="Get a Quote"
              />
            </ReactModal>
          </div>
        </div>
      );
    }
  }
);
