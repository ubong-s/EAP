import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from "../styles/theme"
import styled from "styled-components"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import PartnersHero from "../images/pageHero/partners.jpg"
import Seo from "../components/SEO"

const Partners = ({ data }) => {
  return (
    <Layout>
      <Seo title="Partners" description="This is the partners page" />
      <PageHero title="Partners" backgroundImg={PartnersHero} />
      <section>
        <div className="container">
          <PartnersGrid>
            {data.allStrapiPartners.nodes.map(partner => {
              const { name, description, image, strapiId: id } = partner
              return (
                <Partner key={id}>
                  <div className="image">
                    <GatsbyImage
                      image={image.localFile.childImageSharp.gatsbyImageData}
                    />
                  </div>

                  <div className="info">
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </div>
                </Partner>
              )
            })}
          </PartnersGrid>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { relativePath: { eq: "pageHero/partners.jpg" } }) {
      edges {
        node {
          relativePath
          name
        }
      }
    }

    allStrapiPartners {
      nodes {
        strapiId
        name
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

export default Partners

const PartnersGrid = styled.div`
  display: grid;
  gap: 3rem;

  @media screen and (min-width: 1024px) {
    gap: 4rem;
  }
`

const Partner = styled.article`
  background: ${theme.themeWhite};
  box-shadow: ${theme.shadow};
  padding: 2rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.75fr 4.5fr;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1.15fr 4fr;
  }

  .info {
    /* background: #f2fffa; */
    padding: 2rem 0 1rem;

    @media screen and (min-width: 768px) {
      padding: 0 2rem;
    }

    h4 {
      font-size: 1.35rem;
      margin-bottom: 0.5rem;
    }
  }
`
