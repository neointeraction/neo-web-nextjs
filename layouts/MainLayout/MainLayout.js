import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

function MainLayout({ children }) {
  const [width, setWidth] = useState(1366);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
  }, [width]);

  return (
    <div>
      <Header upfront={width <= 768 ? false : true} />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
