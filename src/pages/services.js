import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import ServicesHero from "../images/pageHero/services.jpg"
import Seo from "../components/SEO"
import ServicesComp from "../components/ServicesComp"
import { graphql } from "gatsby"

const Services = ({
  data: {
    allStrapiServices: { nodes: allServices },
  },
}) => {
  return (
    <Layout>
      <Seo title="Services" description="This is our Services page" />
      <PageHero title="Services" backgroundImg={ServicesHero} />
      <ServicesComp services={allServices} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiServices {
      nodes {
        strapiId
        title
        description
        slug
        image {
          alternativeText
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

export default Services
