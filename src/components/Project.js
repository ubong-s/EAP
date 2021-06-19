import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { theme } from "../styles/theme"

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
        </div>
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
  text-align: center;

  article {
    background-color: ${theme.themeWhite};
    padding: 1.25rem;
  }

  .img {
    position: relative;

    z-index: 2;

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
    font-size: 1rem;
    left: 1.25rem;
    bottom: 1rem;
    z-index: 3;
    color: ${theme.themeWhite};
    text-align: left;
  }

  &:hover {
    .img {
      transition: ${theme.transitionEase};
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
