import React, { Component } from "react";
import Link from "next/link";
// import "../css/main.css";
import { Flipper, Flipped } from "react-flip-toolkit";
import anime from "animejs/lib/anime.es.js";
// import ReactModal from "react-modal";

//TO ADD NEW CARDS GO TO THIS FILE
import MENU from "../json/MENUPROFILE";

import CardTile from "./CardTile";
import CardTileMenu from "./CardTileMenu";
import CardTileMenuImage from "./CardTileMenuImage";
import CardTileUpfront from "./CardTileUpfront";
import CardTileLinks from "./CardTileLinks";
import CardTileVideo from "./CardTileVideo";
import Popover from "./Popover";

import Close from "../images/Close.svg";

export default class FilterCardProfile extends Component {
  constructor() {
    super();
    this.state = {
      filter: undefined,
      isVisible: false,
    };
    this.onElementAppear = this.onElementAppear.bind(this);
    this.onElementExit = this.onElementExit.bind(this);
    this.togglePopover = this.togglePopover.bind(this);
  }

  onElementAppear = (el, index) => {
    anime({
      targets: el,
      opacity: [0, 1],
      delay: index * 20,
      duration: 150,
      easing: "easeOutSine",
    });
  };

  onElementExit = (el, index, removeElement) => {
    anime({
      targets: el,
      opacity: 0,
      duration: 150,
      complete: removeElement,
      delay: index * 20,
      easing: "easeOutSine",
    });
  };

  togglePopover() {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
    window.scroll({ top: 380, left: 0, behavior: "smooth" });
  }

  render() {
    const categoryList = [...new Set(MENU.map((item) => item.category))];

    return (
      <div>
        <Flipper
          flipKey={`${this.state.filter}-${this.state.sort}`}
          element="main"
        >
          <div className="filter-btn-group animated fadeIn delay-1s">
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
            {categoryList.map((id) => {
              return (
                <div className="btn-relative" key={id}>
                  {id !== "menu" && (
                    <button
                      className={`filter-btn ${
                        id === this.state.filter ? "active" : "inactive"
                      }`}
                      onClick={() => {
                        this.setState({
                          filter: id,
                        });
                      }}
                    >
                      <span className="colorLabel">{id}</span>
                    </button>
                  )}
                  {id === this.state.filter && (
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
          <div className="overlay-card-gallery animated fadeIn delay-2s">
            {[...MENU]
              .filter((d) => {
                if (!this.state.filter) return true;
                return d.category === this.state.filter;
              })
              .map((cards, i) => (
                <Flipped
                  flipId={`item-${cards.category}`}
                  onAppear={this.onElementAppear}
                  onExit={this.onElementExit}
                  key={`item-${cards.key}`}
                  delay={i * 3}
                >
                  <div className="card-main-container">
                    {cards.cardCategory === "menu" && (
                      <Link href={`/${cards.link}`}>
                        <CardTileMenu
                          className={cards.className}
                          category={cards.category}
                          cardTitle={cards.cardTitle}
                          bgColor={cards.bgColor}
                          BackgroundImageCareer={cards.BackgroundImageCareer}
                          infoText={cards.infoText}
                          email={cards.email}
                          phone={cards.phone}
                          img1={cards.img1}
                          img2={cards.img2}
                          img1L={cards.img1L}
                          img2L={cards.img2L}
                          cardInfoText={cards.cardInfoText}
                        />
                      </Link>
                    )}
                    {cards.cardCategory === "menuImage" && (
                      <Link href={`/${cards.link}`}>
                        <CardTileMenuImage
                          className={cards.className}
                          category={cards.category}
                          cardTitle={cards.cardTitle}
                          bgColor={cards.bgColor}
                          BackgroundImageCareer={cards.BackgroundImageCareer}
                          cardInfoText={cards.cardInfoText}
                        />
                      </Link>
                    )}
                    {cards.cardCategory === "menuLink" && (
                      <CardTileLinks
                        className={cards.className}
                        category={cards.category}
                        cardTitle={cards.cardTitle}
                        bgColor={cards.bgColor}
                        LinkOneName={cards.LinkOneName}
                        LinkTwoName={cards.LinkTwoName}
                        LinkThreeName={cards.LinkThreeName}
                        LinkOne={cards.LinkOne}
                      />
                    )}
                    {cards.cardCategory === "menuVideo" && (
                      <div onClick={this.togglePopover}>
                        <CardTileVideo
                          className={cards.className}
                          category={cards.category}
                          cardTitle={cards.cardTitle}
                          BackgroundImageVideo={cards.BackgroundImageVideo}
                        />
                      </div>
                    )}
                    {cards.cardCategory === "blog" && (
                      <CardTileUpfront
                        className={cards.className}
                        category={cards.category}
                        cardTitle={cards.cardTitle}
                        backgroundImages={cards.backgroundImages}
                        infoText={cards.infoText}
                        cardInfoText={cards.cardInfoText}
                        blogtag1={cards.blogtag1}
                        blogtag2={cards.blogtag2}
                        blogtag3={cards.blogtag3}
                      />
                    )}
                    {cards.cardCategory !== "menu" &&
                      cards.cardCategory !== "blog" &&
                      cards.cardCategory !== "menuLink" &&
                      cards.cardCategory !== "menuVideo" &&
                      cards.cardCategory !== "menuImage" && (
                        <Link href={`/${cards.link}`}>
                          <CardTile
                            key={cards.key}
                            className={cards.className}
                            category={cards.category}
                            cardTitle={cards.cardTitle}
                            backgroundImages={cards.backgroundImages}
                            tag1={cards.tag1}
                            tag2={cards.tag2}
                            tag3={cards.tag3}
                          />
                        </Link>
                      )}
                  </div>
                </Flipped>
              ))}
            {this.state.isVisible ? (
              <Popover togglePopover={this.togglePopover} />
            ) : null}
          </div>
        </Flipper>
      </div>
    );
  }
}
