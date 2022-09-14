import React, { Component } from "react";
import Link from "next/link";
// import "../css/main.css";
import axios from "axios";
import { baseUrl } from "../globalConfig";
import ReactWOW from "react-wow";

import CardTile from "./CardTile";
import Loader from "components/Loader";
import { DataContext } from "context/DataContext";

import Close from "assets/images/Close.svg";

export default class FilterCardProjects extends Component {
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
    return (
      <DataContext.Consumer>
        {(context) => (
          <div>
            {this.state.loading ? (
              <Loader />
            ) : (
              <div className="project-mb-spacing">
                <div className="filter-btn-group animated fadeIn mob-hide ">
                  <button
                    className="filter-btn"
                    onClick={() => {
                      this.setState({
                        filter: undefined,
                      });
                    }}
                  >
                    <span>All</span>
                  </button>
                  {this.state.projectCategories.map((item) => {
                    return (
                      <div className="btn-relative" key={item.id}>
                        {item.categoryName !== "menu" && (
                          <button
                            className={`filter-btn ${
                              item.categoryName === this.state.filter
                                ? "active"
                                : "inactive"
                            }`}
                            onClick={() => {
                              this.setState(
                                {
                                  filter: item.categoryName,
                                },
                                console.log(this.state.filter)
                              );
                            }}
                          >
                            <span className="colorLabel">
                              {item.categoryName}
                            </span>
                          </button>
                        )}
                        {item.categoryName === this.state.filter && (
                          <button
                            className="deselect-filter"
                            onClick={() => {
                              this.setState({
                                filter: undefined,
                              });
                            }}
                          >
                            <img src={Close} alt="Close" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="overlay-card-gallery animated fadeIn ">
                  {[...context.state.projects]
                    .filter((tag) => {
                      if (tag.hidden) return false;
                      return true;
                    })
                    .filter((name) => {
                      if (!this.state.filter) return true;
                      else
                        return name.categories
                          .map((li) => li.categoryName)
                          .includes(`${this.state.filter}`);
                    })
                    .map((cards, i) => (
                      <ReactWOW
                        animation="bounceInCard"
                        offset={0}
                        key={cards.id}
                      >
                        <div className={`card-main-container card-${cards.id}`}>
                          <Link
                            href={{
                              pathname: `/Projects/${cards.cardTitle
                                .replace(
                                  /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                  ""
                                )
                                .replace(/ /g, "-")}`,
                            }}
                          >
                            <div className="link">
                              <CardTile
                                // key={cards.id}
                                className="project-card-n"
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
                      </ReactWOW>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </DataContext.Consumer>
    );
  }
}
