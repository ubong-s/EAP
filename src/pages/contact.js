import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import ContactHero from "../images/pageHero/contact.jpg"
import Seo from "../components/SEO"
import styled from "styled-components"
import Form from "../components/Form"
import Locations from "../components/Locations"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" description="This is our Contact page" />
      <PageHero title="Contact" backgroundImg={ContactHero} />

      <ContactSection>
        <div className="container">
          <Locations />
          <Form />
        </div>
      </ContactSection>
    </Layout>
  )
}

export default Contact

const ContactSection = styled.section`
  .container {
    display: grid;
    gap: 2rem;
    grid-template-areas:
      "form"
      "locations";

    @media screen and (min-width: 1024px) {
      grid-template-columns: 1fr 2fr;
      grid-template-areas: "locations form";
    }
  }
`
