import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Blog from "./Blog"
import BlogSidebar from "./BlogSidebar"
import { theme } from "../styles/theme"

const BlogsComp = ({
  blogs,
  // pageContext,
  // isFirst,
  // isLast,
  // prevPage,
  // nextPage,
}) => {
  // const { currentPage, blogPages } = pageContext

  // const isFirst = currentPage === 1
  // const isLast = currentPage === blogPages
  // const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  // const nextPage = (currentPage + 1).toString()
  return (
    <div className="container">
      <BlogsContainer>
        <BlogsGrid>
          {blogs.map(blog => {
            return <Blog {...blog} />
          })}
        </BlogsGrid>
        <BlogSidebar />
      </BlogsContainer>
    </div>
  )
}

export default BlogsComp

const BlogsContainer = styled.section`
  padding-bottom: 2rem;

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
