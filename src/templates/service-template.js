import React from "react"
import { graphql, Link } from "gatsby"
import { FaPlus, FaChevronLeft } from "react-icons/fa"
import { theme } from "../styles/theme"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PageHero from "../components/PageHero"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import CallToAction from "../components/CallToAction"

const ServiceTemplate = ({ data }) => {
  const { content, title, description, image } = data.service
  // const { content, title, description, image } = data.allStrapiServices
  const featImage = image.localFile.publicURL
  console.log(data.allStrapiServices.nodes)

  return (
    <Layout>
      <Seo title={title} description={description} />
      <PageHero title={title} backgroundImg={featImage} />
      <ServicesSection>
        <div className="container">
          <div className="back-link">
            <Link to="/services">
              <span>
                <FaChevronLeft />
              </span>{" "}
              Back to Services
            </Link>
          </div>
          <ServiceWrap>
            <ServicesMenu>
              {data.allStrapiServices.nodes.map(service => {
                const { strapiId, slug, serviceTitle } = service
                return (
                  <Link
                    to={`/services/${slug}`}
                    key={strapiId}
                    activeClassName="active"
                  >
                    <span>
                      <FaPlus />
                    </span>{" "}
                    {serviceTitle}
                  </Link>
                )
              })}
            </ServicesMenu>
            <ServicesContent>
              <article>
                <ReactMarkdown children={content} />
              </article>
            </ServicesContent>
          </ServiceWrap>
        </div>
      </ServicesSection>
      <CallToAction
        title={`Contact us for your ${title} project`}
        backgroundImg={featImage}
        buttonText="Get In Touch"
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    service: strapiServices(slug: { eq: $slug }) {
      title
      content
      description
      image {
        localFile {
          publicURL
        }
      }
    }
    allStrapiServices(
      filter: { strapiId: {} }
      sort: { fields: strapiId, order: ASC }
    ) {
      nodes {
        strapiId
        serviceTitle: title
        slug
      }
    }
  }
`

export default ServiceTemplate

const ServicesSection = styled.section`
  .back-link {
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    text-align: right;
    display: inline-block;

    a {
      display: flex;
      align-items: center;
      color: ${theme.primaryColor};
      cursor: pointer;
      transition: ${theme.transitionEase};
      font-size: 1rem;

      &:hover {
        color: ${theme.accentColor};
      }

      span {
        display: block;
        line-height: 0;
        font-size: 0.75rem;
        margin-right: 0.5rem;
      }
    }
  }
`

const ServiceWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.25fr 3fr;
    gap: 2rem;
    align-items: flex-start;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 3fr;
  }
`
const ServicesMenu = styled.div`
  display: none;
  position: sticky;
  top: 25px;

  @media screen and (min-width: 768px) {
    display: grid;
    padding: 1.5rem;
    gap: 1rem;
    background: ${theme.themeWhite};

    a {
      display: flex;
      align-items: center;
      background: ${theme.primaryColor};
      color: ${theme.themeWhite};
      padding: 1rem;
      cursor: pointer;
      transition: ${theme.transitionEase};
      font-size: 0.9rem;

      @media screen and (min-width: 1024px) {
        font-size: 1rem;
      }

      &:hover {
        background: ${theme.accentColor};
        color: ${theme.primaryColor};
      }

      span {
        display: none;
      }
    }
    .active {
      background: ${theme.accentColor};
      color: ${theme.primaryColor};
    }

    @media screen and (min-width: 1024px) {
      a {
        span {
          display: block;
          line-height: 0;
          font-size: 0.75rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
`
const ServicesContent = styled.div`
  padding: 1.5rem;
  background: ${theme.themeWhite};
`
