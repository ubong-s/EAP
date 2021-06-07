import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import ProjectsHero from "../images/pageHero/projects.jpg"
import Seo from "../components/SEO"

const Projects = () => {
  return (
    <Layout>
      <Seo title="Projects" description="This is our Projects page" />
      <PageHero title="Projects" backgroundImg={ProjectsHero} />
    </Layout>
  )
}

export default Projects
