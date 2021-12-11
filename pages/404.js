import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

export default class Custom404 extends Component {
  render() {
    return (
      <div className="container">
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
        </Head>
        <div className="home-content">
          <div className="bg-notfound">
            <div id="background"></div>
            <div className="notfound-info-block">
              <h1 className="notfound-title">404</h1>
              <h3 className="notfound-subtitle">Page not found !</h3>
            </div>
            <div className="container-404">
              <div className="ghost-copy">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
                <div className="four"></div>
              </div>
              <div className="ghost">
                <div className="face">
                  <div className="eye"></div>
                  <div className="eye-right"></div>
                  <div className="mouth"></div>
                </div>
              </div>
              <div className="shadow"></div>
            </div>
            <h4 className="notfound-subtext">
              Look like you're lost ! The page you are looking for is not
              available.
            </h4>
            <div className="go-to-home">
              <Link href="/Home">Go to Home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
