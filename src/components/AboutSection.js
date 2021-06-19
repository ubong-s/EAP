import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { theme } from "../styles/theme"

const AboutSection = ({
  lightBg,
  title,
  content,
  listItems,
  buttonLabel,
  buttonLink,
  img,
  alt,
  imgEnd,
  shadow,
}) => {
  return (
    <AboutWrap lightBg={lightBg}>
      <div className="container">
        <AboutContent imgEnd={imgEnd} lightBg={lightBg} shadow={shadow}>
          <div className="img">
            <img src={img} alt={title} />
          </div>
          <div className="content">
            <h2>{title}</h2>
            <p>{content}</p>
            <Link to={buttonLink}>
              <button className="btn">{buttonLabel}</button>
            </Link>
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
  padding: 1.5rem;
  box-shadow: ${({ shadow }) => (shadow ? `${theme.shadow}` : ``)};
  background-color: ${({ lightBg }) => (lightBg ? `` : `${theme.themeWhite}`)};

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
