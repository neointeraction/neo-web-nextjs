import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@brainhubeu/react-carousel/lib/style.css";

import Clientlogo1 from "../images/icici-logo.jpg";
import Clientlogo2 from "../images/Geojit-logo.jpg";
import Clientlogo3 from "../images/bnp-paribas-logo.jpg";
import Clientlogo4 from "../images/cbd-logo.jpg";
import Clientlogo5 from "../images/qudos-bank-logo.jpg";
import Clientlogo6 from "../images/brac-logo.jpg";
import Clientlogo7 from "../images/cbq-logo.jpg";
import Clientlogo8 from "../images/clayfin-logo.jpg";

import Clientlogo10 from "../images/claysol-logo.jpg";
import Clientlogo11 from "../images/coorg-logo.jpg";
import Clientlogo12 from "../images/drumbuffer-logo.jpg";
import Clientlogo13 from "../images/funding-logo.jpg";
import Clientlogo14 from "../images/Inatech-logo.jpg";
import Clientlogo15 from "../images/inkmagik-logo.jpg";
import Clientlogo16 from "../images/intellithink-logo.jpg";
import Clientlogo17 from "../images/intertrust-logo.jpg";
import Clientlogo18 from "../images/lifeSignal-logo.jpg";
import Clientlogo19 from "../images/mobiCom-Logo.jpg";
import Clientlogo20 from "../images/traveloka-logo.jpg";
import Clientlogo21 from "../images/vidal-logo.jpg";
import Clientlogo22 from "../images/wipro-logo.jpg";
import Clientlogo23 from "../images/yokagawa-logo.jpg";

const clients = [
  {
    image: Clientlogo1,
    name: "icici-logo",
  },
  {
    image: Clientlogo2,
    name: "Geojit-logo",
  },
  {
    image: Clientlogo3,
    name: "bnp-paribas-logo",
  },
  {
    image: Clientlogo4,
    name: "cbd-logo",
  },
  {
    image: Clientlogo5,
    name: "qudos-logo",
  },
  {
    image: Clientlogo6,
    name: "brac-logo",
  },
  {
    image: Clientlogo7,
    name: "cbq-logo",
  },
  {
    image: Clientlogo8,
    name: "clayfin-logo",
  },

  {
    image: Clientlogo10,
    name: "claysol-logo",
  },
  {
    image: Clientlogo11,
    name: "coorg-logo",
  },
  {
    image: Clientlogo12,
    name: "drumbuffe-logo",
  },
  {
    image: Clientlogo13,
    name: "funding-logo",
  },
  {
    image: Clientlogo14,
    name: "Inatech-logo",
  },
  {
    image: Clientlogo15,
    name: "inkmagik-logo",
  },
  {
    image: Clientlogo16,
    name: "intellithink-logo",
  },
  {
    image: Clientlogo17,
    name: "intertrust-logo",
  },
  {
    image: Clientlogo18,
    name: "LifeSignal-logo",
  },
  {
    image: Clientlogo19,
    name: "MobiCom-logo",
  },
  {
    image: Clientlogo20,
    name: "traveloka-logo",
  },
  {
    image: Clientlogo21,
    name: "vidal-logo",
  },
  {
    image: Clientlogo22,
    name: "wipro-logo",
  },
  {
    image: Clientlogo23,
    name: "yokagawa-logo",
  },
];

export default class ClientSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      initialSlide: 0,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1.5,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
          },
        },
      ],
    };

    return (
      <div>
        <h2 className="sub-title text-center"> Our Clients </h2>
        <Slider {...settings}>
          {clients.map((item) => (
            <div className="client-box">
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
