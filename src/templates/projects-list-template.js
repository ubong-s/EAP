import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import ProjectsHero from "../images/pageHero/projects.jpg"
import Seo from "../components/SEO"
import ProjectsComp from "../components/ProjectsComp"

const ProjectsList = ({
  data: {
    allStrapiProjects: { nodes: allProjects },
  },
  pageContext,
}) => {
  return (
    <Layout>
      <Seo title="Projects" description="This is our Projects page" />
      <PageHero title="Projects" backgroundImg={ProjectsHero} />
      <ProjectsComp projects={allProjects} pageContext={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query projectListQuery($skip: Int, $limit: Int) {
    allStrapiProjects(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
export default ProjectsList
