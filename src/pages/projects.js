import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import ProjectsHero from "../images/pageHero/projects.jpg"
import Seo from "../components/SEO"
import ProjectsComp from "../components/ProjectsComp"

const Projects = ({
  data: {
    allStrapiProjects: { nodes: allProjects },
  },
}) => {
  return (
    <Layout>
      <Seo title="Projects" description="This is our Projects page" />
      <PageHero title="Projects" backgroundImg={ProjectsHero} />
      <ProjectsComp projects={allProjects} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        title
        slug
        strapiId
        featuredImage {
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
export default Projects
