import React from "react"
import styled from "styled-components"
import { theme } from "../styles/theme"
import socialData from "../constants/socials"

const FollowUs = () => {
  return (
    <SocialWrap>
      <h4>Follow us</h4>
      <ul>
        {socialData.map((item, index) => (
          <li>
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </SocialWrap>
  )
}

export default FollowUs

const SocialWrap = styled.div`
  margin-top: 2rem;
  gap: 2rem;

  h4 {
    font-size: 18px;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    gap: 1.5rem;
  }

  a {
    color: ${theme.primaryColor};
    font-size: 1.25rem;

    &:hover {
      color: ${theme.accentColor};
    }
  }
`
