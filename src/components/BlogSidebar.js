import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { theme } from "../styles/theme"
import { RiBuilding2Line } from "react-icons/ri"
import FollowUs from "./FollowUs"

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
          strapiId
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
            <Link
              to={`/blog/${item.slug}`}
              key={item.strapiId}
              className="sidebar-link"
            >
              {item.title} {">>"}
            </Link>
          )
        })}
      </SidebarArticles>
      <FollowUs />
    </SidebarWrap>
  )
}

export default BlogSidebar

const SidebarWrap = styled.div`
  position: sticky;
  top: 25px;
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
    box-shadow: ${theme.shadow};
  }
`
const SidebarArticles = styled.div`
  h4 {
    margin: 2rem 0 1rem;
  }

  .sidebar-link {
    display: block;
    margin-bottom: 1rem;
    color: ${theme.textColor};

    &:hover {
      color: ${theme.primaryColor};
    }
  }
`
