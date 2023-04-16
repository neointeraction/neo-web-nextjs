import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import HeaderNew from "components/HeaderNew";
import Chat from "components/Chat";

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
      {width === 0 ? null : width <= 768 ? (
        <Header upfront={width <= 768 ? false : true} />
      ) : width >= 769 ? (
        <HeaderNew />
      ) : null}

      {children}
      <Footer />
      <Chat phoneNumber="9513338744" />
    </div>
  );
}

export default MainLayout;
