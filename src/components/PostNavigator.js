import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { theme } from "../styles/theme"

export const PostNavigator = ({ pageContext, subLink }) => {
  const { previous, next } = pageContext

  return (
    <Navigator>
      <li className="prev">
        {previous && (
          <Link to={`/${subLink}/${previous.slug}`} rel="prev">
            ← {previous.title}
          </Link>
        )}
      </li>
      <li className="next">
        {next && (
          <Link to={`/${subLink}/${next.slug}`} rel="next">
            {next.title} →
          </Link>
        )}
      </li>
    </Navigator>
  )
}

const Navigator = styled.ul`
  margin: 40px 0 0;
  padding: 0;

  .prev {
    text-align: left;
  }

  .next {
    text-align: right;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }

  a {
    display: inline-block;
    margin-bottom: 1rem;
    background: ${theme.primaryColor};
    color: ${theme.themeWhite};
    padding: 0.7rem 1rem;
    font-size: 14px;

    &:hover {
      background: ${theme.accentColor};
      color: ${theme.primaryColor};
      transition: ${theme.transitionEase};
    }
  }
`
