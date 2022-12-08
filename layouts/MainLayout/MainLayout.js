import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import HeaderNew from "components/HeaderNew";

function MainLayout({ children }) {
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
      {width <= 768 ? (
        <Header upfront={width <= 768 ? false : true} />
      ) : width >= 768 ? (
        <HeaderNew />
      ) : null}

      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
