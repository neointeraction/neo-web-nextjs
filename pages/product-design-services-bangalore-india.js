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
import UXImg from "assets/images/n-images/pd-banner.jpg";

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

import P1 from "assets/images/n-images/services/p1.svg";
import P2 from "assets/images/n-images/services/p2.svg";
import P3 from "assets/images/n-images/services/p3.svg";
import P4 from "assets/images/n-images/services/p4.svg";
import P5 from "assets/images/n-images/services/p5.svg";
import P6 from "assets/images/n-images/services/p6.svg";
import Breadcrumbs from "nextjs-breadcrumbs";

const PROCESSCONTENT = [
  {
    key: 1,
    image: P1,
    title: "Define Product Vision",
    text: "The process begins with the definition of the product use cases,  business requirements, define target audience, competitor evaluation.",
    textItalic: "- User profiling, Personas, Market study, Competitor analysis",
  },
  {
    key: 2,
    image: P2,
    title: "Product Research",
    text: "Try to understand the user with both qualitative and quantitative research techniques, create use story boards to evaluate  user journey’s with different scenarios.",
    textItalic:
      "- Html, Css, Micro Interactions, Design systems, React Js, Storybook, Angular JS, VUE.js",
  },
  {
    key: 3,
    image: P3,
    title: "Agile Design Sprints",
    text: "Create fresh concepts and ideas to put into practise with quick design iterations, as well as concurrently trying to develop them in a working prototype. Rapid prototyping is done using both low-fidelity and high-fidelity wireframes.",
    textItalic:
      "- Information Architecture, Card sorting,  Affinity Mapping, Business Goals,Design Systems",
  },
  {
    key: 4,
    image: P4,
    title: `Rapid 
    Prototyping`,
    text: "We create a design system and document all of the components and assets with a high level of UI detailing. We also create visual design mockups and prototype the UI to assist developers in implementing the design.",
    textItalic:
      "- Information Architecture, User Journey, Affinity Mapping,  Heuristic Evaluation, Interviews, Navigation Design, Storyboarding & Prototyping",
  },
  {
    key: 5,
    image: P5,
    title: "Front end Development",
    text: "To solve the design issue, we try to divide the work into sprints based on UX and UI tasks, which will then be assigned to the team. We then hold regular sprint meetings to review and validate the idea, which helps us to increase production and finish the project.",
    textItalic:
      " - Detailed Layouts, UI elements, Dashboards & Data Visualization, Icons and, Illustrations, Micro-interactions",
  },
  {
    key: 6,
    image: P6,
    title: "Visual Design / UI",
    text: "Design team closely work with Front end developers to assist in component development, API integration, and design development using the front end UI frameworks. We also conduct comprehensive UI testing using agile working practises.",
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
    title: "UX Researhers",
    text: "As a key member of the Product Design team, you will be the “doctor” of our product - doing regular check-ups to see if the experience is healthy, and can precisely articulate what worked well, and what needs to be improved to make our customers succeed.",
    cardId: "quote",
  },
  {
    key: 2,
    title: "Product Designers",
    text: "Responsible for functional design solutions creating better product experiences. The broad responsibility of a product designer is to ensure that the product logically flows from one step to the next.",
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
  class ProductService extends Component {
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
              Hire Best Product Design Services in Bangalore - Neointeraction
              Design
            </title>
            <meta
              name="description"
              content="Work with a reputable product design team comprised of user researchers, ux designers, and UI engineers who will put the needs of the user first to create wonderful transactional delight."
            />
            <meta name="keywords" content="product design services bangalore" />
            <link
              rel="canonical"
              href="https://www.neointeraction.com/product-design-services-bangalore-india"
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
                    from: "product-design-services-bangalore-india",
                    to: "Services  /  Product Design",
                  },
                ]}
              />
              <h1 className="main-title animated fadeIn">Product Design</h1>
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
                    <button className="custom-btn">Product Design</button>
                  </li>
                  <li>
                    <Link href="/design-transformation-services-bangalore-india">
                      <button className="custom-btn inactive">
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
                </ul>
              </div>
              <ReactWOW animation="fadeIn" delay="0s" offset={-200}>
                <div className="container">
                  <ImageVideoText
                    video={false}
                    ProjectVideo=""
                    componentOrientation="image-left"
                    ProjectImage={UXImg}
                    imageAlt="Product Design Services in Bangalore  - Neointeraction "
                    titleText="Digital product innovation"
                    contentText={
                      <div>
                        <p>
                          Validate product ideas at the early stage of the
                          product development stage with an agile design first
                          approach. We believe collaboration yields innovative
                          ideas, so working in a collaborative environment with
                          the support of a cross-functional team helps us to
                          design outstanding user experiences.
                        </p>
                        {/* <ul className="solution-list prod-list">
                          <li>
                            By applying user psychology to customer experience,
                            we design engaging digital products used by millions
                            of people.
                          </li>
                          <li>
                            an agile design/development process is followed to
                            build a minimum viable product.
                          </li>
                        </ul> */}
                        <p>
                          Common problem is a lack of holistic thinking,
                          clarity, and simplicity. We help businesses launch new
                          products/services. We help diagnose process gaps in
                          customer journeys and optimize the experiences.
                        </p>
                        <p>
                          Our Ux researchers can assist you in validating the
                          ideas, with market research which gives a boost to
                          product performance and vision to the next stage.
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
                      title="Hire Design Team"
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
