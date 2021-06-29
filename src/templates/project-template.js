import React, { useState } from "react"
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
import ProjectImageModal from "../components/ProjectImageModal"

const ProjectTemplate = ({ data, pageContext }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
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
  const indexImage =
    gallery[modalImageIndex].localFile.childImageSharp.gatsbyImageData

  const nextImage = () => {
    if (modalImageIndex >= gallery.length - 1) {
      setModalImageIndex(0)
    } else {
      setModalImageIndex(modalImageIndex + 1)
    }
  }
  const prevImage = () => {
    if (modalImageIndex <= 0) {
      setModalImageIndex(gallery.length - 1)
    } else {
      setModalImageIndex(modalImageIndex - 1)
    }
  }

  console.log(gallery.length - 1, modalImageIndex)

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
                    const selectGalleryImage = () => {
                      setModalImageIndex(index)
                      setModalOpen(true)
                    }

                    return (
                      <GatsbyImage
                        key={index}
                        className="gallery-img"
                        image={item.localFile.childImageSharp.gatsbyImageData}
                        alt={title}
                        onClick={selectGalleryImage}
                      />
                    )
                  })}
                  <ProjectImageModal
                    indexImage={indexImage}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    nextImage={nextImage}
                    prevImage={prevImage}
                  />
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

export default ProjectTemplate

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
  box-shadow: ${theme.shadow};

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
  grid-template-columns: repeat(2, 1fr);

  .gallery-img {
    position: relative;
    cursor: pointer;
    padding: 2rem;
    box-shadow: ${theme.shadow};

    &::after {
      content: "";
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.themeWhite};
      font-weight: 700;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20%;
      transition: ${theme.transitionEase};
      cursor: auto;
    }

    &:hover {
      &::after {
        content: "View";
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
