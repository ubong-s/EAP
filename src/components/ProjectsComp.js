import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Project from "./Project"
import { theme } from "../styles/theme"

const ProjectsComp = ({ projects, pageContext }) => {
  return (
    <div className="container">
      <ProjectsContainer>
        <ProjectsGrid>
          {projects.map(project => {
            return <Project {...project} />
          })}
        </ProjectsGrid>
      </ProjectsContainer>
    </div>
  )
}

export default ProjectsComp

const ProjectsContainer = styled.section`
  /* padding-bottom: rem; */

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
