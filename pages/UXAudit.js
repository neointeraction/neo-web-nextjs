import { React, useState } from "react";
import Head from "next/head";
import ReactWOW from "react-wow";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Script from "next/script";
import Link from "next/link";

// import FormContact from "components/FormContact";
import ClientSlider from "components/ClientSlider";
import ImageVideoText from "components/ImageVideoText";
import SectionTitle from "components/SectionTitle";
import Quotes from "components/Quotes";
import FilterCardProjectsSlider from "components/FilterCardProjectsSlider";
import FormContactUxAudit from "components/FormContactUxAudit";
import CardTileMenuImage from "components/CardTileMenuImage";

import uxAuditImg from "assets/images/uxaudit-one.jpg";
import uxServiceImg from "assets/images/ux-service.jpg";
import uiEngineeringImg from "assets/images/ui-engineering.jpg";
import videoServiceImg from "assets/images/video-service.jpg";
import BlogCardAd from "components/BlogCardAd";
import UXDesignImageText from "components/UXDesignImageText";
import UIEngineeringImageText from "components/UIEngineeringImageText";
import UXImg from "assets/images/ux-service.jpg";

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

const gcampaign = () => {
  const [active, setActive] = useState(false);

  // const handleClick = () => {
  //   setActive(true);
  // };
  // const handleCloseModal = () => {
  //   setOpen(false);
  // };
  return (
    <div>
      <Head>
        <title>
          Neointeracton | Creative UX/UI, Motion design and engineering agency
        </title>
        <meta
          name="description"
          content="Neointeraction is a design agency specialized in User experience (UX & UI) designing, engineering as well as motion design with 15 years of experience in B2B enterprise projects."
        />
        {/* <script
              async
              src="https://js.convertflow.co/production/websites/35164.js"
            ></script> */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-1067948097"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-1067948097');`,
          }}
        />
      </Head>

      <div className="container">
        <div className="home-content">
          <h1 className="main-title adPageTitle animated fadeIn delay-0.5s">
            Neointeraction Design - Reimagine your product
          </h1>
        </div>
      </div>
      <div className="uxaudit-banner">
        <ReactWOW animation="fadeIn" offset={0}>
          <div className="banner-content" id="formid">
            <FormContactUxAudit />
            {/* senduxaudit */}
          </div>
        </ReactWOW>
      </div>

      <div className="page-content body-page">
        <div className="container animated fadeIn">
          <ReactWOW animation="fadeInUp" delay="0s">
            <div>
              <ClientSlider />
            </div>
          </ReactWOW>

          <ReactWOW animation="fadeIn" delay="0s" offset={-200}>
            <div>
              <ImageVideoText
                video={false}
                ProjectVideo=""
                componentOrientation="image-left"
                ProjectImage={uxAuditImg}
                titleText="What is an UX audit?"
                contentText={
                  <div>
                    <p>
                      By mapping the user journey across your product we
                      identify problem areas and give actionable inputs to
                      improve retention of your customers helping them to
                      complete their user journey. This keeps your customers
                      satisfied and incentivises them to return again. This
                      directly translates to :
                    </p>
                    <ul className="solution-list">
                      <li>Improved customer retention</li>
                      <li>Return of investment</li>
                      <li>Increased sales</li>
                      <li>Reduced development costs</li>
                      <li>Higher conversion rate</li>
                      <li>Business friendly engaging models</li>
                      <li>Improved customer lifetime value</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </ReactWOW>

          {/* <ReactWOW animation="fadeIn" offset={-200}>
                    <div className="section-padding">
                      <div className="container">
                       
                        <h2 className="sub-title text-center">Our Services</h2>
                        <div className="row p-cards">
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
                        </div>
                      </div>
                    </div>
                  </ReactWOW> */}

          <div>
            <ReactWOW animation="fadeIn" delay="0s" offset={-200}>
              <div>
                <ImageVideoText
                  video={false}
                  ProjectVideo=""
                  componentOrientation="image-left"
                  ProjectImage={UXImg}
                  titleText="When to do an ux audit?"
                  contentText={
                    <div>
                      <p>
                        A UX audit can be done at any point in your product's
                        lifecycle to identify problems and improve business
                        performance.
                      </p>
                      <p>It is good to do a holistic audit :</p>
                      <ul className="solution-list">
                        <li>
                          If you want to know more about your users and grow
                          your business
                        </li>
                        <li>Redesign of an website application</li>
                        <li>New functionality</li>
                        <li>Reduced development costs</li>
                        <li>Validate new product design</li>
                        <li>Validate your minimum viable product</li>
                      </ul>
                    </div>
                  }
                />
              </div>
            </ReactWOW>

            {/* <UXDesignImageText />
            <UIEngineeringImageText /> */}
          </div>

          <ReactWOW animation="fadeIn" offset={-200}>
            <div>
              <Quotes
                quoteText="We were looking for a partner who would help bring our applications to the 21st century 
                  by using some of the latest technology,that's when we found Neointeraction."
              />
            </div>
          </ReactWOW>

          <div className="section-padding">
            <ReactWOW animation="fadeIn" offset={-200}>
              <FilterCardProjectsSlider />
            </ReactWOW>
          </div>

          <div className="section-padding">
            <h2 className="sub-title text-center">Client Testimonial</h2>
            <div className="testimonial-video p-cards">
              <div className="video-yt">
                <iframe
                  src={`https://www.youtube.com/embed/VIxYv8kylt0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            </div>
          </div>

          {/* <div className="section-padding">
          <FormContactAdLp />
          </div> */}

          <div className="section-padding">
            <BlogCardAd />
          </div>
          <ReactWOW animation="fadeIn" offset={-200}>
            <div className="contact-section no-slider mb-20">
              <div className="container">
                <SectionTitle
                  title="Contact US"
                  subtitle="Reach out to us for any queries"
                />
                <AnchorLink href="#formid">
                  <button className="custom-btn">Contact Us</button>
                </AnchorLink>
              </div>
            </div>
          </ReactWOW>
        </div>
      </div>
    </div>
  );
};

export default gcampaign;
