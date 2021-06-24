import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import ContactHero from "../images/pageHero/contact.jpg"
import Seo from "../components/SEO"
import styled from "styled-components"
import Form from "../components/Form"
import Locations from "../components/Locations"
import WrappedMap from "../components/Map"

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
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?&key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
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
