import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from "../styles/theme"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PageHero from "../components/PageHero"
import ProjectsSidebar from "../components/ProjectsSidebar"
import ReactMarkdown from "react-markdown"
import { ProjectNavigator } from "../components/ProjectNavigator"

const projectTemplate = ({ data, pageContext }) => {
  const { title, description, image, slug } = data.project
  const featImage = image.localFile.publicURL
  return (
    <Layout>
      <Seo title={title} description={description} />
      <PageHero title={title} backgroundImg={featImage} />
      <div className="container">
        <ProjectWrap>
          <ProjectContent>
            <article>
              {/* <GatsbyImage
                className="project-img"
                image={featuredImage.localFile.childImageSharp.gatsbyImageData}
                alt={featuredImage.alternativeText}
              /> */}
              <h2>{title}</h2>
              {/* <ReactMarkdown children={content} /> */}
              <ProjectNavigator pageContext={pageContext} />
            </article>
          </ProjectContent>
          <ProjectsSidebar />
        </ProjectWrap>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
      title
      description
      slug
      image {
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

export default projectTemplate

const ProjectWrap = styled.section`
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
const ProjectContent = styled.div`
  padding: 1.5rem;
  background: ${theme.themeWhite};

  h2 {
    margin: 2rem 0 0.5rem;
  }

  .time {
    margin-bottom: 2rem;
    font-family: ${theme.fontPrimary};
    color: ${theme.textColor};
    opacity: 0.7;
  }

  .project-img {
    margin-bottom: 2rem;
  }
`
