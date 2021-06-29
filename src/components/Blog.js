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
  altL,
}) => {
  return (
    <BlogLink to={`/blog/${slug}`} key={strapiId} altL={altL}>
      <article altL={altL}>
        <ImageWrap altL={altL}>
          <GatsbyImage
            image={featuredImage.localFile.childImageSharp.gatsbyImageData}
            alt={title}
            altL={altL}
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
  box-shadow: ${theme.shadow};

  article {
    @media screen and (min-width: 768px) {
      display: ${({ altL }) => (altL ? "block" : "grid")};
      grid-template-columns: ${({ altL }) => (altL ? "" : "1fr 2fr")};
      gap: 1.5rem;
      align-items: center;
    }

    @media screen and (min-width: 1100px) {
      grid-template-columns: ${({ altL }) => (altL ? "" : "1fr 3fr")};
    }
  }

  .blogs-card {
    display: flex;
    flex-direction: column;
    transition: ${theme.transitionEase};

    h4 {
      margin-top: 1rem;
      font-size: 1.25rem;

      @media screen and (min-width: 1024px) {
        margin-top: 0;
      }
    }

    p {
      margin-bottom: 0;
      line-height: 1.6;
    }

    .more {
      display: 1fr 3fr;
      text-transform: capitalize;
      /* margin-top: 0.5rem; */
      color: ${theme.primaryColor};
      font-weight: 700;
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
  margin-bottom: ${({ altL }) => (altL ? `1rem` : "0")};
  height: ${({ altL }) => (altL ? `200px` : "")};
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    height: ${({ altL }) => (altL ? `auto` : "")};
  }

  img {
    transition: ${theme.transitionEase};
  }

  p {
    position: absolute;
    font-family: ${theme.fontPrimary};
    padding: 1rem;
    background: ${theme.accentColor};
    color: ${theme.primaryColor};
    top: 0;
    left: 0;
  }

  &:hover {
    img {
      transition: ${theme.transitionEase};
      transform: scale(1.2);
    }
  }
`
