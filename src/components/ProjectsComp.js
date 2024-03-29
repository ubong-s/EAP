import React from "react"
import styled from "styled-components"
import Project from "./Project"
import SectionHeader from "./SectionHeader"
import MoreBtn from "./MoreBtn"

const ProjectsComp = ({ projects, allBtn, sectionHeader }) => {
  return (
    <div className="container">
      <ProjectsContainer>
        {sectionHeader && (
          <SectionHeader
            title="Latest Projects"
            description="Enim nulla rem labore, omnis similique id, unde sint officiis voluptates at beatae. Laudantium dolore accusantium tenetur accusamus."
            pageLink="/projects"
            linkText="View All Projects"
          />
        )}
        <ProjectsGrid
          data-sal="slide-up"
          data-sal-duration="10000ms"
          data-sal-delay="300"
          data-sal-easing="ease-out-sine"
        >
          {projects.map(project => {
            return <Project {...project} />
          })}
        </ProjectsGrid>
        {allBtn && <MoreBtn btnText="View All Projects" address="/projects" />}
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

  /* @media screen and (min-width: 768px) {
    width: 60%;
    margin: auto;
  } */
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    /* width: 100%; */
  }
`
