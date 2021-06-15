import React from "react"
import styled from "styled-components"
import Project from "./Project"

const ProjectsComp = ({ projects }) => {
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
