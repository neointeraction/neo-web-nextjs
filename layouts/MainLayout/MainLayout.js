import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import HeaderNew from "components/HeaderNew";
import DesignWorkshopPromo from "components/DesignWorkshopPromo";
import Chat from "components/Chat";
import { Helmet } from "react-helmet";
import Head from "next/head";
import { useRouter } from "next/router";

function MainLayout({ children }) {
  const [width, setWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowSizeChange);
  }, []);

  useEffect(() => {
    if (router.pathname === "/" || router.pathname === "/career") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [router.pathname]);

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {isOpen && (router.pathname === "/" || router.pathname === "/career") && (
        <DesignWorkshopPromo
          isOpen={isOpen}
          handleIsOpen={() => setIsOpen(false)}
        />
      )}
      {width === 0 ? null : width <= 768 ? (
        <Header upfront={width <= 768 ? false : true} isOpen={isOpen} />
      ) : width >= 769 ? (
        <HeaderNew isOpen={isOpen} />
      ) : null}

      {children}
      <Footer />
      <Chat phoneNumber="9513338744" />
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-1067948097"
        ></script>
        <script src="../../assets/js/analytics.js" />
      </Helmet>
    </div>
  );
}

export default MainLayout;
