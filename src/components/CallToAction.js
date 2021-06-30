import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { theme } from "../styles/theme"

const CallToAction = ({ title, buttonText, backgroundImg }) => {
  return (
    <CallWrap
      backgroundImg={backgroundImg}
      data-sal="slide-up"
      data-sal-duration="5000ms"
      data-sal-delay="300"
      data-sal-easing="ease-out-sine"
    >
      <div className="container">
        <CallContent>
          <h3
            className="title"
            data-sal="fade"
            data-sal-duration="10000ms"
            data-sal-delay="500"
            data-sal-easing="ease-out-sine"
          >
            {title ? title : "In need of our services"}
          </h3>
          <Link
            to="/contact"
            className="btn"
            lassName="title"
            data-sal="fade"
            data-sal-duration="10000ms"
            data-sal-delay="700"
            data-sal-easing="ease-out-sine"
          >
            {buttonText ? buttonText : "Contact Us"}
          </Link>
        </CallContent>
      </div>
    </CallWrap>
  )
}

export default CallToAction

const CallWrap = styled.div`
  position: relative;
  height: 200px;

  display: flex;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ backgroundImg }) =>
    backgroundImg ? `url(${backgroundImg})` : ""};
  background-color: ${({ backgroundImg }) =>
    backgroundImg ? "" : theme.primaryColor};
  color: ${theme.themeWhite};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }

  @media screen and (min-width: 1024px) {
    height: 250px;

    &::after {
      background: rgba(0, 0, 0, 0.8);
    }
  }
`

const CallContent = styled.div`
  position: relative;
  z-index: 2;

  .title {
    color: ${theme.themeWhite};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;

    .title {
      font-size: 2rem;
      margin-bottom: 0;
    }
  }
`
