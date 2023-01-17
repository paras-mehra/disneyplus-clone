import React from "react";
import styled from "styled-components";
import logo1 from "../Images/cta-logo-one.svg";
import logo2 from "../Images/cta-logo-two.png";
import bgImg from "../Images/login-background.jpg";

const Banner = () => {
  return (
    <>
      <Background>
        <Container>
          <Content>
            <img src={logo1} alt="logo/img" />
            <button type="button" className="get-bundle-btn">
              GET ALL THERE
            </button>
            <h4>Stream Now:Terms Apply</h4>
            <img src={logo2} alt="logo/img" />
            <button type="button" className="links">
              Sign Up for Disney+ Only
            </button>
            <button type="button" className="links text-gray">
              $7.99/month or $79.99/year
            </button>
          </Content>
        </Container>
      </Background>
    </>
  );
};

const Background = styled.section`
  background: url(${bgImg}) center/ cover no-repeat;
  height: 96vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    height: 85vh;
  }

  @media screen and (min-width: 280px) and (max-width: 767px) {
    height: 75vh;
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 650px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    max-width: 550px;
  }

  @media screen and (min-width: 550px) and (max-width: 767px) {
    max-width: 450px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 375px) and (max-width: 550px) {
    max-width: 350px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    max-width: auto;
    margin-top: 13vh;
  }

  h4 {
    color: #fff;
    margin: 1vh 0;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 600px;
    object-fit: contain;
    margin-bottom: 1vh;
  }
  > .get-bundle-btn {
    outline: none;
    border: none;
    width: 100%;
    padding: 11.5px 15px;
    align-items: center;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: #0063e5;
    color: #f9f9f9;
    font-size: 18px;
    font-weight: bold !important;
    border-radius: 0.345rem;
    transition: all 0.5s ease-in-out;
    @media screen and (min-width: 550px) and (max-width: 1200px) {
      padding: 10px 0;
      font-size: 15px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
      padding: 7px 0;
      font-size: 14px;
    }

    &:hover {
      background: #0085ff;
    }
  }

  > .links {
    outline: none;
    border: none;
    font-size: 19px;
    background: transparent;
    color: #f9f9f9;
    margin-top: 1vh;

    @media screen and (min-width: 280px) and (max-width: 550px) {
      font-size: 15px;
    }
  }

  > .text-gray {
    color: gray;
  }
`;

export default Banner;
