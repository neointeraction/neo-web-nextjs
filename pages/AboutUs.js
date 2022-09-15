import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import Head from "next/head";
import { BlogContext } from "context/BlogContext";
import axios from "axios";
import { baseUrl } from "../globalConfig";

import { withRouter } from "next/router";

import ImageVideoText from "components/ImageVideoText";
import SectionTitle from "components/SectionTitle";
import CardTileMenuImage from "components/CardTileMenuImage";
import CardTileUpfront from "components/CardTileUpfront";
import ModalCard from "components/ModalCard";
import CardTileTeam from "components/CardTileTeam";
import Faq from "components/Faq";
import Loader from "components/Loader";

import BackArrow from "assets/images/BackArrow.svg";
import ProjectImage from "assets/images/who-are-we.jpeg";
import uxServiceImg from "assets/images/ux-service.jpg";
import uiEngineeringImg from "assets/images/ui-engineering.jpg";
import videoServiceImg from "assets/images/video-service.jpg";

import Clients from "assets/images/clientl-logos.png";
import OurTeamImg from "assets/images/our-team.jpg";
import teamOuting from "assets/images/team-outings.jpg";
import ServiceSection from "pageComponents/homepage/ServiceSection";

const SERVICES = [
  {
    key: 1,
    className: "",
    category: "menu",
    cardTitle: "ux design",
    bgColor: "",
    BackgroundImageCareer: uxServiceImg,
    cardInfoText: `From user research to the final product delivery, we make sure that your vision comes to life just as you had envisioned it to be.`,
    link: "UxService",
  },
  {
    key: 2,
    className: "",
    category: "menu",
    cardTitle: "ui engineering",
    bgColor: "",
    BackgroundImageCareer: uiEngineeringImg,
    cardInfoText: `We promise to deliver a top-notch functional product with high levels of efficient design flows.`,
    link: "UiEngineering",
  },
  {
    key: 3,
    className: "",
    category: "menu",
    cardTitle: "motion design",
    bgColor: "",
    BackgroundImageCareer: videoServiceImg,
    cardInfoText: `Be it a new product or enhancing an existing product, we make that your audience understands your concept easily and meaningful visuals.`,
    link: "VideoService",
  },
];

const ENGAGEMENTCONTENT = [
  {
    key: 1,
    title: "Fixed-price",
    text: "This model works when the project specifications are detailed out using a specification document, efforts are projected based on the man-hour efforts and delivery milestones. This model is ideal when the client is clear about the requirements and there is not much rework.",
  },
  {
    key: 2,
    title: "Hire a Team (blended billing)",
    text: "This is a blended model, clients can hire our team for design and UI engineering tasks. This model fits you when you have a short term project like 3-months onwards. There will be a dedicated Account manager who will be the single point of interaction.",
  },
  {
    key: 3,
    title: "Resource Augmentation",
    text: "Handpicked resources made available to work with the client team for a designated project period. Get relieved of the pain of going through the hiring process and managing the HR.",
  },
];

const FAQ = [
  {
    key: 1,
    faqQue: "Why should a business spend time and effort on UX Design?",
    faqAns:
      "A. Today user experience design can make or break your business. Amazon allocated more funds for UX compared to marketing expenditure. In many ways, UX is directly linked to growth and organization are convinced by the tangible results.",
  },
  {
    key: 2,
    faqQue: "Do you undertake Digital Transformation projects?",
    faqAns:
      "A.  In every digital transformation project, the design will be a crucial factor. Our team will spend time to understand the digital landscape in your organization and help architect a design system defining all the design artifacts with UI components, style specifications that are scalable across the platforms.",
  },
  {
    key: 3,
    faqQue: "Will a remote design team be effective?",
    faqAns:
      "A. We have successfully delivered global projects with a team working across various geographical locations. We constantly keep in touch with team members over Skype & Email with regular status updates. If required we use screen sharing sessions to explain the concepts and design directions better.",
  },
  {
    key: 4,
    faqQue: "After re-engineering of the product can we do Experience Design?",
    faqAns:
      "A. So without going through the typical design process, re-engineered products may not give the right experience & UX as it may have to be done around the limitations of implementation.",
  },
  {
    key: 5,
    faqQue:
      "Can we get help only with Prototyping and UI engineering services?",
    faqAns:
      "A. Yes, we can provide you just the Information Architecture, Wireframes, Click through prototype design, and UI Implementation ( Html, Rect JS, Angular JS..) following the best practices in web and mobile responsive page rendering.",
  },
  {
    key: 6,
    faqQue: "How can you support UX for Enterprise-grade applications?",
    faqAns:
      "A. Our key expertise is in UX Design for Enterprise applications. We have done Ux and UI customization for Online banking, redesigned share trading platforms on the web and mobile platforms to name a few.",
  },
  {
    key: 7,
    faqQue:
      "What is the difference between a Mobile App UX & Mobile responsive design?",
    faqAns:
      "A. Native apps take full advantage of a mobile device's features(music app,photo-related app), the responsive design remains a viable option in many cases. HTML5 responsive app detects the screen resolution and fits the device viewports. Due to ease of implementation and cost reduction, a responsive approach is taken by a few of our clients compared to a native app.",
  },
];

export default withRouter(
  class AboutUs extends Component {
    constructor() {
      super();
      this.state = {
        isMouseInside: false,
        teams: [],
        error: null,
        loading: true,
      };
      this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount = async () => {
      try {
        const response = await axios.get(baseUrl + "/teams");
        this.setState({ teams: response.data });
        // console.log(response.data);

        this.setState({ loading: false });
      } catch (error) {
        this.setState({ error });
      }
    };

    mouseEnter = () => {
      this.setState({ isMouseInside: true });
    };
    mouseLeave = () => {
      this.setState({ isMouseInside: false });
    };

    handleBack = () => {
      this.props.router.back();
    };

    render() {
      return (
        <div>
          <Head>
            <title>About Us | Best UI/UX design company in India</title>
            <meta
              name="description"
              content="Best UI/UX design company in Bangalore, with 15years of experience in creating designs that have touched people's lives, thus enabling business success"
            />
            <meta
              name="keywords"
              content="Design experience company,digital experience, design consultants, design agency, design company"
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
                  <h1 className="main-title animated fadeIn">about us</h1>
                  <h2 className="sub-title main-sub-title animated fadeIn">
                    A passionate design team for tomorrow’s business success
                  </h2>
                  {/* <div className="tags animated fadeIn delay-2s">
              <ul>
                <li>info@neointeraction.com</li>
              </ul>
            </div> */}
                  <ReactWOW animation="fadeIn" delay="0s" offset={-200}>
                    <div>
                      <ImageVideoText
                        video={false}
                        ProjectVideo=""
                        componentOrientation="image-left"
                        ProjectImage={ProjectImage}
                        titleText="Who are we?"
                        contentText={
                          <div>
                            <p>
                              Neointeraction User Experience Design team
                              consults with clients to design SIMPLE and
                              MEANINGFUL digital experiences. Our team with 15
                              yrs of domain agnostic design experience can bring
                              great value addition to your business.
                            </p>
                            <ul className="solution-list">
                              <li>Designs with measurable ROI</li>
                              <li>Team with 15 yrs of Industry Experience</li>
                              <li>Design Thinking is our Gene factor</li>
                              <li>Focused on functional designs</li>
                              <li>Provides end to end design services</li>
                              <li>Business friendly engaging models</li>
                              <li>Efficient Project management</li>
                            </ul>
                          </div>
                        }
                      />
                    </div>
                  </ReactWOW>
                  <ReactWOW animation="fadeIn" offset={-200}>
                    <div className="section-padding">
                      <div className="container">
                        <SectionTitle title="Our Services" />
                        {/* <div className="row p-cards">
                          {[...SERVICES].map((service) => (
                            <div
                              className="col-md-4 card-margin-bottom font-sm"
                              key={service.key}
                            >
                              <Link href={`/${service.link}`}>
                                <div className="link">
                                  <CardTileMenuImage
                                    className={service.className}
                                    category={service.category}
                                    cardTitle={service.cardTitle}
                                    bgColor={service.bgColor}
                                    BackgroundImageCareer={
                                      service.BackgroundImageCareer
                                    }
                                    cardInfoText={service.cardInfoText}
                                  />
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div> */}
                        <ServiceSection inner />
                      </div>
                    </div>
                  </ReactWOW>
                  <ReactWOW animation="fadeIn" offset={-200}>
                    <div className="section-padding">
                      <div className="container">
                        <SectionTitle
                          title="The Engagement model"
                          subtitle="Focusing on your core business, some of the below models may suit well for short term and long term project goals. Our team is familiar with Agile & Lean methods of delivery."
                        />
                        <div className="row p-cards">
                          {[...ENGAGEMENTCONTENT].map((engage) => (
                            <div
                              className="col-md-4 card-margin-bottom"
                              key={engage.key}
                            >
                              <ModalCard
                                title={engage.title}
                                text={engage.text}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ReactWOW>
                  <ReactWOW animation="fadeIn" offset={-200}>
                    <div className="section-padding">
                      <div className="container">
                        <SectionTitle title="Our clients" />
                        <div className="img-sprite client-logo-imgs">
                          <img src={Clients} alt="clients_img" />
                        </div>
                      </div>
                    </div>
                  </ReactWOW>
                  <ReactWOW animation="fadeIn" offset={-200}>
                    <div>
                      <ImageVideoText
                        video={false}
                        ProjectVideo=""
                        componentOrientation="image-left"
                        grid1="6"
                        grid2="6"
                        ProjectImage={OurTeamImg}
                        titleText="Our Team"
                        contentText={
                          <div>
                            <p>
                              Neointeration studio was founded in 2005, under
                              the vision of the chief designer and founder, Sam
                              Thomas - a post-graduate in Visual Communication
                              Design from Indian Institute of Technology Bombay
                              [ www.idc.iitb.ac.in ], INDIA.
                            </p>
                            <p>
                              He had been with Verizon wireless as an Experience
                              designer during the early years of his career. He
                              also holds a bachelor’s degree in Architecture [B
                              Arch ]. With 20-years of design experience at
                              Neointraction, he is instrumental in positioning
                              the company as a customer-centric Experience
                              design firm working with some of the best
                              professionals in the industry.
                            </p>
                          </div>
                        }
                      />
                      <div>
                        <div className="row p-cards">
                          {this.state.teams
                            .sort((a, b) => a.id - b.id)
                            .map((team) => (
                              <div
                                className="col-md-4 card-margin-bottom font-sm"
                                key={team.key}
                              >
                                <CardTileTeam
                                  category="menu"
                                  cardTitle={team.name}
                                  designation={team.designation}
                                  BackgroundImageCareer={team.profileImg?.url}
                                  cardInfoText={team.description}
                                  linkedIn={team.linkedIn}
                                  dribble={team.dribble}
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </ReactWOW>
                </div>
                <ReactWOW animation="fadeIn" offset={-200}>
                  <div className="team-banner">
                    <img src={teamOuting} alt="teamOuting" />
                  </div>
                </ReactWOW>
                <ReactWOW animation="fadeIn" offset={-200}>
                  <div className="career-faq-section">
                    <div className="container">
                      <SectionTitle title="FAQ’s" />
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
                <ReactWOW animation="fadeIn" offset={-200}>
                  <div className="contact-section no-slider mb-0">
                    <div className="container">
                      <SectionTitle
                        title="Interested in joining our team?"
                        subtitle="We’re always open to meet talented & empathetic minds with passion for great design."
                      />
                      <Link href="/Career">
                        <button className="custom-btn margin-top">
                          View Opening
                        </button>
                      </Link>
                    </div>
                  </div>
                </ReactWOW>
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
                                      pathname: `/Blog/${item.blogTitle
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
                                        backgroundImages={
                                          item.blogCardImage.url
                                        }
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
              </div>
            </div>
          )}
        </div>
      );
    }
  }
);
