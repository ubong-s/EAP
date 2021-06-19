import React from "react"
import { graphql } from "gatsby"
import CallToAction from "../components/CallToAction"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import Seo from "../components/SEO"
import CareersHero from "../images/pageHero/careers.jpg"
import CareersComp from "../components/CareersComp"

const careers = ({
  data: {
    allStrapiJobs: { nodes: allJobs },
  },
}) => {
  return (
    <Layout>
      <Seo title="Careers" description="This is the careers page" />
      <PageHero title="Careers" backgroundImg={CareersHero} />
      <CareersComp jobs={allJobs} />
      <CallToAction
        title="Ask about available positions"
        buttonText="Enquire"
        backgroundImg={CareersHero}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiJobs {
      nodes {
        strapiId
        position
        details
        date: published_at(fromNow: true)
      }
    }
  }
`

export default careers
