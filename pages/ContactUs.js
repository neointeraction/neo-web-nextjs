import React, { Component } from "react";

import ReactWOW from "react-wow";
import Head from "next/head";
import { loadReCaptcha } from "react-recaptcha-google";

import { withRouter } from "next/router";

import FormContact from "../components/FormContact";
import SectionTitle from "../components/SectionTitle";
import AddressCard from "../components/AddressCard";

import BackArrow from "../images/BackArrow.svg";
import img1 from "../images/Bangalore.png";
import img2 from "../images/Chennai.png";
import img3 from "../images/Cochin.png";

// import EmailText from "../images/email-text.png";
// import PhoneText from "../images/mob-text.png";

const LOCATIONS = [
  {
    key: 1,
    imgBlock: img1,
    location: "Bangalore",
    mailText: "info@neointeraction.com",
    phoneText: "+91 944-9565-744",
    locationText:
      "Neointeraction Designs, # M-98, 2nd Floor, LIC housing colony, HAL 3rd stage, Jeevan Bhima Nagar, Bangalore - 560 075",
    googleMapLink: "https://goo.gl/maps/5WW3GofFRY7CornF9",
  },
  {
    key: 2,
    imgBlock: img2,
    location: "Chennai",
    mailText: "info@neointeraction.com",
    phoneText: "+91 944-9565-744",
    locationText:
      "Subham Complex, 2A, T-45, A & B, 7th Avenue (Velankanni Church Rd.) Besant Nagar, Chennai, Tamil Nadu - 600090",
    googleMapLink: "https://goo.gl/maps/zdvvR77jFdsgE2dJ7",
  },
  {
    key: 3,
    imgBlock: img3,
    location: "Cochin",
    mailText: "info@neointeraction.com",
    phoneText: "+91 944-9565-744",
    locationText:
      "DD Vyapar Bhavan, 307, 4th Floor, K. P. Vallon Rd., Kadavanthra, Kochi – 682 020",
    googleMapLink: "https://goo.gl/maps/2Cjeo2XotWfJJgc46",
  },
];

export default withRouter(
  class ContactUs extends Component {
    constructor() {
      super();
      this.state = {
        isMouseInside: false,
      };
      this.handleBack = this.handleBack.bind(this);
    }

    mouseEnter = () => {
      this.setState({ isMouseInside: true });
    };
    mouseLeave = () => {
      this.setState({ isMouseInside: false });
    };

    componentDidMount() {
      loadReCaptcha();
    }
    handleBack() {
      this.props.router.back();
    }

    render() {
      return (
        <div>
          <Head>
            <title>Contact Us | Neointeraction </title>
            <meta
              name="description"
              content="Contact us at (+91 944-9565-744) or info@neointeraction.com to hire top UI/UX designers. We provide creative solutions for your design queries."
            />
            <meta
              name="keywords"
              content="design services, design project, design experiences, UI/UX design, Motion design, creative design, design agency, Video designing"
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
              <h1 className="main-title animated fadeIn">contact us</h1>
              <h2 className="sub-title main-sub-title animated fadeIn">
                Reach out to us by filling up the form below
              </h2>
              {/* <div className="tags animated fadeIn delay-2s">
              <ul>
                <li>
                  <img src={EmailText} alt="EmailText" />
                </li>
                <li>
                  <img src={PhoneText} alt="PhoneText" />
                </li>
              </ul>
            </div> */}
              <ReactWOW animation="fadeIn" delay="0s" offset={-200}>
                <div className="form-contact-block">
                  <FormContact />
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeIn" offset={-200}>
                <div className="location-block">
                  <SectionTitle title="Our Offices" />
                  <div className="row">
                    {[...LOCATIONS].map((locations) => (
                      <div className="col-md-4" key={locations.key}>
                        <div className="faq-block">
                          <AddressCard
                            key={locations.key}
                            imgBlock={locations.imgBlock}
                            location={locations.location}
                            mailText={locations.mailText}
                            phoneText={locations.phoneText}
                            locationText={locations.locationText}
                            googleMapLink={locations.googleMapLink}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      );
    }
  }
);
