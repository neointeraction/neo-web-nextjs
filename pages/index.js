import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import HomeBanner from "pageComponents/homepage/HomeBanner";
import ProjectSlider from "pageComponents/homepage/ProjectSlider";

import SEOImg from "assets/images/neo-web-img.jpeg";
import ServiceSection from "pageComponents/homepage/ServiceSection";
import Clients from "pageComponents/homepage/Clients";
import HomeTeam from "pageComponents/homepage/HomeTeam";
import BlogSection from "pageComponents/homepage/BlogSection";
import ContactSection from "pageComponents/homepage/ContactSection";
import HomeBannerSlider from "pageComponents/homepage/HomeBannerSlider";

const Home = () => {
  const router = useRouter();

  // useEffect(() => {
  //   () => useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  // }, []);

  return (
    <>
      <Head>
        <title>
          Best UI/UX Design Services Agency in India, USA - Neointeraction
          Design
        </title>
        <meta
          name="description"
          content="Global Enterprise clients have benefited from Neointeraction's Ux Design services for Banking, Fintech, and Share Trading platforms by increasing customer satisfaction and business success."
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
        <link rel="canonical" href="https://www.neointeraction.com/" />
      </Head>
      <div className="section-container body-page">
        <div className="container-fluid">
          {/* section-home */}
          <section className="banner-section-home">
            {/* <HomeBanner /> */}
            <HomeBannerSlider />
          </section>
          <section className="section section-project">
            <ProjectSlider />
          </section>
          <section className="section">
            <ServiceSection />
          </section>
          <section className="section">
            <Clients />
          </section>
          <section className="section">
            <HomeTeam />
          </section>
          <section className="section">
            <BlogSection />
          </section>
          <section className="section">
            <ContactSection />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
