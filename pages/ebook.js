import React from "react";
import Head from "next/head";
import ReactWOW from "react-wow";
import ReactModal from "react-modal";

import Quotes from "../components/Quotes";
import ImageVideoText from "../components/ImageVideoText";
import SectionTitle from "../components/SectionTitle";
import ProcessCard from "../components/ProcessCard";
import GetQuoteModal from "../components/GetQuoteModal";

import Banner from "../images/ebookBanner.jpg";
import EbookImg from "../images/ebookImgTab.jpg";
import Tablet1 from "../images/tablet1.png";
import Tablet2 from "../images/tablet2.png";
import Tablet3 from "../images/tablet3.png";
import { useState } from "react";

const Ebook = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
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
        <meta
          name="keywords"
          content="UX design,UI engineering, Motion design, UX services, UI services, UX projects, UI projects, Video services, design team, design agency"
        />
        {/* <script
            async
            src="https://js.convertflow.co/production/websites/35164.js"
          ></script> */}
      </Head>
      <div className="container">
        <div className="home-content">
          <h1 className="main-title animated fadeIn delay-0.5s">
            Ebook: Establishing an agile UX design process
          </h1>
          <h2 className="sub-title main-sub-title animated fadeIn">
            An ebook which helps you to simplify your UX process
          </h2>
          <ReactWOW animation="fadeIn" offset={0}>
            <div className="grab-button">
              <button className="custom-btn inactive">
                Grab your E Book Copy Now
              </button>
            </div>
          </ReactWOW>
        </div>
      </div>
      <div className="ebook-banner">
        <ReactWOW animation="fadeIn" offset={0}>
          <div className="banner-content">
            <h1 className="ebook-banner-title">
              Delve into <span>Agile UX</span> <br />
              process with our E-Book
            </h1>
            <button className="custom-btn inactive">Buy now @ ₹199</button>
          </div>
        </ReactWOW>
      </div>
      <div className="container">
        <div className="home-content">
          <div>
            <ReactWOW animation="fadeIn" offset={-200}>
              <div>
                <Quotes
                  quoteText="We’re experimenting with new methods and techniques,
                      we’re seeing lots of crazy ideas, and we’re seeing culture
                      being shaped by the very things we’re designing."
                />
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" delay="0s" offset={0}>
              <div>
                <ImageVideoText
                  video={false}
                  ProjectVideo=""
                  componentOrientation="image-left"
                  ProjectImage={EbookImg}
                  titleText="Explore our topics"
                  contentText={
                    <div>
                      <p>
                        Create great user experience by following the agile ux
                        design process.
                      </p>
                      <ul className="solution-list mb-3">
                        <li>Six steps of Agile Ux</li>
                        <li>How business should view user experience?</li>
                        <li>
                          Create great user experience by following the agile ux
                          design
                        </li>
                      </ul>
                      <button class="custom-btn btn-text card-btn">
                        Buy now @ ₹199
                      </button>
                    </div>
                  }
                />
              </div>
            </ReactWOW>
            <div className="section-padding">
              <ReactWOW animation="fadeIn" delay="0s" offset={0}>
                <div className="text-center">
                  <SectionTitle
                    title="What’s inside the book"
                    subtitle="Explore different aspects of agile ux design"
                    center
                  />
                </div>
                <div className="row p-cards">
                  <div className="col-md-4">
                    <div className="custom-process-card">
                      <ProcessCard
                        className="process-outcom-card"
                        backgroundImages={Tablet1}
                        infoText="It is iterative and evolving in nature.  It enables teams to make incremental improvements to the product with each iteration."
                        cardTitle="Agile UX: Introduction"
                        noBg
                        customClass={"Tablet1"}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="custom-process-card">
                      <ProcessCard
                        className="process-outcom-card"
                        backgroundImages={Tablet2}
                        infoText="Each stage involves relevant stakeholders in your organization that take part in the process to make your products highly efficient and usable."
                        cardTitle="Agile UX: Implementation"
                        noBg
                        customClass={"Tablet2"}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="custom-process-card">
                      <ProcessCard
                        className="process-outcom-card"
                        backgroundImages={Tablet3}
                        infoText="Frictionless, satisfying user experiences are important for businesses, as they help boost customer satisfaction by providing enhanced accessibility."
                        cardTitle="User Experience & Business"
                        noBg
                        customClass={"Tablet3"}
                      />
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </div>

            <ReactWOW animation="fadeIn" delay="0s" offset={0}>
              <div>
                <ImageVideoText
                  video={false}
                  ProjectVideo=""
                  componentOrientation="image-left"
                  ProjectImage={EbookImg}
                  titleText="Subscribe to get preview"
                  contentText={
                    <div>
                      <p>
                        Join our tribe to get some awesome freebies and insights
                        into the world of design and our design process.
                      </p>
                      <div className="form">
                        <div className="input-custom-field">
                          <input
                            className="input-custom"
                            type="text"
                            placeholder="Name"
                            name="name"
                            // onChange={this.handleChange}
                            // value={this.state.name}
                          />

                          <span className="focus-border">
                            <i></i>
                          </span>
                        </div>
                        {/* {this.validator.message(
                          "Name",
                          this.state.name,
                          "required|alpha"
                        )} */}
                        <div className="row ">
                          <div className="col-md-12">
                            <div className="input-custom-field">
                              <input
                                className="input-custom"
                                type="text"
                                placeholder="Email"
                                name="email"
                                //onChange={this.handleChange}
                                //value={this.state.email}
                              />
                              <span className="focus-border">
                                <i></i>
                              </span>
                            </div>
                            {/* {this.validator.message(
                              "email",
                              this.state.email,
                              "required|email"
                            )} */}
                          </div>
                        </div>
                      </div>
                      <button
                        className="custom-btn form-submit loader-btns"
                        //onClick={this.submitEmail}
                      >
                        {/* {this.state.submitStatus ? (
                          <>
                            <span>Submiting</span>
                            <div class="progress-bar">
                              <div class="circle border"></div>
                            </div>
                          </>
                        ) : ( */}
                        <span>Submit</span>
                        {/* )} */}
                      </button>
                    </div>
                  }
                />
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeIn" offset={-200}>
              <div className="contact-section mb-0">
                <div className="container">
                  <SectionTitle
                    title="Do you want to drop us message ?"
                    subtitle="Want to have a talk with the team."
                  />
                  <button className="custom-btn" onClick={handleOpenModal}>
                    Contact us
                  </button>
                </div>
              </div>
            </ReactWOW>
            <ReactModal
              isOpen={open}
              contentLabel="career"
              onRequestClose={handleCloseModal}
              className="career-modal animated zoomIn"
              overlayClassName="Overlay"
            >
              <GetQuoteModal
                formtitle="Contact us"
                togglePopover={handleCloseModal}
              />
            </ReactModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebook;
