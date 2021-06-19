import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { theme } from "../styles/theme"

const Career = ({ strapiId, position, details, date }) => {
  return (
    <CareerWrap key={strapiId}>
      <p className="date">{date}</p>
      <div className="info">
        <h3>{position}</h3>
        <p>{details}</p>
      </div>
      <Link to="/contact">
        <button className="btn">Apply</button>
      </Link>
    </CareerWrap>
  )
}

export default Career

const CareerWrap = styled.article`
  position: relative;
  background-color: ${theme.themeWhite};
  padding: 1.5rem;
  margin-bottom: 2rem;

  .date {
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    font-size: 0.9rem;
    font-family: ${theme.fontPrimary};
    background-color: ${theme.accentColor};
    padding: 0.25rem 0.75rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 1024px) {
      right: unset;
      left: 0;
      font-size: 0.85rem;
    }
  }

  h3 {
    margin-top: 1rem;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 3rem;
    align-items: center;

    p {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1100px) {
    gap: 5rem;
  }

  @media screen and (min-width: 1200px) {
    gap: 10rem;
  }
`
