import React, { useState, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai"
import styled from "styled-components"
import { theme } from "../styles/theme"

const HomeSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  useEffect(() => {
    if (current < 0) {
      setCurrent(slides.length - 1)
    }

    if (current > slides.length - 1) {
      setCurrent(0)
    }
  }, [current, slides])

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrent(current + 1)
    }, 6000)
    return () => clearInterval(slider)
  }, [current])

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <SliderContainer>
      <SliderIcons>
        <AiFillCaretLeft className="arrow left-arrow" onClick={prevSlide} />
        <span style={{ color: `${theme.accentColor}` }}>
          {current + 1}
        </span>{" "}
        {" / "} <span>{length}</span>
        <AiFillCaretRight className="arrow right-arrow" onClick={nextSlide} />
      </SliderIcons>

      {slides.map((slide, index) => {
        return (
          <article
            className={index === current ? "slide-img active" : "slide-img"}
            key={index}
          >
            {index === current && (
              <>
                <GatsbyImage
                  className="img"
                  image={slide.image.localFile.childImageSharp.gatsbyImageData}
                />
                <div className="slide-img-info">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>
              </>
            )}
          </article>
        )
      })}
    </SliderContainer>
  )
}

export default HomeSlider

const SliderContainer = styled.section`
  padding: 0;
  position: relative;
  height: calc(100vh - 70px);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 80vh;
  }
  @media screen and (min-width: 1024px) {
    height: 100vh;
  }

  .slide-img {
    opacity: 0;
    transition: all 0.3s linear;

    .img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media screen and (min-width: 1024px) {
        object-position: top;
      }
    }

    &-info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #fff;
      padding: 2rem;
      z-index: 2;

      h1 {
        color: ${theme.themeWhite};
        font-size: 1.5rem;
      }

      p {
        color: ${theme.themeWhite};
      }

      @media screen and (min-width: 1024px) {
        left: 7.5%;
        top: unset;
        bottom: 10%;
        text-align: left;
        align-items: start;
        justify-content: flex-end;
        width: 50%;

        h1 {
          text-transform: capitalize;
          line-height: 1.3;
          font-size: 3rem;
        }

        p {
          font-size: 1.15rem;
          padding: 0;
        }
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* background: rgba(0, 0, 0, 0.5); */
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.9)
      );
      z-index: 1;
    }
  }

  .slide-img.active {
    opacity: 1;
    transition: all 0.3s linear;
  }
`
const SliderIcons = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  right: 5%;
  bottom: 10%;
  z-index: 4;
  color: ${theme.themeWhite};

  span {
    margin: 0 0.5rem;
  }

  .arrow {
    cursor: pointer;
    color: ${theme.accentColor};
    user-select: none;
    transition: ${theme.transitionEase};
    margin: 0 0.5rem;
    font-size: 2rem;

    &:hover {
      color: ${theme.themeWhite};
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;

    .arrow {
      font-size: 3rem;
    }
  }
`
