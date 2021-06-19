import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Blog from "./Blog"
import BlogSidebar from "./BlogSidebar"
import { theme } from "../styles/theme"
import SectionHeader from "./SectionHeader"

const HomeBlogComp = ({ blogs }) => {
  return (
    <div className="container">
      <BlogsContainer>
        <SectionHeader
          title="Latest Articles"
          description="Ab placeat, obcaecati molestiae id libero at voluptatem voluptatibus quo eum veniam quos officiis, laborum itaque voluptates pariatur ratione soluta fugiat!"
        />
        <BlogsGrid>
          {blogs.map(blog => {
            return <Blog {...blog} grid={true} />
          })}
        </BlogsGrid>
        <Link to="/blog">
          <button className="btn">Read More</button>
        </Link>
      </BlogsContainer>
    </div>
  )
}

export default HomeBlogComp

const BlogsContainer = styled.section``

const BlogsGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
