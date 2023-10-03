import React from "react";

const SpeakerCard = ({ image, name, designation, info, title }) => {
  return (
    <>
      <div className="speaker-card">
        <h4 className="speaker-title">{title}</h4>
        <div className="speaker-dp">
          <div className="sp-image">
            <img className="width-100" src={image} alt={"dp"} />
          </div>
          <div className="sp-title">
            <h1 className="sp-name">{name}</h1>
            <h1 className="sp-desigmation">{designation}</h1>
          </div>
        </div>
        <ul className="sp-info">
          {info.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SpeakerCard;
