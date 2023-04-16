import React from "react";

import WhatsappIcon from "assets/images/wapp.svg";

const Chat = ({ phoneNumber }) => {
  const handleChat = (number) => {
    const countryCode = "91"; // replace with your country code
    const phoneLink = `https://api.whatsapp.com/send?phone=${countryCode}${number}`;
    window.open(phoneLink, "_blank");
  };

  return (
    <div className="chat-container">
      <button
        onClick={() => handleChat(phoneNumber)}
        className="whatsapp-button"
      >
        <img src={WhatsappIcon} alt="icon" />
      </button>
    </div>
  );
};

export default Chat;
