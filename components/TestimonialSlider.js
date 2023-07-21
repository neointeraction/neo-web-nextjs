import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@brainhubeu/react-carousel/lib/style.css";

import { testimonial } from "pages/design-workshop";

export default class TestimonialSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      initialSlide: 0,
      slidesToScroll: 1,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 1000,
      arrows: false,
    };

    return (
      <div style={{ height: "100%" }}>
        <Slider {...settings}>
          {testimonial.map((item) => (
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="testimonial-img-container">
                  <img className="" src={item.img} alt={"BannerSectionImage"} />
                </div>
                <h1 className="t-title">{item.name}</h1>
                <h1 className="t-quote">{item.quote}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
