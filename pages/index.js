import React, { Component } from "react";
import Head from "next/head";

import FilterCard from "../components/FilterCard";

class Home extends Component {
  render() {
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
              Designs that touches people's lives,
              <br />
              enables business success..
            </h1>
            <div>
              <FilterCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
