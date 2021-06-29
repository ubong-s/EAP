import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { theme } from "../styles/theme"
import servicesBG from "../images/homeSlider/home-slider-6.jpg"
import patternBG from "../images/pattern.jpg"

const HomeServices = ({ services }) => {
  return (
    <ServicesWrap>
      <div className="green-bg"></div>
      <div className="container">
        <div className="img">
          <img src={servicesBG} alt="our services" />
        </div>
        <ServicesContent>
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            ipsam. Sequi, facilis. Nulla laudantium eligendi eveniet nemo
            nesciunt placeat non voluptas dignissimos.
          </p>
          <ul>
            {services.map(service => {
              return (
                <li>
                  <Link to={`/services/${service.slug}`}>
                    → <span>{service.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </ServicesContent>
      </div>
    </ServicesWrap>
  )
}

export default HomeServices

const ServicesWrap = styled.section`
  position: relative;
  display: grid;
  align-items: center;
  background-image: url(${patternBG});
  background-size: cover;
  z-index: 0;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(21, 71, 52, 0.95);
    z-index: 1;
  }

  @media screen and (min-width: 1024px) {
    background-image: unset;

    &::after {
      background-color: transparent;
    }
  }

  .container {
    display: grid;
    gap: 3rem;
    position: relative;
    z-index: 5;

    @media screen and (min-width: 1024px) {
      grid-template-columns: 1.5fr 1fr;
      align-items: center;
      gap: 4rem;
    }
  }

  .img {
    line-height: 0;
    padding: 1.25rem;
    background-color: ${theme.themeWhite};
    box-shadow: ${theme.shadow};

    @media screen and (min-width: 1024px) {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0;
    }

    img {
      margin-bottom: 0;
    }
  }

  .green-bg {
    display: none;

    @media screen and (min-width: 1024px) {
      display: block;
      position: absolute;
      background-image: url(${patternBG});
      height: 90vh;
      right: 0;
      width: 70%;

      &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(21, 71, 52, 0.92);
        background-size: 100%;
        z-index: 1;
      }
    }
  }
`

const ServicesContent = styled.div`
  h2 {
    color: ${theme.accentColor};
  }

  p {
    color: ${theme.themeWhite};
    margin-bottom: 1.5rem;
  }

  li {
    margin-bottom: 1rem;

    a {
      color: ${theme.themeWhite};
      /* font-size: 1.05rem; */

      span {
        margin-left: 1rem;
        transition: ${theme.transitionEase};
      }

      &:hover {
        color: ${theme.accentColor};

        span {
          margin-left: 1.5rem;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
  }
`
