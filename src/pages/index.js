import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import AboutSection from "../components/AboutSection"
import CallToAction from "../components/CallToAction"
import Team from "../components/Team"
import HomeBlogComp from "../components/HomeBlogComp"
import ProjectsComp from "../components/ProjectsComp"
import HomeSlider from "../components/HomeSlider"
import HomeServices from "../components/HomeServices"
import HomeBG from "../images/homeSlider/home-slider-5.jpg"
import Commitment from "../components/Commitment"

const Home = ({ data }) => {
  const { blogs, services, projects, slides } = data

  return (
    <Layout>
      <Seo title="Home" description="This is our Home page" />
      <HomeSlider slides={slides.nodes} />
      <AboutSection
        img={HomeBG}
        title={`We're Building Everything!`}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ab! Sint animi similique adipisci facere nostrum illo id et, repellendus vitae odit placeat, quidem debitis numquam quisquam aut iure cumque suscipit voluptate. Vitae alias animi voluptatum dicta, ullam magni, sapiente labore sit, quo nobis ut ab ex nesciunt assumenda consectetur? Eius magni animi id provident alias, quis temporibus quas vitae?"
        buttonLabel="Find Out More"
        buttonLink="/contact"
        imgEnd={true}
        shadow={false}
      />
      <HomeServices services={services.nodes} />
      <Team />
      <Commitment />
      <ProjectsComp
        projects={projects.nodes}
        allBtn={true}
        sectionHeader={true}
      />
      <HomeBlogComp blogs={blogs.nodes} />
      <CallToAction backgroundImg={HomeBG} />
    </Layout>
  )
}

export const query = graphql`
  {
    slides: allStrapiSlides {
      nodes {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        title
        description
      }
    }
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
