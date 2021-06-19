import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { theme } from "../styles/theme"

const TemplateListNav = ({ isFirst, isLast, prevPage, nextPage, pageLink }) => {
  return (
    <TemplateListWrap>
      <div className="container">
        {!isFirst && (
          <Link to={`/${pageLink}/${prevPage}`} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={`/${pageLink}/${nextPage}`} rel="next">
            Next Page →
          </Link>
        )}
      </div>
    </TemplateListWrap>
  )
}

export default TemplateListNav

const TemplateListWrap = styled.div`
  padding-bottom: 4rem;

  @media screen and (min-width: 1024px) {
    padding-bottom: 7rem;
  }

  a {
    display: inline-block;
    margin-bottom: 1rem;
    margin-right: 1rem;
    background: ${theme.primaryColor};
    color: ${theme.themeWhite};
    padding: 0.7rem 1rem;
    /* font-size: 12px; */
    font-weight: 700;

    &:hover {
      background: ${theme.accentColor};
      color: ${theme.primaryColor};
      transition: ${theme.transitionEase};
    }
  }
`
