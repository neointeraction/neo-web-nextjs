import React, { Component } from "react";
import Link from "next/link";
// import "../css/main.css";
import axios from "axios";
import { baseUrl } from "../globalConfig";
import ReactWOW from "react-wow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@brainhubeu/react-carousel/lib/style.css";

import CardTile from "./CardTile";
import Loader from "../components/Loader";
import { DataContext } from "../context/DataContext";


import CarousalLeft from "../images/White_arrow_left.svg";
import CarousalRight from "../images/White_arrow_right.svg";
import Close from "../images/Close.svg";

export default class FilterCardProjectsSlider extends Component {
  constructor() {
    super();
    this.state = {
      filter: undefined,
      isVisible: false,
      projectCategories: [],
      loading: true,
    };
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get(baseUrl + "/categories");
      this.setState({ projectCategories: response.data });
      // console.log(response.data);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <img src={CarousalRight} alt="CarousalRight" />,
        prevArrow: <img src={CarousalLeft} alt="CarousalLeft" />,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };

    return (
     
      <DataContext.Consumer>
        {(context) => (
          <div>
            {this.state.loading ? (
              <Loader />
            ) : (
              <div>
             
                <div className="overlay-card-slider  animated fadeIn ">
                <Slider {...settings}>
                  {[...context.state.projects]
                    .map((cards, i) => (
                        <div className={`card-main-container card-${cards.id}`}>
                          <Link
                            href={{
                              pathname: `/Projects/${cards.id}`,
                              query: {
                                title: cards.cardTitle
                                  .replace(/(:|\s+)/g, "-")
                                  .toLowerCase(),
                              },
                            }}
                          >
                            <div className="link">
                              <CardTile
                                // key={cards.id}
                                className={cards.className}
                                category={cards.categories.map(
                                  (li) => li.categoryName
                                )}
                                cardTitle={cards.cardTitle}
                                backgroundImages={cards.cardImage.url}
                                cardInfoText={cards.cardInfoText}
                              />
                            </div>
                          </Link>
                        </div>
                    ))}
                   </Slider>
                </div>
                
              </div>
              
            )}
           
          </div>
        )}
      </DataContext.Consumer>
      
    );
  }
}