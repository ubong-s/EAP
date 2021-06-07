import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import ContactHero from "../images/pageHero/contact.jpg"
import Seo from "../components/SEO"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" description="This is our Contact page" />
      <PageHero title="Contact" backgroundImg={ContactHero} />
    </Layout>
  )
}

export default Contact
