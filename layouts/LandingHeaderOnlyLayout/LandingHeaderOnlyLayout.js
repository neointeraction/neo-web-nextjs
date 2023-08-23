import React, { useState, useEffect } from "react";
import HeaderLanding from "components/HeaderLanding";
import HeaderLandingNew from "components/HeaderLandingNew";

function LandingHeaderOnlyLayout({ children }) {
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
      {width === 0 ? null : width <= 768 ? (
        <HeaderLanding upfront={width <= 768 ? false : true} />
      ) : width >= 769 ? (
        <HeaderLandingNew />
      ) : null}

      {children}
    </div>
  );
}

export default LandingHeaderOnlyLayout;
