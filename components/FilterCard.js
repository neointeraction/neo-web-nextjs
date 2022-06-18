import React, { Component, Fragment } from "react";
import Link from "next/link";
// // import "../css/main.css";
// import { BlogContext } from "../context/BlogContext";
// import ReactModal from "react-modal";
import ReactWOW from "react-wow";

//TO ADD NEW CARDS GO TO THIS FILE
import MENU from "../json/MENU";

import FeaturedProject from "./FeaturedProject";
import CardTileMenu from "./CardTileMenu";
import CardTileMenuImage from "./CardTileMenuImage";
import CardTileMenuImageSlider from "./CardTileMenuImageSlider";
import CardTileMenuImageCareer from "./CardTileMenuImageCareer";
import CardTileUpfront from "./CardTileUpfront";
import CardTileLinks from "./CardTileLinks";
import CardTileVideo from "./CardTileVideo";
import BlogCardSlide from "./BlogCardSlide";
import CardEbook from "./CardEbook";
import CardAuditUX from "./CardAuditUX";
import Popover from "./Popover";
import { DataContext } from "../context/DataContext";

export default class FilterCard extends Component {
  constructor() {
    super();
    this.state = {
      data: MENU,
      filter: undefined,
      isVisible: false,
      sourceUrl: "",
    };
    this.togglePopover = this.togglePopover.bind(this);
  }

  togglePopover = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
    window.scroll({ top: 380, left: 0, behavior: "smooth" });
    if (window.matchMedia("(max-width: 1200px)").matches) {
      window.scroll({ top: 607, left: 0, behavior: "smooth" });
    }
  };

  getData = (data) => {
    this.setState({ sourceUrl: data }, () => {});
    // this.setState({ playVid: this.refs.video.play() });
  };

  render() {
    return (
      <div>
        <div className="overlay-card-gallery animated fadeIn  mt-3">
          {[...MENU].map((item) => (
            <ReactWOW animation="bounceInCard" offset={0} key={item.id}>
              <div className="card-main-container flex-grow" key={item.id}>
                {item.cardCategory === "menu" && (
                  <Link href={`/${item.link}`}>
                    <div className="link">
                      <CardTileMenu
                        className={item.className}
                        category={item.category}
                        cardTitle={item.cardTitle}
                        bgColor={item.bgColor}
                        BackgroundImageCareer={item.BackgroundImageCareer}
                        infoText={item.infoText}
                        email={item.email}
                        phone={item.phone}
                        img1={item.img1}
                        img2={item.img2}
                        img1L={item.img1L}
                        img2L={item.img2L}
                        cardInfoText={item.cardInfoText}
                      />
                    </div>
                  </Link>
                )}
                {/* {item.cardCategory === "menu" && (
                  <Link href={`/${item.link}`}>
                    <div className="link">
                      <CardAuditUX
                        className={item.className}
                        category={item.category}
                        cardTitle={item.cardTitle}
                        bgColor={item.bgColor}
                        BackgroundImageCareer={item.BackgroundImageCareer}
                        infoText={item.infoText}
                        email={item.email}
                        phone={item.phone}
                        img1={item.img1}
                        img2={item.img2}
                        img1L={item.img1L}
                        img2L={item.img2L}
                        cardInfoText={item.cardInfoText}
                      />
                    </div>
                  </Link>
                )} */}
                {/* {item.cardCategory === "menuImage" && (
                  <Link href={`/${item.link}`}>
                    <div className="link">
                      <CardTileMenuImage
                        className={item.className}
                        category={item.category}
                        cardTitle={item.cardTitle}
                        bgColor={item.bgColor}
                        BackgroundImageCareer={item.BackgroundImageCareer}
                        cardInfoText={item.cardInfoText}
                      />
                    </div>
                  </Link>
                )} */}
                {item.cardCategory === "menuImage" && (
                  <Link href={`/${item.link}`}>
                    <div className="link">
                      <CardTileMenuImageCareer
                        className={item.className}
                        category={item.category}
                        cardTitle={item.cardTitle}
                        bgColor={item.bgColor}
                        // BackgroundImageCareer={item.BackgroundImageCareer}
                        cardInfoText={item.cardInfoText}
                      />
                    </div>
                  </Link>
                )}
                {item.cardCategory === "menuImageSlider" && (
                  <Link href={`/${item.link}`}>
                    <div className="link">
                      <CardTileMenuImageSlider
                        className={item.className}
                        category={item.category}
                        cardTitle={item.cardTitle}
                        bgColor={item.bgColor}
                        BackgroundImageCareer={item.BackgroundImageCareer}
                        cardInfoText={item.cardInfoText}
                      />
                    </div>
                  </Link>
                )}
                {item.cardCategory === "menuLink" && (
                  <CardTileLinks
                    className={item.className}
                    category={item.category}
                    cardTitle={item.cardTitle}
                    bgColor={item.bgColor}
                    LinkOneName={item.LinkOneName}
                    LinkTwoName={item.LinkTwoName}
                    LinkThreeName={item.LinkThreeName}
                    LinkOne={item.LinkOne}
                    LinkTwo={item.LinkTwo}
                    LinkThree={item.LinkThree}
                  />
                )}
                {item.cardCategory === "menuVideo" && (
                  <div onClick={this.togglePopover}>
                    <CardTileVideo
                      className={item.className}
                      category={item.category}
                      cardTitle={item.cardTitle}
                      BackgroundImageVideo={item.BackgroundImageVideo}
                      sendVideoLink={this.getData}
                    />
                  </div>
                )}
                {item.cardCategory === "blog" && (
                  <CardTileUpfront
                    className={item.className}
                    category={item.category}
                    cardTitle={item.cardTitle}
                    backgroundImages={item.backgroundImages}
                    infoText={item.infoText}
                    cardInfoText={item.cardInfoText}
                    blogtag1={item.blogtag1}
                    blogtag2={item.blogtag2}
                    blogtag3={item.blogtag3}
                  />
                )}
                {item.cardCategory === "blogSlideHome" && (
                  <Link href={`/${item.link}`}>
                    <div className="link">
                      <BlogCardSlide
                        className={item.className}
                        category={item.category}
                        cardTitle={item.cardTitle}
                        bgColor={item.bgColor}
                        BackgroundImageCareer={item.BackgroundImageCareer}
                        cardInfoText={item.cardInfoText}
                      />
                    </div>
                  </Link>
                )}
                {item.cardCategory === "ebookHome" && (
                  <Link href={`/${item.link}`}>
                    <div className="link">
                      <CardEbook
                        className={item.className}
                        category={item.category}
                        cardTitle={item.cardTitle}
                        bgColor={item.bgColor}
                        BackgroundImageCareer={item.BackgroundImageCareer}
                        cardInfoText={item.cardInfoText}
                      />
                    </div>
                  </Link>
                )}
                {/* {cards.cardCategory !== "menu" &&
                      cards.cardCategory !== "blog" &&
                      cards.cardCategory !== "menuLink" &&
                      cards.cardCategory !== "menuVideo" &&
                      cards.cardCategory !== "menuImage" && (
                        
                      )} */}
              </div>
            </ReactWOW>
          ))}
          {this.state.isVisible ? (
            <Popover {...this.state} togglePopover={this.togglePopover} />
          ) : null}
          {/* <BlogContext.Consumer>
            {(context) => (
              <Fragment>
                {[...context.state.blogs]
                  .filter((tag) => {
                    if (tag.featured) return true;
                    return null;
                  })
                  .map((item, i) => (
                    <div className="card-main-container" key={item.id}>
                      <Link   href={`/Blog/${item.id}`}>
                        <CardTileUpfront
                          className={item.id}
                          category={item.blog_categories.map(
                            (cat) => cat.blogCategoryName
                          )}
                          cardTitle={item.blogTitle}
                          backgroundImages={item.blogCardImage.url}
                          blogtag1={item.blog_categories.map(
                            (cat) => cat.blogCategoryName
                          )}
                          author={item.blogAuthor}
                          postedTime={item.created_at}
                        />
                      </Link>
                    </div>
                  ))}
              </Fragment>
            )}
          </BlogContext.Consumer> */}
          <DataContext.Consumer>
            {(context) => (
              <Fragment>
                {[...context.state.projects]
                  .filter((tag) => {
                    if (tag.featured) return true;
                    return null;
                  })
                  .map((cards, i) => (
                    <ReactWOW
                      animation="bounceInCard"
                      offset={0}
                      key={cards.id}
                    >
                      <div className="card-main-container" key={cards.id}>
                        <Link
                          href={{
                            pathname: `/Projects/${cards.cardTitle.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ /g,"-")}`
                          }}
                        >
                          <div className="link">
                            <FeaturedProject
                              key={cards.id}
                              className={cards.className}
                              category={cards.categories.map(
                                (li) => li.category
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
              </Fragment>
            )}
          </DataContext.Consumer>
        </div>
      </div>
    );
  }
}
