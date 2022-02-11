import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
// import Head from "next/head";
// import { DataContext } from "../context/DataContext";
// import ReactModal from "react-modal";
import AnchorLink from "react-anchor-link-smooth-scroll";

// import { withRouter } from "next/router";

import ImageVideoText from "../components/ImageVideoText";
// import SectionTitle from "../components/SectionTitle";
// import ModalCard from "../components/ModalCard";
// import CardTile from "../components/CardTile";

// import BackArrow from "../images/BackArrow.svg";
import UXImg from "../images/ux-service.jpg";


function UXDesignImageText() {
    
    return (
        <div>
        <h2 className="sub-title animated fadeIn text-center">UX Design</h2>
        <ReactWOW animation="fadeIn" delay="0s" offset={-200}>
                <div>
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





        </div>
        
    );
  }
 
  export default UXDesignImageText
