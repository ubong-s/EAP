import React from "react"
import styled from "styled-components"
import { theme } from "../styles/theme"
import commitBG from "../images/homeSlider/home-slider-7.jpg"
import patternBG from "../images/pattern.jpg"

const Commitment = () => {
  return (
    <CommitWrap>
      <div
        className="green-bg"
        data-sal="slide-right"
        data-sal-duration="10000ms"
        data-sal-delay="300"
        data-sal-easing="ease-out-sine"
      ></div>
      <div className="container">
        <div
          className="img"
          data-sal="slide-left"
          data-sal-duration="12000ms"
          data-sal-delay="500"
          data-sal-easing="ease-out-sine"
        >
          <img src={commitBG} alt="commitment" />
        </div>
        <CommitContent
          data-sal="fade"
          data-sal-duration="12000ms"
          data-sal-delay="500"
          data-sal-easing="ease-out-sine"
        >
          <h2>Our Commitment</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            aspernatur qui sequi minima. Quae quis mollitia veritatis
            reiciendis, sed voluptatum optio quam itaque natus? Enim provident
            nihil, praesentium eveniet maiores omnis eos aliquam harum
            recusandae et animi rem pariatur autem molestias sunt est ut itaque
            sint voluptatibus eligendi consequatur. Illum aut, tempore rerum,
            quibusdam corrupti sit sunt commodi delectus neque reprehenderit
            cumque minima sequi dolorum blanditiis quasi at obcaecati, veniam
            cupiditate sapiente! Consequuntur fugit tempora amet optio aut.
            Veritatis incidunt, accusamus deserunt neque maiores odio
            distinctio? Id itaque facere, inventore corrupti tempora voluptates
            ratione perspiciatis blanditiis at nobis voluptatum ipsam.
          </p>
        </CommitContent>
      </div>
    </CommitWrap>
  )
}

export default Commitment

const CommitWrap = styled.section`
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
    background-color: rgba(21, 71, 52, 0.97);
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
      grid-template-columns: 1fr 1.5fr;
      grid-template-areas: "contentdiv imagediv";
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
      grid-area: imagediv;
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
      left: 0;
      width: 70%;

      &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(21, 71, 52, 0.92);
        z-index: 1;
      }
    }
  }
`

const CommitContent = styled.div`
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
    grid-area: contentdiv;
  }
`
