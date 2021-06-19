import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Project from "./Project"
import { theme } from "../styles/theme"

const ProjectsComp = ({ projects, pageContext }) => {
  const { currentPage, projectsPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === projectsPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  return (
    <div className="container">
      <ProjectsContainer>
        <ProjectsGrid>
          {projects.map(project => {
            return <Project {...project} />
          })}
        </ProjectsGrid>
        <ProjectsListNav>
          {!isFirst && (
            <Link to={`/projects/${prevPage}`} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link to={`/projects/${nextPage}`} rel="next">
              Next Page →
            </Link>
          )}
        </ProjectsListNav>
      </ProjectsContainer>
    </div>
  )
}

export default ProjectsComp

const ProjectsContainer = styled.section`
  @media screen and (min-width: 1024px) {
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const ProjectsListNav = styled.div`
  margin-top: 3rem;

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
