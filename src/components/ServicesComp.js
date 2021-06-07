import React from "react"
import styled from "styled-components"
import Service from "./Service"

const ServicesComp = ({ services, showLink }) => {
  return (
    <div className="container">
      <ServicesGrid>
        {services.map(service => {
          return <Service key={service.strapiId} {...service} />
        })}
      </ServicesGrid>
    </div>
  )
}

export default ServicesComp

const ServicesGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
