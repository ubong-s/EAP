import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { theme } from "../styles/theme"

const Blog = ({
  strapiId,
  title,
  featuredImage,
  description,
  slug,
  date,
  grid,
}) => {
  return (
    <BlogLink to={`/blog/${slug}`} key={strapiId}>
      <article>
        <ImageWrap grid={grid}>
          <GatsbyImage
            image={featuredImage.localFile.childImageSharp.gatsbyImageData}
            alt={title}
          />
          <p className="date">{date}</p>
        </ImageWrap>
        <div className="blogs-card">
          <h4>{title}</h4>
          <p>
            {`${description}`.substring(0, 200)}...
            <span className="more">read more</span>
          </p>
        </div>
      </article>
    </BlogLink>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Blog

const BlogLink = styled(Link)`
  padding: 1.5rem;
  background-color: ${theme.themeWhite};

  article {
    @media screen and (min-width: 768px) {
      display: ${({ grid }) => (grid ? `block` : "grid")};
      grid-template-columns: ${({ grid }) => (grid ? `` : "1fr 2fr")};
      gap: 1.5rem;
      align-items: center;
    }

    @media screen and (min-width: 1100px) {
      grid-template-columns: ${({ grid }) => (grid ? `` : "1fr 3fr")};
    }
  }

  .blogs-card {
    display: flex;
    flex-direction: column;
    transition: ${theme.transitionEase};

    h4 {
      margin: 1.25rem 0 0.75rem;
      font-size: 1.25rem;
    }

    p {
      margin-bottom: 0;
      line-height: 1.6;
    }

    .more {
      display: ${({ grid }) => (grid ? `1fr 3fr` : "")};
      text-transform: capitalize;
      margin-top: 0.5rem;
      color: ${theme.primaryColor};
    }

    @media screen and (min-width: 768px) {
      h4 {
        margin: 0 0 0.5rem;
        /* font-size: 1.25rem; */
      }
    }
  }

  &:hover {
    background: ${theme.primaryColor};
    transition: ${theme.transitionEase};

    .blogs-card {
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

const ImageWrap = styled.div`
  position: relative;
  line-height: 0;
  margin-bottom: ${({ grid }) => (grid ? `1.5rem` : "")};

  p {
    position: absolute;
    font-family: ${theme.fontPrimary};
    padding: 1rem;
    background: ${theme.accentColor};
    color: ${theme.primaryColor};
    top: 0;
    left: 0;
  }
`
