import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import HomeBanner from "../pageComponents/HomeBanner";
import ProjectSlider from "../pageComponents/ProjectSlider";

import SEOImg from "../images/neo-web-img.jpeg";
import ServiceSection from "../pageComponents/ServiceSection";
import Clients from "../pageComponents/Clients";

const Home = () => {
  const router = useRouter();

  // useEffect(() => {
  //   () => useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  // }, []);

  return (
    <>
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
      <div className="section-container">
        <div className="container-fluid">
          <section className="section-home">
            <HomeBanner />
          </section>
          <section className="section">
            <ProjectSlider />
          </section>
          <section className="section">
            <ServiceSection />
          </section>
          <section className="section">
            <Clients />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
