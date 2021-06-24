import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import AboutSection from "../components/AboutSection"
import CallToAction from "../components/CallToAction"
import Team from "../components/Team"
import HomeBlogComp from "../components/HomeBlogComp"
import ProjectsComp from "../components/ProjectsComp"

const Home = ({ data }) => {
  const { blogs, services, projects } = data
  return (
    <Layout>
      <Seo title="Home" description="This is our Home page" />
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        excepturi reiciendis. Accusantium porro culpa minima tempora qui maxime
      </p>
      <AboutSection
        // img={AboutHero}
        title={`We're Building Everything!`}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ab! Sint animi similique adipisci facere nostrum illo id et, repellendus vitae odit placeat, quidem debitis numquam quisquam aut iure cumque suscipit voluptate. Vitae alias animi voluptatum dicta, ullam magni, sapiente labore sit, quo nobis ut ab ex nesciunt assumenda consectetur? Eius magni animi id provident alias, quis temporibus quas vitae?"
        buttonLabel="Find Out More"
        buttonLink="/contact"
      />
      <Team />
      <ProjectsComp
        projects={projects.nodes}
        allBtn={true}
        sectionHeader={true}
      />
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
        date(formatString: "MMMM Do")
        description
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, height: 350, width: 500)
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
              gatsbyImageData(layout: CONSTRAINED, height: 600)
            }
          }
        }
      }
    }
  }
`

export default Home
