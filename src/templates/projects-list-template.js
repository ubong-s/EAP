import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import ProjectsHero from "../images/pageHero/projects.jpg"
import Seo from "../components/SEO"
import ProjectsComp from "../components/ProjectsComp"
import TemplateListNav from "../components/templateListNav"

const ProjectsList = ({
  data: {
    allStrapiProjects: { nodes: allProjects },
  },
  pageContext,
}) => {
  const { currentPage, projectsPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === projectsPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <Seo title="Projects" description="This is our Projects page" />
      <PageHero title="Projects" backgroundImg={ProjectsHero} />
      <ProjectsComp projects={allProjects} pageContext={pageContext} />
      <TemplateListNav
        pageContext={pageContext}
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
        pageLink="projects"
      />
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
              gatsbyImageData(layout: CONSTRAINED, height: 600)
            }
          }
        }
      }
    }
  }
`
export default ProjectsList
