import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { theme } from "../styles/theme"

export const PostNavigator = ({ pageContext }) => {
  const { previous, next } = pageContext
  console.log(pageContext)

  return (
    <Navigator>
      <li>
        {previous && (
          <Link to={`/blog/${previous.slug}`} rel="prev">
            ← {previous.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={`/blog/${next.slug}`} rel="next">
            {next.title} →
          </Link>
        )}
      </li>
    </Navigator>
  )
}

const Navigator = styled.ul`
  margin: 40px 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    margin-bottom: 12px;
  }

  a {
    background: ${theme.primaryColor};
    color: ${theme.themeWhite};
    padding: 0.7rem 1rem;
    font-size: 12.5px;
  }
`
