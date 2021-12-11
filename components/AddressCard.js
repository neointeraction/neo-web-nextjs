import React, { Component } from "react";
// import "../css/main.css";

import mail from "../images/addr-mail.svg";
import phone from "../images/addr-phone.svg";
import locationImg from "../images/addr-location.svg";

export default class AddressCard extends Component {
  render() {
    const {
      imgBlock,
      location,
      mailText,
      phoneText,
      locationText,
      googleMapLink,
    } = this.props;
    return (
      <div className="address-card">
        <div className="ac-img-area">
          <img src={imgBlock} alt="addr" />
        </div>
        <div className="address-block">
          <h3 className="location-title">{location}</h3>
          <ul className="location-details">
            {this.props.mailText ? (
              <li>
                <span>
                  <img src={mail} alt="mail" />
                </span>
                <span>{mailText}</span>
              </li>
            ) : null}
            {this.props.phoneText ? (
              <li>
                <span>
                  <img src={phone} alt="phone" />
                </span>
                <span>{phoneText}</span>
              </li>
            ) : null}
            {this.props.locationText ? (
              <li>
                <span>
                  <img src={locationImg} alt="location" />
                </span>
                <span>{locationText}</span>
              </li>
            ) : null}

            <li>
              <a
                className="link-btn link-btn-map"
                href={googleMapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
