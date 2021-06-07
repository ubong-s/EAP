import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import AboutHero from "../images/pageHero/about.jpg"
import Seo from "../components/SEO"

const About = () => {
  return (
    <Layout>
      <Seo title="About Us" description="This is the about us page" />
      <PageHero title="About" backgroundImg={AboutHero} />
    </Layout>
  )
}

export default About
