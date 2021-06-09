import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { theme } from "../styles/theme"

const Service = ({ strapiId, title, image, description, slug }) => {
  return (
    <ServiceLink to={`/services/${slug}`} key={strapiId}>
      <article>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText}
        />
        <div className="services-card">
          <h4>{title}</h4>
          <p>
            {`${description}`.substring(0, 125)}
            <span className="more">read more</span>
          </p>
        </div>
      </article>
    </ServiceLink>
  )
}

Service.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Service

const ServiceLink = styled(Link)`
  padding: 1.5rem;
  background-color: ${theme.themeWhite};

  .services-card {
    display: flex;
    flex-direction: column;

    h4 {
      margin: 1.25rem 0 0.75rem;
      font-size: 1.25rem;
    }

    p {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }

    .more {
      margin-left: 0.25rem;
      color: ${theme.primaryColor};
    }
  }

  &:hover {
    background: ${theme.primaryColor};
    transition: ${theme.transitionEase};

    .services-card {
      h4 {
        color: ${theme.accentColor};
      }

      p {
        color: ${theme.themeWhite};
      }

      .more {
        color: ${theme.accentColor};
      }
    }
  }
`
