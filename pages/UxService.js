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
import UXImg from "assets/images/ux-service.jpg";

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

import UX1 from "assets/images/n-images/services/ux1.svg";
import UX2 from "assets/images/n-images/services/ux2.svg";
import UX3 from "assets/images/n-images/services/ux3.svg";
import UX4 from "assets/images/n-images/services/ux4.svg";
import UX5 from "assets/images/n-images/services/ux5.svg";

const PROCESSCONTENT = [
  {
    key: 1,
    image: UX1,
    title: "Understanding the Goals",
    text: "The discovery phase of the project requires close study of user needs& business goals. our team strts a project by studying the context,user types, ad functional flow. A design project is strategized around a user problem that need solving",
    textItalic: "- User profiling, Personas, Market study, Competitor analysis",
  },
  {
    key: 2,
    image: UX2,
    title: "Design to Implementation",
    text: "The success of any design depends on how well it is implemented. We understand the importance of following the best standard practices for a  pixel-perfect UI implementation for the web and mobile.",
    textItalic:
      "- Html, Css, Micro Interactions, Design systems, React Js, Storybook, Angular JS, VUE.js",
  },
  {
    key: 3,
    image: UX3,
    title: "Setting up the Ux strategy",
    text: "Focusing on bringing the right web & mobile products to end-users, we apply the principles of design thinking by listening to our stakeholders feedback. We strongly believe that with the right strategy & planning, business can bring measurable outcomes.",
    textItalic:
      "- Information Architecture, Card sorting,  Affinity Mapping, Business Goals,Design Systems",
  },
  {
    key: 4,
    image: UX4,
    title: `Interaction Design`,
    text: "After understanding the users goals, the navigation experience will be designed, prototyped, and linked to various user journeys. The Interaction Design process is always done in collaboration with the user, business owners, and the technical team.",
    textItalic:
      "- Information Architecture, User Journey, Affinity Mapping,  Heuristic Evaluation, Interviews, Navigation Design, Storyboarding & Prototyping",
  },
  {
    key: 5,
    image: UX5,
    title: "Bringing the WOW factor",
    text: "Interaction Design is enhanced by a beautifully-crafted visual design. The end-user interacts at the UI level for better discovery, engagement, and transactions. Our UI Design team understands the need of following pixel-level detailing and standards.",
    textItalic:
      " - Detailed Layouts, UI elements, Dashboards & Data Visualization, Icons and, Illustrations, Micro-interactions",
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
    title: "UX Designers",
    text: "Responsible for functional design solutions creating better product experiences. The broad responsibility of a UX designer is to ensure that the product logically flows from one step to the next. ",
    cardId: "quote",
  },
  {
    key: 2,
    title: "UX Researchers",
    text: "As a key member of the Product Design team, you will be the “doctor” of our product - doing regular check-ups to see if the experience is healthy, and can precisely articulate what worked well, and what needs to be improved to make our customers succeed.",
    cardId: "quote",
  },
  {
    key: 3,
    title: "UI Designers",
    text: "A creative individual who is responsible for creating the aesthetic look and feel of a product by using standard design principles and practices.",
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
  class UxService extends Component {
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
              UX Services | Neointeraction is a UI/UX company in india
            </title>
            <meta
              name="description"
              content="Neointeraction is the best UI/UX design firm in Bangalore, Mumbai, with a passionate team that designs simplified & innovative user-centric experiences."
            />
            <meta
              name="keywords"
              content="UX design,user experience design services,ux design and development, ux design agency, ux auditing, user experience design agency, ui mobile app design"
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
              <h1 className="main-title animated fadeIn">ux design</h1>
              <h2 className="sub-title main-sub-title animated fadeIn ">
                Design to shape tomorrow's digital experiences.
              </h2>
              <div className="tags service-tags animated fadeIn">
                <ul>
                  <li>
                    <button className="custom-btn">UX Design</button>
                  </li>
                  <li>
                    <Link href="/ProductService">
                      <button className="custom-btn inactive">
                        Product Design
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/DesignTransformation">
                      <button className="custom-btn inactive">
                        Design Transformation
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/UiEngineering">
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
                    titleText="Experience Design"
                    contentText={
                      <div>
                        <p>
                          We at Neointeraction Design have a well-defined design
                          delivery process which enables us to work closely with
                          client stakeholders and meet their business goals.
                          With a Digital Transformation, every business goes
                          through a change in their business model, branding,
                          technology stack etc. Design plays a major role in
                          bringing the right direction to the business and to
                          their end-users. Our team evaluates the digital
                          landscape from a design perspective and defines the
                          design system to bring a unified experience.
                        </p>
                        <p>
                          To know more about how we deliver great experiences,
                          take a look at our{" "}
                          <AnchorLink
                            className="link-btn-map pl-0"
                            href="#eng-modal"
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
                      title="Hire Designers"
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
                            className="career-card n-cc-card"
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
                                    pathname: `/Projects/${cards.cardTitle
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
