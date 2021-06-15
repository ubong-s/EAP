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
        <GatsbyImage
          image={featuredImage.localFile.childImageSharp.gatsbyImageData}
          alt={title}
        />
        <h4>{title}</h4>
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

  img {
    padding: 1.5rem;
    background-color: ${theme.themeWhite};
  }

  h4 {
    display: inline-block;
    padding: 0.75rem 1rem;
    background-color: ${theme.themeWhite};
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.25rem;
    border-top: 1px solid ${theme.neurtralLighter};
  }

  &:hover {
    img {
      background: ${theme.primaryColor};
      transition: ${theme.transitionEase};
    }

    h4 {
      background: ${theme.primaryColor};
      color: ${theme.themeWhite};
    }
  }
`
