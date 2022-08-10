import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";

import ImageVideoText from "components/ImageVideoText";
import UXImg from "assets/images/ux-service.jpg";

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
                  delivery process which enables us to work closely with client
                  stakeholders and meet their business goals. With a Digital
                  Transformation, every business goes through a change in their
                  business model, branding, technology stack etc. Design plays a
                  major role in bringing the right direction to the business and
                  to their end-users. Our team evaluates the digital landscape
                  from a design perspective and defines the design system to
                  bring a unified experience.
                </p>
                <p>
                  To know more about how we deliver great experiences, take a
                  look at our{" "}
                  <a className="link-btn-map pl-0" href="/UxService#eng-modal">
                    Engagement Model
                  </a>
                </p>
              </div>
            }
          />
        </div>
      </ReactWOW>
    </div>
  );
}

export default UXDesignImageText;
