import React from "react";
import styled from "styled-components";
// import WebinarHomepageBanner from "assets/images/audit/webinar_homepage_banner.png";
import ReactWOW from "react-wow";
import Close from "assets/images/landing/promo-banner-close.png";
import Router from "next/router";
import Logo from "assets/images/audit/banner-logo.svg";
import Star from "assets/images/audit/uxdesign-banner-star.png";
import Card from "assets/images/audit/uxdesign-banner-cards.png";

const UXDesignWebinarPromo = ({ handleIsOpen }) => {
  return (
    <div
      style={{
        background: `linear-gradient(98deg,
      #1c1026 42.16%,
      #e72423 70.58%,
      #f7b721 88.29%
    )`,
      }}
    >
      <ReactWOW animation="fadeInDown" delay="0s">
        <Wrapper>
          <LogoContainer>
            <HeadingTag>Beginner’s Blueprint</HeadingTag>
            <img src={Logo} alt="logo" />
            <LogoHeading>DESIGN PORTFOLIO</LogoHeading>
          </LogoContainer>
          <Content>
            <Tagline>Live Webinar</Tagline>
            <Heading>How to Make Your UX Design Portfolio Stand Out?</Heading>
            <Details>
              <TimeWrapper>
                <span>Dec 16th</span>, Saturday, 2023
              </TimeWrapper>
              <Separtator>.</Separtator>
              <PlaceWrapper>11:00 AM(IST)</PlaceWrapper>
            </Details>
          </Content>
          <ArrowContainer>
            <img src={Card} alt="" />
          </ArrowContainer>
          <Button
            onClick={() => Router.push("https://forms.gle/d6mXttnFZ1fPpwrn9")}
            type="button"
          >
            Register
          </Button>
          <StarImg src={Star} alt="" />
          <CloseIcon>
            <img src={Close} alt="close" onClick={handleIsOpen} />
          </CloseIcon>
        </Wrapper>
      </ReactWOW>
    </div>
  );
};

export default UXDesignWebinarPromo;

const Wrapper = styled.div`
  height: 180px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  font-family: Poppins;
  margin: auto;
  max-width: 1440px;
  width: 100%;
  gap: 1em;
  background: linear-gradient(
    98deg,
    #1c1026 42.16%,
    #e72423 70.58%,
    #f7b721 88.29%
  );
  justify-content: space-between;
  transition: 0.5s all;
  @media (max-width: 567px) {
    height: 75px;
    padding: 0.5rem;
  }
`;

const LogoContainer = styled.div`
  padding-left: 2rem;
  object-fit: cover;
  img {
    max-width: 100%;
    // width: 15.688em;
    // height: 6.625em;
  }
  @media (max-width: 567px) {
    padding: 0.5rem;
    max-width: 120px;
  }
  @media screen and (max-width: 423px) {
    padding: 0.5rem;
  }
  @media screen and (max-width: 340px) {
    padding: 0.2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 34.625em;
  width: 100%;
  color: #f4f4f4;
  font-family: Poppins;
  @media (max-width: 567px) {
    width: 250px;
  }
  @media screen and (max-width: 390px) {
    width: 190px;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  color: #e7e7e7;
  text-align: center;
  font-family: Poppins;
  font-size: 16.35px;
  @media (max-width: 567px) {
    font-size: 0.5rem;
  }
`;

const Separtator = styled.h6`
  margin-top: -0.6em;
  font-size: 2rem;
  @media (max-width: 567px) {
    margin-top: -0.4em;
    font-size: 1rem;
  }
`;

const TimeWrapper = styled.div`
  padding-right: 0.625rem;
  span {
    font-weight: bold;
  }
  @media (max-width: 567px) {
    padding-right: 0.225rem;
  }
`;

const PlaceWrapper = styled.h3`
  padding-left: 0.625rem;
  font-weight: 400;
  @media (max-width: 567px) {
    padding-left: 0.225rem;
  }
`;

const Heading = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 95.5%;
  letter-spacing: -0.365px;
  @media (min-width: 567px) and (max-width: 908px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  @media screen and (max-width: 567px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
  @media screen and (max-width: 423px) {
    font-size: 0.72rem;
    line-height: 0.8rem;
  }
  @media screen and (max-width: 340px) {
    font-size: 0.7rem;
    line-height: 1rem;
  }
`;

const Tagline = styled.div`
  display: inline-flex;
  padding: 6.763px 10.954px;
  align-items: flex-start;
  border-radius: 35.052px;
  color: #0d0d10;
  font-weight: 600;
  font-family: Poppins;
  font-size: 12.464px;
  background: #fff;
  text-transform: uppercase;
  width: 122px;
  margin-bottom: 15px;
  &:before {
    content: ".";
    color: #eb2d2d;
    font-size: 20px;
    width: 6.5px;
    height: 6.5px;
    display: flex;
    align-items: center;
    padding-right: 10px;
  }
  @media (max-width: 578px) {
    display: none;
  }
`;

const ArrowContainer = styled.div`
  align-self: flex-start;
  img {
    max-width: 100%;
  }
  @media (max-width: 900px) {
    img {
      display: none;
    }
  }
  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`;

const Button = styled.button`
  padding: 14px 9px;
  justify-content: center;
  align-items: center;
  border-radius: 52px;
  background: #fff;
  color: #222013;
  padding: 5px 20px;
  font-size: 34.961px;
  font-weight: 800;
  transform: translateX(-15px);
  @media (max-width: 830px) {
    font-size: 26.961px;
  }
  @media (max-width: 567px) {
    font-size: 1rem;
    transform: translateX(-25px);
    text-decoration: none;
    padding: 4px 8px;
  }
  @media screen and (max-width: 423px) {
    font-size: 1rem;
    padding: 5px;
    transform: translateX(-10px);
  }
  @media screen and (max-width: 390px) {
    font-size: 0.8rem;
    text-decoration: none;
    z-index: 999;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  @media (max-width: 567px) {
    top: 0;
    right: 5px;
    img {
      width: 14px;
    }
  }
`;

const HeadingTag = styled.p`
  opacity: 0.8;
  color: rgba(255, 255, 255, 0.9);
  font-family: Poppins;
  font-size: 14.032px;
  font-style: normal;
  font-weight: 600;
  line-height: 96%;
  padding-bottom: 14px;

  @media (max-width: 830px) {
    font-size: 7.032px;
    padding-bottom: 10px;
  }

  @media (max-width: 567px) {
    font-size: 5.547px;
    padding-bottom: 4px;
  }
  @media (max-width: 490px) {
    font-size: 2.547px;
    padding-bottom: 2px;
  }
`;

const LogoHeading = styled.h2`
  color: #fff;
  font-family: Poppins;
  font-size: 18.011px;
  font-style: normal;
  font-weight: 800;
  @media (max-width: 830px) {
    font-size: 12.282px;
  }
  @media (max-width: 567px) {
    font-size: 10.282px;
  }
  @media (max-width: 490px) {
    font-size: 10.282px;
  }
`;

const StarImg = styled.img`
  // position: absolute;
  margin-top: -50px;
  margin-left: -40px;
  width: 45px;
  height: 49px;;/
  object-fit: cover;
  @media (max-width: 490px) {
    width: 25px;
    height: 30px;
  }
`;
