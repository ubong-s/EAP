import React from "react"
import styled from "styled-components"
import Blog from "./Blog"
import BlogSidebar from "./BlogSidebar"

const BlogsComp = ({ blogs }) => {
  return (
    <div className="container">
      <BlogsContainer>
        <BlogsGrid>
          {blogs.map(blog => {
            return <Blog key={blog.strapiId} {...blog} />
          })}
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
