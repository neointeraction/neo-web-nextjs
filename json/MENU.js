import React from "react";

// ADD IMAGES / ICONS FOR CARDS HERE

import BackgroundImageCareer from "../images/careersTile.png";
import BlogBgMain from "../images/Blog.png";
import Mail from "../images/Email.svg";
import Location from "../images/Location.svg";
import MailL from "../images/EmailL.svg";
import LocationL from "../images/LocationL.svg";
import BackgroundImageVideo from "../images/clientSpeak.jpg";
import AboutUsImg from "../images/about-us.jpeg";
import ProjectImg from "../images/Projectcard.png";
// JSON DATA

const MENU = [
  {
    key: 1,
    className: "animated slideInUp",
    category: "menu",
    cardCategory: "menuImage",
    cardTitle: "careers",
    bgColor: "",
    BackgroundImageCareer: BackgroundImageCareer,
    cardInfoText: "apply for our available job & internship opportunities",
    link: "Career",
  },

  {
    key: 2,
    className: "",
    category: "menu",
    cardCategory: "menu",
    cardTitle: "contact us",
    bgColor: "#99b400",
    backgroundImages: "none",
    infoText:
      "Success for our designs is always gauged by the way it has enabled .",
    email: "info@neointeraction.com",
    phone: "",
    img1: <img src={Mail} alt="Mail" />,
    img2: <img src={Location} alt="Mail" />,
    img1L: <img src={MailL} alt="Mail" />,
    img2L: <img src={LocationL} alt="Mail" />,
    cardInfoText: "locate us or say hello!",
    link: "ContactUs",
  },
  {
    key: 3,
    className: "animated slideInUp",
    category: "menu",
    cardCategory: "menuImage",
    cardTitle: "about us",
    bgColor: "",
    BackgroundImageCareer: AboutUsImg,
    cardInfoText: `learn about our services, team and vision`,
    link: "AboutUs",
  },
  {
    key: 4,
    className: "",
    category: "menu",
    cardCategory: "menuVideo",
    cardTitle: "client speak",
    BackgroundImageVideo: BackgroundImageVideo,
  },
  {
    key: 5,
    className: "",
    category: "menu",
    cardCategory: "menuLink",
    cardTitle: "services",
    bgColor: "#BE0315",
    LinkOneName: "UX Design",
    LinkTwoName: "UI Engineering",
    LinkThreeName: "Motion Design",
    LinkOne: "UxService",
    LinkTwo: "UiEngineering",
    LinkThree: "VideoService",
  },
  {
    key: 6,
    className: "animated slideInUp",
    category: "menu",
    cardCategory: "menuImage",
    cardTitle: "projects",
    bgColor: "",
    BackgroundImageCareer: ProjectImg,
    cardInfoText: `selected enterprise Ux engagements`,
    link: "Projects",
  },
  {
    key: 7,
    className: "animated slideInUp",
    category: "menu",
    cardCategory: "menuImage",
    cardTitle: "blog",
    bgColor: "",
    BackgroundImageCareer: BlogBgMain,
    cardInfoText:
      "a specially curated list of articles to help understand the world of design",
    link: "Blog",
  },
];

export default MENU;
