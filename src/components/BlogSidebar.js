import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { theme } from "../styles/theme"
import { RiBuilding2Line } from "react-icons/ri"
import { BiChevronsRight } from "react-icons/bi"

const BlogSidebar = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
      allStrapiBlogs(limit: 5, sort: { order: DESC, fields: date }) {
        nodes {
          title
          description
          slug
        }
      }
    }
  `)
  return (
    <SidebarWrap>
      <div className="logo">
        <RiBuilding2Line className="icon" /> eap
      </div>
      <p>{data.site.siteMetadata.description}</p>

      <SidebarArticles>
        <h4>Recent Articles</h4>
        {data.allStrapiBlogs.nodes.map(item => {
          return (
            <Link to={`/blog/${item.slug}`} className="sidebar-link">
              {item.title} {">>"}
            </Link>
          )
        })}
      </SidebarArticles>
    </SidebarWrap>
  )
}

export default BlogSidebar

const SidebarWrap = styled.div`
  display: none;

  .logo {
    display: flex;
    align-items: center;
    font-family: ${theme.fontPrimary};
    font-size: 2rem;
    color: ${theme.primaryColor};
    margin-bottom: 1rem;

    .icon {
      margin-right: 0.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    display: block;
    background-color: ${theme.themeWhite};
    padding: 1.5rem;
  }
`
const SidebarArticles = styled.div`
  h4 {
    margin: 2rem 0 1rem;
  }

  .sidebar-link {
    display: block;
    font-size: 0.9rem;
    color: ${theme.textColor};
    margin-bottom: 1rem;

    &:hover {
      color: ${theme.primaryColor};
    }
  }
`
