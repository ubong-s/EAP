import React from "react"
import styled from "styled-components"
import { theme } from "../styles/theme"

const PageHero = ({ title, backgroundImg }) => {
  return (
    <PageHeroWrapper backgroundImg={backgroundImg}>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </PageHeroWrapper>
  )
}

export default PageHero

const PageHeroWrapper = styled.div`
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
  z-index: -2;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
  }

  @media screen and (min-width: 1024px) {
    height: 250px;
    padding-top: 50px;

    &::after {
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.7)
      );
    }
  }

  h1 {
    color: ${theme.themeWhite};
  }

  .container {
    text-align: center;

    @media screen and (min-width: 1024px) {
      text-align: end;
    }
  }
`
