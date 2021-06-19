import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from "../styles/theme"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PageHero from "../components/PageHero"
import ProjectsSidebar from "../components/ProjectsSidebar"
import { PostNavigator } from "../components/PostNavigator"
import CallToAction from "../components/CallToAction"

const projectTemplate = ({ data, pageContext }) => {
  const {
    title,
    details,
    featuredImage,
    date,
    projectType,
    client,
    gallery,
  } = data.project
  const featImage = featuredImage.localFile.publicURL
  console.log(featImage)
  return (
    <Layout>
      <Seo title={title} description={details} />
      <PageHero title={title} backgroundImg={featImage} />
      <div className="container">
        <ProjectWrap>
          <ProjectContent>
            <article>
              <ImageWrap>
                <GatsbyImage
                  className="project-img"
                  image={
                    featuredImage.localFile.childImageSharp.gatsbyImageData
                  }
                  alt={title}
                />
                <p className="date">{date}</p>
              </ImageWrap>
              <ProjectInfo>
                <h3>Project Details</h3>
                <p>{details}</p>
              </ProjectInfo>
              <ProjectInfoGrid>
                <div>
                  <h4>Project Type</h4>
                  <p>{projectType}</p>
                </div>
                <div>
                  <h4>Client</h4>
                  <p>{client}</p>
                </div>
              </ProjectInfoGrid>
              <Gallery>
                <h4>Gallery</h4>
                <GalleryGrid>
                  {gallery.map((item, index) => {
                    return (
                      <GatsbyImage
                        className="gallery-img"
                        key={index}
                        image={item.localFile.childImageSharp.gatsbyImageData}
                      />
                    )
                  })}
                </GalleryGrid>
              </Gallery>
              <PostNavigator pageContext={pageContext} subLink="projects" />
            </article>
          </ProjectContent>
          <ProjectsSidebar />
        </ProjectWrap>
      </div>
      <CallToAction
        title={`Contact us for your project`}
        backgroundImg={featImage}
        buttonText="Get In Touch"
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
      title
      details
      slug
      projectType
      client
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
      gallery {
        localFile {
          childImageSharp {
            gatsbyImageData
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
    gap: 2rem;
    align-items: flex-start;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 3fr 1fr;
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

const ProjectContent = styled.div`
  padding: 1.5rem;
  background: ${theme.themeWhite};

  h2 {
    margin: 3rem 0 0.5rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 2rem;
  }
`

const ProjectInfo = styled.div`
  h3 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }
`

const ProjectInfoGrid = styled.div`
  padding: 1rem 0;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
const Gallery = styled.div`
  margin-top: 1rem;

  h4 {
    margin-bottom: 1rem;
  }
`
const GalleryGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  .gallery-img {
    cursor: pointer;
    padding: 2rem;
    box-shadow: ${theme.shadow};
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
