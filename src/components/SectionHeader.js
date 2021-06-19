import React from "react"
import styled from "styled-components"

const SectionHeader = ({ title, description }) => {
  return (
    <SectionHeaderWrap>
      <h2>{title}</h2>
      <p>{description}</p>
    </SectionHeaderWrap>
  )
}

export default SectionHeader

const SectionHeaderWrap = styled.div`
  text-align: center;
  padding: 1rem 0 2rem;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`
