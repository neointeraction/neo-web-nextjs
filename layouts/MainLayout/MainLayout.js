import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

function MainLayout({ children }) {
  const [width, setWidth] = useState("");

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);

  return (
    <div>
      <Header upfront={width <= 768 ? false : true} />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
