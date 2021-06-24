import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { theme } from "../styles/theme"
import { FaPlusCircle } from "react-icons/fa"

const Project = ({ strapiId, title, featuredImage, slug }) => {
  return (
    <ProjectLink to={`/projects/${slug}`} key={strapiId}>
      <article>
        <div className="img">
          <GatsbyImage
            image={featuredImage.localFile.childImageSharp.gatsbyImageData}
            alt={title}
          />
          <h4>{title}</h4>
          <FaPlusCircle className="plus-icon" />
        </div>
        {/* <div className="title">
          <h3>{title}</h3>
        </div> */}
      </article>
    </ProjectLink>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Project

const ProjectLink = styled(Link)`
  position: relative;
  text-align: center;

  article {
    background-color: ${theme.themeWhite};
    padding: 1.25rem;
    box-shadow: ${theme.shadow};
  }

  .img {
    position: relative;
    z-index: 2;
    overflow: hidden;

    img {
      transition: ${theme.transitionEase};
      height: 150px;

      @media screen and (min-width: 1024px) {
        height: 400px;
      }
    }

    .plus-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      font-size: 2rem;
      color: ${theme.themeWhite};
      transition: ${theme.transitionEase};
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 1)
      );
      transition: ${theme.transitionEase};
    }
  }

  h4 {
    position: absolute;
    font-size: 1.25rem;
    left: 1.25rem;
    bottom: 1rem;
    z-index: 3;
    color: ${theme.themeWhite};
    text-align: left;
    transition: ${theme.transitionEase};
    padding-right: 1.25rem;
  }

  /* .title {
    position: absolute;
    padding: 1.5rem 1rem;
    background-color: ${theme.themeWhite};
    left: 50%;
    bottom: -5%;
    transform: translateX(-50%);
    z-index: 3;
    transition: ${theme.transitionEase};

    h3 {
      margin-bottom: 0;
    }
  } */

  &:hover {
    .img {
      transition: ${theme.transitionEase};

      img {
        transition: ${theme.transitionEase};
        transform: scale(1.2);
      }

      .plus-icon {
        transform: translate(-50%, -50%) scale(1);
        transition: ${theme.transitionEase};
      }

      &::after {
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.8),
          rgba(255, 255, 255, 0),
          rgba(0, 0, 0, 0.8)
        );
      }
    }
  }
`
