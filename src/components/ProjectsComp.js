import React from "react"
import styled from "styled-components"
import Project from "./Project"
import ProjectsSidebar from "./ProjectsSidebar"

const ProjectsComp = ({ projects }) => {
  return (
    <div className="container">
      <ProjectsContainer>
        <ProjectsGrid>
          {projects.map(project => {
            return <Project key={project.strapiId} {...project} />
          })}
        </ProjectsGrid>
        <ProjectsSidebar />
      </ProjectsContainer>
    </div>
  )
}

export default ProjectsComp

const ProjectsContainer = styled.section`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
    align-items: flex-start;
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
  }
`
