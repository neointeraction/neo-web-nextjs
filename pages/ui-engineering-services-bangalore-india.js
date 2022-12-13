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
import UXImg from "assets/images/ui-engineering.jpg";

import GetQuoteModal from "components/GetQuoteModal";

// tch-img

import Technology from "assets/images/technology.png";

import wireframe from "assets/images/wireFrame.png";
import uiStyling from "assets/images/uiStyling.png";
import componentDevelopment from "assets/images/componentDevelopment.png";
import interactions from "assets/images/interactions.png";
import testing from "assets/images/testing.png";

import DevelopmentProcessCard from "components/DevelopmentProcessCard";

import UI1 from "assets/images/n-images/services/ui1.svg";
import UI2 from "assets/images/n-images/services/ui2.svg";
import UI3 from "assets/images/n-images/services/ui3.svg";
import UI4 from "assets/images/n-images/services/ui4.svg";
import UI5 from "assets/images/n-images/services/ui5.svg";

const PROCESSCONTENT = [
  {
    key: 1,
    image: UI1,
    title: "UI Handoff for development team",
    text: "Once the designs are approved it need to be hand coded with pixel perfect detailing. During design handoff stage design team provides all the UI specifications for the developers to implement the finished design.",
    textItalic: "- User profiling, Personas, Market study, Competitor analysis",
  },
  {
    key: 2,
    image: UI2,
    title: "Building UI component",
    text: "UI elements are the core building blocks for all applications.UI elements or user interface elements are created using front end technologies like React, Angular, VUE Js etc for both web and mobile applications",
    textItalic:
      "- Html, Css, Micro Interactions, Design systems, React Js, Storybook, Angular JS, VUE.js",
  },
  {
    key: 3,
    image: UI3,
    title: "Creating interactive flows ",
    text: "Front End developers will start building the page layout frameworks and integrate UI components page wise. Once its done it can be linked as meaningful flow that will help with API integrating process.",
    textItalic:
      "- Information Architecture, Card sorting,  Affinity Mapping, Business Goals,Design Systems",
  },
  {
    key: 4,
    image: UI4,
    title: "Integrating services",
    text: "After Front End developers develop UI components & page layout, API integration will start. Various business data points are linked and for having a meaningful user journey. API integration considers business flows, page rendering speed, userexperience factors,performance etc.",
    textItalic:
      "- Information Architecture, User Journey, Affinity Mapping,  Heuristic Evaluation, Interviews, Navigation Design, Storyboarding & Prototyping",
  },
  {
    key: 5,
    image: UI5,
    title: "Testing the business flows,validation ",
    text: "Once the API integration is done the design is validated with actual data rendering. Based on this the user flow may need design fine tuning. Key stake holders can give meaningful feedbacks at this stage.",
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

const HIREDEVELOPERCONTENT = [
  {
    key: 1,
    title: "HTML & CSS",
    text: "UI Engineer who can take the designer’s pixels to codes using the latest UI programming languages. We are looking for candidates who believe in design and are ready to adapt to the latest UI technologies and standards.",
    cardId: "quote",
  },
  {
    key: 2,
    title: "React JS",
    text: "Looking for an energetic and responsible candidate who can  implement highly-responsive user interface components using React concepts. Ideal candidate should have strong belief in pixel perfect front end UI engineering.",
    cardId: "quote",
  },
  {
    key: 3,
    title: "Angular JS",
    text: "We are looking for an Angular JS developer interested in building web based applications. You will be responsible for designing and building these applications, as well as coordinating with the teams responsible for other layers of the product infrastructure.",
    cardId: "quote",
  },
];

export default withRouter(
  class UiEngineering extends Component {
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
              Best UI Engineering Services in Bangalore - Neointeraction Design{" "}
            </title>
            <meta
              name="description"
              content="To develop your web and mobile applications, use our highly skilled and design-sensitive React developers. This is necessary because your company needs a user-centric product experience."
            />
            <meta name="keywords" content="ui engineering services bangalore" />
            <link
              rel="canonical"
              href="https://www.neointeraction.com/ui-engineering-services-bangalore-india"
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
              <h1 className="main-title animated fadeIn">ui engineering</h1>
              <h2 className="sub-title main-sub-title animated fadeIn">
                Giving life to your ideas through the latest technologies and
                softwares.
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
                      <button className="custom-btn inactive">
                        Design Transformation
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-engineering-services-bangalore-india">
                      <button className="custom-btn ">UI Engineering</button>
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
                    titleText="Pixel to Code"
                    imageAlt="UI Engineering Services in Bangalore  - Neointeraction"
                    contentText={
                      <div>
                        <p>
                          UI Engineering at Neointeraction Design has evolved
                          from a strong belief that a well-done design is not
                          worth if not carefully crafted to life. UI engineering
                          plays a key role in most of the modern web
                          applications that drive reusable component-driven
                          approaches with React Js/Angular/VUE.js.
                        </p>
                        <ul className="solution-list mb-3">
                          <li>
                            Working prototype to get early feedback from users
                          </li>
                          <li>
                            Clean code which can be directly plugged with APIs
                          </li>
                          <li>UI developed to pixel specifications</li>
                          <li>UI engineering using Restful API integration</li>
                          <li>Great savings with the development time.</li>
                        </ul>
                        <p>
                          To know more about how we deliver great experiences,
                          take a look at our{" "}
                          <AnchorLink
                            className="link-btn-map pl-0"
                            href="#eng-modal"
                          >
                            Engagement Model
                          </AnchorLink>
                          .
                        </p>
                      </div>
                    }
                  />
                </div>
              </ReactWOW>

              <ReactWOW animation="fadeIn" offset={-200}>
                <div className="section-padding pt-0">
                  <div className="container">
                    <SectionTitle title="Our Process" />
                    {/* <div className="service-process-img">
                    <img src={processImg} alt="processImg" />
                  </div> */}
                    {/* <div className="row p-cards justify-content-between">
                      {[...PROCESSIMAGE].map((data) => (
                        <React.Fragment key={data.key}>
                          <DevelopmentProcessCard
                            titleText={data.titleText}
                            Image={data.img}
                          />
                        </React.Fragment>
                      ))}
                    </div> */}
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
                      title="Technologies we use"
                      subtitle="Our design engineering philosophy aims at gaining digital excellence in whatever we do. It entails using industry’s finest practices, tools & techniques. All in a bid to give you that rich, non-bumpy & smooth user experience."
                    />
                    <div className="img-sprite mt-2">
                      <img src={Technology} alt="tech-img" />
                    </div>
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" offset={-200}>
                <div className="section-padding pt-0">
                  <div className="container">
                    <SectionTitle
                      title="Hire Engineers"
                      subtitle="If your project demands experienced hands, reach us today."
                    />
                    <div className="row p-cards">
                      {[...HIREDEVELOPERCONTENT].map((engage) => (
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
                      title="UI Engineering related projects"
                      subtitle="A list of UI engineering related project that we have proudly delivered."
                    />

                    <DataContext.Consumer>
                      {(context) => (
                        <div className="row p-cards">
                          {[...context.state.projects]
                            .filter((name) => {
                              return name.project_industry_categories
                                .map((li) => li.PICName)
                                .includes("UI");
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
              <GetQuoteModal togglePopover={this.handleCloseModal} />
            </ReactModal>
          </div>
        </div>
      );
    }
  }
);
