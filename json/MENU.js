import React from "react";

// ADD IMAGES / ICONS FOR CARDS HERE

import BackgroundImageCareer from "assets/images/careersTile.png";
import BlogBgMain from "assets/images/Blog.png";
import Mail from "assets/images/Email.svg";
import Location from "assets/images/Location.svg";
import MailL from "assets/images/EmailL.svg";
import LocationL from "assets/images/LocationL.svg";
import BackgroundImageVideo from "assets/images/clientSpeak.jpg";
import AboutUsImg from "assets/images/about-us.jpeg";
import ProjectImg from "assets/images/Projectcard.png";
import EbookCrdImg from "assets/images/ebookcard.png";
// JSON DATA

const MENU = [
  {
    key: 1,
    className: "animated slideInUp",
    category: "menu",
    cardCategory: "menuImage",
    cardTitle: "careers",
    bgColor: "#0d0d10",
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
    bgColor: "#0d0d10", // #99b400
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
  // {
  //   key: 2,
  //   className: "",
  //   category: "menu",
  //   cardCategory: "menu",
  //   cardslide : [
  //     {
  //       cardTitle1: "contact us",
  //       bgColor: "#ababab", // #99b400
  //       backgroundImages1: "none",
  //       infoText1:
  //         "Success for our designs is always gauged by the way it has enabled .",
  //       email1: "info@neointeraction.com",
  //       phone1: "",
  //       img1: <img src={Mail} alt="Mail" />,
  //       img2: <img src={Location} alt="Mail" />,
  //       img1L: <img src={MailL} alt="Mail" />,
  //       img2L: <img src={LocationL} alt="Mail" />,
  //       cardInfoText1: "locate us or say hello!",
  //       link: "ContactUs",
  //     },
  //     {
  //       cardTitle1: "Audit ux",
  //       bgColor: "#ababab", // #99b400
  //       backgroundImages1: "none",
  //       infoText1:
  //         "Success for our designs is always gauged by the way it has enabled .",
  //       email1: "info@neointeraction.com",
  //       phone1: "",
  //       img1: <img src={Mail} alt="Mail" />,
  //       img2: <img src={Location} alt="Mail" />,
  //       img1L: <img src={MailL} alt="Mail" />,
  //       img2L: <img src={LocationL} alt="Mail" />,
  //       cardInfoText1: "locate us or say hello!",
  //       link: "ContactUs",
  //     }
  //   ]

  //   // cardTitle2: "Audit UX",
  //   // backgroundImages2: "none",
  //   // infoText2:
  //   //   "Success for our designs is always gauged by the way it has enabled .",
  //   // email2: "info@neointeraction.com",
  //   // phone2: "",
  //   // img12: <img src={Mail} alt="Mail" />,
  //   // img22: <img src={EbookCrdImg} alt="Mail" />,
  //   // img1L2: <img src={MailL} alt="Mail" />,
  //   // img2L2: <img src={LocationL} alt="Mail" />,
  //   // cardInfoText2: "locate us or say hello!",
  //   // link: "ContactUs",

  // },

  {
    key: 3,
    className: "animated slideInUp",
    category: "menu",
    cardCategory: "menuImageSlider",
    cardTitle: "about us",
    bgColor: "#0d0d10",
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
    LinkOne: "ui-ux-design-developer-services-company-bangalore",
    LinkTwo: "ui-engineering-services-bangalore-india",
    LinkThree: "VideoService",
  },
  // {
  //   key: 6,
  //   className: "animated slideInUp",
  //   category: "menu",
  //   cardCategory: "menuImage",
  //   cardTitle: "projects",
  //   bgColor: "",
  //   BackgroundImageCareer: ProjectImg,
  //   cardInfoText: `selected enterprise Ux engagements`,
  //   link: "Projects",
  // },
  // {
  //   key: 7,
  //   className: "animated slideInUp",
  //   category: "menu",
  //   cardCategory: "menuImage",
  //   cardTitle: "blog",
  //   bgColor: "#ababab",
  //   // BackgroundImageCareer: BlogBgMain,
  //   cardInfoText:
  //     "a specially curated list of articles to help understand the world of design",
  //   link: "Blog",
  // },
  {
    key: 7,
    className: "animated slideInUp",
    category: "menu",
    cardCategory: "blogSlideHome",
    cardTitle: "blog",
    bgColor: "#0d0d10",
    // BackgroundImageCareer: BlogBgMain,
    cardInfoText:
      "a specially curated list of articles to help understand the world of design",
    link: "Blog",
  },
  {
    key: 8,
    className: "animated slideInUp",
    category: "menu",
    cardCategory: "ebookHome",
    cardTitle: "ebook",
    bgColor: "#0d0d10", //#ababab
    BackgroundImageCareer: EbookCrdImg,
    cardInfoText:
      "the agile mindset helps you iterate and develop products that the customers want",
    link: "ebook",
  },
];

export default MENU;
