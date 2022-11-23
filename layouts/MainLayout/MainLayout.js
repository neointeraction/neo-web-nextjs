import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

function MainLayout({ children }) {
  const [width, setWidth] = useState();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <div>
      <Header upfront={isMobile ? false : true} />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
