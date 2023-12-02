import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Thankyou from "../assets/images/audit/thankyou.png";

const UxAuditBookingSuccess = () => {
  return (
    <Wrapper>
      <img src={Thankyou} alt="letter" />
      <Title>
        Thank <span>You</span>
      </Title>
      <Text>
        Your UX audit has been successfully booked. We will contact you very
        soon!
      </Text>
      <Link href="/ux-audit">
        <Button>Go Back</Button>
      </Link>
    </Wrapper>
  );
};

export default UxAuditBookingSuccess;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 60vh;
  margin: 4em auto;
  img {
    width: 320px;
    @media (max-width: 768px) {
      width: 200px;
    }
  }
  @media (max-width: 768px) {
    margin: 5em auto;
  }
`;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-size: 44px;
  font-style: normal;
  font-weight: 750;
  line-height: normal;
  margin: 0.5em 0 10px;
  span {
    color: #e5283f;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  color: var(--Text, #374151);
  text-align: center;
  font-size: 20px;
  font-weight: 350;
  width: 498px;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 287.708px;
  }
`;

const Button = styled.button`
  border-radius: 5px;
  background: var(--Red, #e5283f);
  padding: 10px 2.5em;
  color: white;
  margin-top: 40px;
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 1.5em;
  }
`;
