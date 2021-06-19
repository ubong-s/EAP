import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import CallToAction from "../components/CallToAction"
import Team from "../components/Team"
import HomeBlogComp from "../components/HomeBlogComp"
// import ProjectsComp from "../components/ProjectsComp"

const Home = ({ data }) => {
  const { blogs, services, projects } = data
  console.log(blogs, services, projects)
  return (
    <Layout>
      <Seo title="Home" description="This is our Home page" />
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        excepturi reiciendis. Accusantium porro culpa minima tempora qui maxime
      </p>
      <Team />
      {/* <ProjectsComp /> */}
      <HomeBlogComp blogs={blogs.nodes} />
      <CallToAction />
    </Layout>
  )
}

export const query = graphql`
  {
    blogs: allStrapiBlogs(limit: 3, sort: { order: DESC, fields: date }) {
      nodes {
        strapiId
        title
        slug
        date(formatString: "MMMM Do YYYY")
        description
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    services: allStrapiServices {
      nodes {
        strapiId
        slug
        title
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    projects: allStrapiProjects(limit: 3, sort: { order: DESC, fields: date }) {
      nodes {
        strapiId
        slug
        title
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default Home
