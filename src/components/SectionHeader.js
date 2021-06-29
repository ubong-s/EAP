import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SectionHeader = ({ title, description, pageLink, linkText }) => {
  return (
    <SectionHeaderWrap>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {pageLink && (
        <div className="btn-div">
          <Link to={pageLink}>
            <button className="btn">{linkText}</button>
          </Link>
        </div>
      )}
    </SectionHeaderWrap>
  )
}

export default SectionHeader

const SectionHeaderWrap = styled.div`
  /* text-align: center; */
  padding: 1rem 0 2rem;

  .btn-div {
    display: none;
    justify-self: end;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .btn-div {
      display: block;
      justify-self: end;
    }
  }
`
