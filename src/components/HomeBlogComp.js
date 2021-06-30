import React from "react"
import styled from "styled-components"
import Blog from "./Blog"
import SectionHeader from "./SectionHeader"
import MoreBtn from "./MoreBtn"

const HomeBlogComp = ({ blogs }) => {
  return (
    <div className="container">
      <BlogsContainer>
        <SectionHeader
          title="Latest Articles"
          description="Ab placeat, obcaecati molestiae id libero at voluptatem voluptatibus quo eum veniam quos officiis, laborum itaque voluptates pariatur ratione soluta fugiat!"
          pageLink="/blog"
          linkText="View All Articles"
        />
        <BlogsGrid
          data-sal="slide-up"
          data-sal-duration="10000ms"
          data-sal-delay="300"
          data-sal-easing="ease-out-sine"
        >
          {blogs.map(blog => {
            return <Blog {...blog} altL={true} />
          })}
        </BlogsGrid>
        <MoreBtn address="/blog" btnText="View All Articles" />
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
