import React, { useState } from "react";

import DownArrow from "../assets/images/landing/down.svg";

const FAQAccordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div
            className={`accordion-header ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <span>{item.question}</span>
            <img
              src={index === activeIndex ? DownArrow : DownArrow}
              alt={index === activeIndex ? "Expanded" : "Collapsed"}
              className="chevron-icon"
            />
          </div>
          <div
            className={`accordion-content ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <div className="ac-block" dangerouslySetInnerHTML={{__html:item.answer}}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
