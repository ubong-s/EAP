import React from "react"
import Career from "./Career"
import SectionHeader from "./SectionHeader"
import styled from "styled-components"

const CareersComp = ({ jobs }) => {
  return (
    <div className="container">
      <section>
        <SectionHeader
          title="Check our open positions"
          description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          provident quia cupiditate pariatur dolorum consequuntur voluptates
          earum optio ipsa ratione."
        />
        <CareersGrid>
          {jobs.map(job => {
            return <Career {...job} />
          })}
        </CareersGrid>
      </section>
    </div>
  )
}

export default CareersComp

const CareersGrid = styled.div`
  @media screen and (min-width: 768px) {
    width: 90%;
    margin: auto;
  }

  @media screen and (min-width: 1024px) {
    width: 85%;
    margin: auto;
  }

  @media screen and (min-width: 1200px) {
    width: 75%;
    margin: auto;
  }
`
