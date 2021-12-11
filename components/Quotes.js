import React, { Component } from "react";
// import "../css/main.css";

export default class Quotes extends Component {
  render() {
    const { quoteText } = this.props;
    return (
      <div className="quote-section">
        <div className="container">
          <h3 className="quote-text">{quoteText}</h3>
        </div>
      </div>
    );
  }
}
