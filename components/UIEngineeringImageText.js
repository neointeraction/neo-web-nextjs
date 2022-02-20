import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";



import ImageVideoText from "../components/ImageVideoText";
import UXImg from "../images/ui-engineering.jpg";







function UIEngineeringImageText() {
    return (

<div>
              <h2 className="sub-title animated fadeIn text-center">UI Engineering</h2>
              <ReactWOW animation="fadeIn" delay="0s" offset={-200}>
                <div>
                  <ImageVideoText
                    video={false}
                    ProjectVideo=""
                    componentOrientation="image-left"
                    ProjectImage={UXImg}
                    titleText="Pixel to Code"
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
                          <a
                            className="link-btn-map pl-0"
                            href="/UiEngineering#eng-modal"
                          >
                            Engagement Model
                          </a>
                          .
                        </p>
                      </div>
                    }
                  />
                </div>
              </ReactWOW>







</div>

    )
}

export default UIEngineeringImageText