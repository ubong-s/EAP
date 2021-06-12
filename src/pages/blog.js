import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import BlogHero from "../images/pageHero/blog.jpg"
import Seo from "../components/SEO"
import BlogsComp from "../components/BlogsComp"
import { graphql } from "gatsby"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: allBlogs },
  },
}) => {
  return (
    <Layout>
      <Seo title="Blog" description="This is the Blog page" />
      <PageHero title="Blog" backgroundImg={BlogHero} />
      <BlogsComp blogs={allBlogs} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs(sort: { order: DESC, fields: date }) {
      nodes {
        strapiId
        title
        description
        slug
        featuredImage {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        date
      }
    }
  }
`

export default Blog
