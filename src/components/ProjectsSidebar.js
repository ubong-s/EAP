import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { theme } from "../styles/theme"
import { RiBuilding2Line } from "react-icons/ri"
import FollowUs from "./FollowUs"

const ProjectsSidebar = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
      allStrapiProjects {
        nodes {
          title
          details
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
        <h4>Other Projects</h4>
        {data.allStrapiProjects.nodes.map(item => {
          return (
            <Link to={`/projects/${item.slug}`} className="sidebar-link">
              {item.title} {">>"}
            </Link>
          )
        })}
      </SidebarArticles>
      <FollowUs />
    </SidebarWrap>
  )
}

export default ProjectsSidebar

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
