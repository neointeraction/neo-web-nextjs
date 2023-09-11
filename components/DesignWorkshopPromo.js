import React from "react";
import styled from "styled-components";
import Background from "assets/images/landing/promo-banner-bg.jpg";
import Logo from "assets/images/landing/promo-banner-logo.png";
import Arrow from "assets/images/landing/promo-banner-arrow.png";
import Close from "assets/images/landing/promo-banner-close.png";
import ReactWOW from "react-wow";

import Router from "next/router";

const DesignWorkshopPromo = ({ handleIsOpen }) => {
  return (
    <div
      style={{
        background: "#dfce2a",
      }}
    >
      <ReactWOW animation="fadeInDown" delay="0s">
        <Wrapper>
          <LogoContainer>
            <img src={Logo} alt="logo" />
          </LogoContainer>
          <Content>
            <Details>
              <TimeWrapper>
                <span>Oct, 6th</span> 2023
              </TimeWrapper>
              <Separtator>.</Separtator>
              <PlaceWrapper>Taj Vivanta, Bangalore</PlaceWrapper>
            </Details>
            <Heading>Crafted for Design Heads & Product Managers.</Heading>
            <Tagline>Effective Methods to Accelerate Design Decisions</Tagline>
          </Content>
          <ArrowContainer>
            <img src={Arrow} alt="arrow" />
          </ArrowContainer>
          <Button onClick={() => Router.push("/design-workshop")} type="button">
            Register
          </Button>
          <CloseIcon>
            <img src={Close} alt="close" onClick={handleIsOpen} />
          </CloseIcon>
        </Wrapper>
      </ReactWOW>
    </div>
  );
};

export default DesignWorkshopPromo;

const Wrapper = styled.div`
  height: 180px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  font-family: Poppins;
  margin: auto;
  max-width: 1440px;
  justify-content: space-between;
  transition: 0.5s all;
  @media (max-width: 567px) {
    height: 75px;
    padding: 0.5rem;
  }
`;

const LogoContainer = styled.div`
  padding: 2rem;
  max-width: 15.688em;
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
  color: #181711;
  @media (max-width: 567px) {
    flex-direction: column-reverse;
    width: 250px;
  }
  @media screen and (max-width: 390px) {
    width: 190px;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
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
  color: #181711;
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
  color: #181711;
  @media (max-width: 567px) {
    padding-left: 0.225rem;
  }
`;

const Heading = styled.div`
  background: linear-gradient(0deg, #000 -21.56%, #6a6001 121.56%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 2.507rem;
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
  font-size: 1.25rem;
  font-weight: 500;
  @media (max-width: 578px) {
    display: none;
  }
  @media (max-width: 908px) {
    font-size: 1rem;
  }
`;

const ArrowContainer = styled.div`
  align-self: flex-start;
  img {
    max-width: 100%;
  }
  @media (max-width: 567px) {
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
  border-radius: 8px;
  background: #feed54;
  color: #222013;
  text-align: center;
  font-family: Poppins;
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 95.5%; /* 40.11px */
  letter-spacing: -0.365px;
  text-decoration-line: underline;
  padding: 14px 20px;
  transform: translateX(-15px);
  @media (max-width: 567px) {
    font-size: 1rem;
    transform: translateX(-25px);
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 2.766px;
  }
  @media screen and (max-width: 423px) {
    font-size: 1rem;
    padding: 5px;
    transform: translateX(-10px);
  }
  @media screen and (max-width: 390px) {
    font-size: 0.8rem;
    text-decoration: none;
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
