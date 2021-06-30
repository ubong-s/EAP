import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import AboutHero from "../images/pageHero/about.jpg"
import Seo from "../components/SEO"
import CallToAction from "../components/CallToAction"
import AboutSection from "../components/AboutSection"
import Team from "../components/Team"

const About = () => {
  return (
    <Layout>
      <Seo title="About Us" description="This is the about us page" />
      <PageHero title="About" backgroundImg={AboutHero} />
      <AboutSection
        img={AboutHero}
        title={`We're Building Everything!`}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ab! Sint animi similique adipisci facere nostrum illo id et, repellendus vitae odit placeat, quidem debitis numquam quisquam aut iure cumque suscipit voluptate. Vitae alias animi voluptatum dicta, ullam magni, sapiente labore sit, quo nobis ut ab ex nesciunt assumenda consectetur? Eius magni animi id provident alias, quis temporibus quas vitae. Blanditiis at unde fugit provident velit consequuntur repudiandae consequatur cum nobis error, autem reprehenderit laudantium voluptas amet."
        buttonLabel="Find Out More"
      />
      <AboutSection
        img={AboutHero}
        title={`Our Mission`}
        content="Blanditiis at unde fugit provident velit consequuntur repudiandae consequatur cum nobis error, autem reprehenderit laudantium voluptas amet. Consequatur necessitatibus nulla, sit est beatae natus fugiat quis dolorem nam minus voluptatibus ut, maxime odio excepturi molestias voluptatum voluptatem possimus! Ratione rem molestiae laudantium? Unde ratione officia voluptas est enim veritatis, dolorum accusantium ducimus totam deserunt?"
        buttonLabel="Check our services"
        buttonLink="/services"
        imgEnd={true}
        lightBg={true}
        shadow={true}
      />
      <Team />
      <CallToAction backgroundImg={AboutHero} />
    </Layout>
  )
}

export default About
