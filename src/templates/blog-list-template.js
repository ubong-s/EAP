import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import BlogHero from "../images/pageHero/blog.jpg"
import Seo from "../components/SEO"
import BlogsComp from "../components/BlogsComp"
// import styled from "styled-components"
// import { theme } from "../styles/theme"
import TemplateListNav from "../components/templateListNav"

const BlogList = ({
  data: {
    allStrapiBlogs: { nodes: allBlogs },
  },
  pageContext,
}) => {
  const { currentPage, blogPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === blogPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  return (
    <Layout>
      <Seo title="Blog" description="This is the Blog page" />
      <PageHero title="Blog" backgroundImg={BlogHero} />
      <BlogsComp blogs={allBlogs} pageContext={pageContext} />
      {/* <BlogListNav
        pageContext={pageContext}
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      >
        <div className="container">
          {!isFirst && (
            <Link to={`/blog/${prevPage}`} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link to={`/blog/${nextPage}`} rel="next">
              Next Page →
            </Link>
          )}
        </div>
      </BlogListNav> */}
      <TemplateListNav
        pageContext={pageContext}
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
        pageLink="blog"
      />
    </Layout>
  )
}

export const query = graphql`
  query blogListQuery($skip: Int, $limit: Int) {
    allStrapiBlogs(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
        date(formatString: "MMM Do ")
      }
    }
  }
`

export default BlogList
