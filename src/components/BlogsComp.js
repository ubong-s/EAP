import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Blog from "./Blog"
import BlogSidebar from "./BlogSidebar"
import { theme } from "../styles/theme"

const BlogsComp = ({ blogs, pageContext }) => {
  const { currentPage, blogPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === blogPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  return (
    <div className="container">
      <BlogsContainer>
        <BlogsGrid>
          {blogs.map(blog => {
            return <Blog {...blog} />
          })}
          <BlogListNav>
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
          </BlogListNav>
        </BlogsGrid>
        <BlogSidebar />
      </BlogsContainer>
    </div>
  )
}

export default BlogsComp

const BlogsContainer = styled.section`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
    align-items: flex-start;
  }
`

const BlogsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
  }
`
const BlogListNav = styled.div`
  a {
    display: inline-block;
    margin-bottom: 1rem;
    margin-right: 1rem;
    background: ${theme.primaryColor};
    color: ${theme.themeWhite};
    padding: 0.7rem 1rem;
    font-size: 12px;

    &:hover {
      background: ${theme.accentColor};
      color: ${theme.primaryColor};
      transition: ${theme.transitionEase};
    }
  }
`
