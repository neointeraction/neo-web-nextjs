import Chat from "components/Chat";

import FooterLanding from "components/FooterLanding";

import HeaderLanding from "components/HeaderLanding";
import HeaderLandingNew from "components/HeaderLandingNew";
import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";

function LandingLayout({ children }) {
  const [width, setWidth] = useState(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowSizeChange);
  }, []);

  return (
    <div>
      <div className="de-landing-layout-container">
        {width === 0 ? null : width <= 768 ? (
          <HeaderLanding upfront={width <= 768 ? false : true} />
        ) : width >= 769 ? (
          <HeaderLandingNew />
        ) : null}

        {children}
      </div>

      <FooterLanding />
      <Chat phoneNumber="9513338744" />

      <Helmet>
        <script src="../../assets/js/payment-conversion.js" />
        <script src="../../assets/js/meta-pixel.js" />
      </Helmet>
    </div>
  );
}

export default LandingLayout;
