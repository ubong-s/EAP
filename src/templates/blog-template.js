import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from "../styles/theme"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PageHero from "../components/PageHero"
import BlogSidebar from "../components/BlogSidebar"
import ReactMarkdown from "react-markdown"
import { PostNavigator } from "../components/PostNavigator"

const blogTemplate = ({ data, pageContext }) => {
  const { content, title, description, featuredImage, date } = data.blog
  const featImage = featuredImage.localFile.publicURL
  return (
    <Layout>
      <Seo title={title} description={description} />
      <PageHero title={title} backgroundImg={featImage} />
      <div className="container">
        <BlogWrap>
          <BlogContent>
            <article>
              <ImageWrap>
                <GatsbyImage
                  className="blog-img"
                  image={
                    featuredImage.localFile.childImageSharp.gatsbyImageData
                  }
                  alt={featuredImage.alternativeText}
                />
                <p className="date">{date}</p>
              </ImageWrap>
              <h2>{title}</h2>
              <ReactMarkdown children={content} />
              <PostNavigator pageContext={pageContext} subLink="blog" />
            </article>
          </BlogContent>
          <BlogSidebar />
        </BlogWrap>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      title
      content
      description
      slug
      date(formatString: "MMMM Do YYYY")
      featuredImage {
        alternativeText
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default blogTemplate

const BlogWrap = styled.section`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 3fr 1.25fr;
    gap: 2rem;
    align-items: flex-start;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 3fr 1fr;
  }
`
const BlogContent = styled.div`
  padding: 1.5rem;
  background: ${theme.themeWhite};
  box-shadow: ${theme.shadow};

  h2 {
    margin: 2rem 0 0.5rem;
  }

  .blog-img {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 2rem;
  }
`

const ImageWrap = styled.div`
  position: relative;
  line-height: 0;

  .project-img {
    margin-bottom: 2rem;
  }

  p {
    position: absolute;
    font-family: ${theme.fontPrimary};
    padding: 1.25rem;
    background: ${theme.accentColor};
    color: ${theme.primaryColor};
    top: 0;
    left: 0;
  }
`
