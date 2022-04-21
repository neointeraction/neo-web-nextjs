import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import FilterCard from "../components/FilterCard";
import ClientSlider from "../components/ClientSlider";
import SEOImg from "../images/neo-web-img.jpeg";

class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Neointeracton | Best UI/UX design agency in India, USA</title>
          <meta
            name="description"
            content="Our 15 years of experience & expertise have made us one of the top 10 best UI/UX design & engineering agencies in India, USA focused on B2B applications. "
          />
          <meta
            name="keywords"
            content="UX design,UI engineering, Motion design, UX services, UI services, UX projects, UI projects, Video services, design team, design agency"
          />
          <meta property="og:image" content={SEOImg} />
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
            <div className="container margin-top">
              <ClientSlider />
          </div>
          </div>
        </div>
        {/* <div className="text-strip">
        <Link href={{ pathname: `/ContactUs/` }}> 
        <h5>Get a FREE UX audit for your product - limited period offer</h5>
        </Link>
        </div> */}
      </div>
    );
  }
}

export default Home;
