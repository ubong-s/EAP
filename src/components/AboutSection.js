import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { theme } from "../styles/theme"
import AboutHero from "../images/pageHero/about.jpg"

const AboutSection = ({
  lightBg,
  title,
  content,
  buttonLabel,
  buttonLink,
  img,
  imgEnd,
  shadow,
}) => {
  return (
    <AboutWrap lightBg={lightBg}>
      <div className="container">
        <AboutContent imgEnd={imgEnd} lightBg={lightBg} shadow={shadow}>
          <div
            className="img"
            data-sal="slide-left"
            data-sal-duration="5000ms"
            data-sal-delay="300"
            data-sal-easing="ease-out-bounce"
          >
            <img src={img ? img : AboutHero} alt={title} />
          </div>
          <div
            className="content"
            data-sal="slide-right"
            data-sal-duration="10000ms"
            data-sal-delay="500"
            data-sal-easing="ease-out-bounce"
          >
            <h2>{title}</h2>
            <p>{content}</p>
            {buttonLink && (
              <Link to={buttonLink}>
                <button className="btn">{buttonLabel}</button>
              </Link>
            )}
          </div>
        </AboutContent>
      </div>
    </AboutWrap>
  )
}

export default AboutSection

const AboutWrap = styled.section`
  background: ${({ lightBg }) => (lightBg ? `${theme.themeWhite}` : ``)};
`

const AboutContent = styled.div`
  display: grid;
  gap: 3rem;

  .img {
    padding: 1.5rem;
    background-color: ${theme.themeWhite};
    box-shadow: ${theme.shadow};
    line-height: 0;

    img {
      margin-bottom: 0;
    }
  }

  p {
    margin-bottom: 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: ${({ imgEnd }) => (imgEnd ? "row-reverse" : "row")};
    gap: 2rem;
    flex: 1 1 0;

    .img {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0;
      img {
        margin-bottom: 0;
      }
    }

    .content {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0;
      padding: 2.5rem;
    }
  }
`
