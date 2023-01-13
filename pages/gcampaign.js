import { React, useState } from "react";
import Head from "next/head";
import ReactWOW from "react-wow";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Script from "next/script";

// import FormContact from "components/FormContact";
import ClientSlider from "components/ClientSlider";
import ImageVideoText from "components/ImageVideoText";
import SectionTitle from "components/SectionTitle";
import Quotes from "components/Quotes";
import FilterCardProjectsSlider from "components/FilterCardProjectsSlider";
import FormContactAdLp from "components/FormContactAdLp";

import ProjectImage from "assets/images/who-are-we.jpeg";
import uxServiceImg from "assets/images/ux-service.jpg";
import uiEngineeringImg from "assets/images/ui-engineering.jpg";
import videoServiceImg from "assets/images/video-service.jpg";
import BlogCardAd from "components/BlogCardAd";
import UXDesignImageText from "components/UXDesignImageText";
import UIEngineeringImageText from "components/UIEngineeringImageText";

const SERVICES = [
  {
    key: 1,
    className: "",
    category: "menu",
    cardTitle: "ux design",
    bgColor: "",
    BackgroundImageCareer: uxServiceImg,
    cardInfoText: `From user research to the final product delivery, we make sure that your vision comes to life just as you had envisioned it to be.`,
    link: "ui-ux-design-developer-services-company-bangalore",
  },
  {
    key: 2,
    className: "",
    category: "menu",
    cardTitle: "ui engineering",
    bgColor: "",
    BackgroundImageCareer: uiEngineeringImg,
    cardInfoText: `We promise to deliver a top-notch functional product with high levels of efficient design flows.`,
    link: "ui-engineering-services-bangalore-india",
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
        <link rel="canonical" href="https://www.neointeraction.com/gcampaign" />
      </Head>

      <div className="container">
        <div className="home-content">
          <h1 className="main-title adPageTitle animated fadeIn delay-0.5s">
            Neointeraction Design - Enterprise Ux design partner.
          </h1>
        </div>
      </div>
      <div className="lpsecond-banner ">
        <ReactWOW animation="fadeIn" offset={0}>
          <div className="lp-banner-flex">
            <div className="lpbanner-video">
              <iframe
                width="600"
                height="400"
                src="https://www.youtube.com/embed/qmCMqpcNE0Q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <div className="banner-content" id="formid">
              <FormContactAdLp />
            </div>
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
                ProjectImage={ProjectImage}
                titleText="Who are we?"
                contentText={
                  <div>
                    <p>
                      Neointeraction User Experience Design team consults with
                      clients to design SIMPLE and MEANINGFUL digital
                      experiences. Our team with 15 yrs of domain agnostic
                      design experience can bring great value addition to your
                      business.
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
            {/* <h2 className="sub-title animated fadeIn text-center">Our Services</h2> */}
            {/* <div className="tags service-tags animated fadeIn">
                          <ul>
                            <li>
                              <button className="custom-btn" onClick={() => setActive(active)}>UX Design</button>
                            </li>
                            <li>
                              <Link href="/ui-engineering-services-bangalore-india">
                                <button className="custom-btn inactive" >
                                  UI Engineering
                                </button>
                              </Link>
                            </li>
                          </ul>
                       </div> */}

            <UXDesignImageText />
            <UIEngineeringImageText />
          </div>

          {/* <ReactWOW animation="fadeIn" offset={-200}>
            <div>
              <Quotes
                quoteText="We were looking for a partner who would help bring our applications to the 21st century 
                  by using some of the latest technology,that's when we found Neointeraction."
              />
            </div>
          </ReactWOW> */}
          <div className="container animated fadeIn">
            <ReactWOW animation="fadeIn" offset={-200}>
              <div className="blog-quote-box project-quote-box">
                <p className="b-quote-text">
                  We were looking for a partner who would help bring our
                  applications to the 21st century by using some of the latest
                  technology,that's when we found Neointeraction.
                </p>
              </div>
            </ReactWOW>
          </div>

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

          <div className="section-padding ">
            <BlogCardAd />
          </div>
          <ReactWOW animation="fadeIn" offset={-200}>
            <div className="contact-section no-slider mb-20 mb-spacing-landing">
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
