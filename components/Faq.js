import React, { Component } from "react";
// import "../css/main.css";

export default class Faq extends Component {
  render() {
    const { id, faqQue, faqAns } = this.props;
    return (
      <div className="faq-section">
        <h4 className="faq-question">
          {id} {faqQue}
        </h4>
        <p className="faq-answer">{faqAns}</p>
      </div>
    );
  }
}
