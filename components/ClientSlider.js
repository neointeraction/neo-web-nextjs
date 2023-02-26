import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@brainhubeu/react-carousel/lib/style.css";

import Clientlogo1 from "assets/images/icici-logo.jpg";
import Clientlogo2 from "assets/images/Geojit-logo.jpg";
import Clientlogo3 from "assets/images/bnp-paribas-logo.jpg";
import Clientlogo4 from "assets/images/cbd-logo.jpg";
import Clientlogo5 from "assets/images/qudos-bank-logo.jpg";
import Clientlogo6 from "assets/images/brac-logo.jpg";
import Clientlogo7 from "assets/images/cbq-logo.jpg";
import Clientlogo8 from "assets/images/clayfin-logo.jpg";

import Clientlogo10 from "assets/images/claysol-logo.jpg";
import Clientlogo11 from "assets/images/coorg-logo.jpg";
import Clientlogo13 from "assets/images/funding-logo.jpg";
import Clientlogo14 from "assets/images/Inatech-logo.jpg";
import Clientlogo16 from "assets/images/intellithink-logo.jpg";
import Clientlogo17 from "assets/images/intertrust-logo.jpg";
import Clientlogo18 from "assets/images/lifeSignal-logo.jpg";
import Clientlogo20 from "assets/images/traveloka-logo.jpg";
import Clientlogo21 from "assets/images/vidal-logo.jpg";
import Clientlogo22 from "assets/images/wipro-logo.jpg";
import Clientlogo23 from "assets/images/yokagawa-logo.jpg";

const clients = [
  {
    image: Clientlogo8,
    name: "clayfin",
  },

  {
    image: Clientlogo10,
    name: "claysol",
  },
  {
    image: Clientlogo11,
    name: "coorg-wildlife",
  },
  {
    image: Clientlogo13,
    name: "funding",
  },
  {
    image: Clientlogo14,
    name: "Inatech",
  },
  {
    image: Clientlogo16,
    name: "intellithink",
  },
  {
    image: Clientlogo17,
    name: "intertrust",
  },
  {
    image: Clientlogo1,
    name: "icici",
  },
  {
    image: Clientlogo2,
    name: "Geojit",
  },
  {
    image: Clientlogo3,
    name: "bnp-paribas",
  },
  {
    image: Clientlogo4,
    name: "commercial-bank",
  },
  {
    image: Clientlogo5,
    name: "qudos",
  },
  {
    image: Clientlogo6,
    name: "brac-bank",
  },
  {
    image: Clientlogo7,
    name: "cbq-logo",
  },
  {
    image: Clientlogo18,
    name: "LifeSignal",
  },
  {
    image: Clientlogo20,
    name: "traveloka",
  },
  {
    image: Clientlogo21,
    name: "vidal",
  },
  {
    image: Clientlogo22,
    name: "wipro",
  },
  {
    image: Clientlogo23,
    name: "yokagawa",
  },
];

export default class ClientSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      initialSlide: 0,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 1000,
            autoplaySpeed: 2000,
            initialSlide: 7,
          },
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 1000,
            autoplaySpeed: 2000,
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
