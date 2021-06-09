import React from "react"
import styled from "styled-components"
import { theme } from "../styles/theme"
import socialData from "../constants/socials"

const Locations = () => {
  return (
    <ContactLocations>
      {/* <!-- single location --> */}
      <ContactLocationsBox>
        <h4>Ontario</h4>
        <p>
          10 Monty Place <br />
          Ontario <br />
          Canada
        </p>
        <a href="tel:+011234567890">Phone: +01-123-456-79</a>
      </ContactLocationsBox>
      {/* <!-- single location end--> */}

      {/* <!-- single location --> */}
      <ContactLocationsBox>
        <h4>Vancouver</h4>
        <p>
          104 Castle Street <br />
          Vancouver <br />
          Canada
        </p>
        <a href="tel:+011234567890">Phone: +01-123-456-79</a>
      </ContactLocationsBox>
      {/* <!-- single location end--> */}

      <ContactLocationsSocial>
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
      </ContactLocationsSocial>
    </ContactLocations>
  )
}

export default Locations

const ContactLocations = styled.div`
  grid-area: locations;
  padding: 2rem;
  background-color: ${theme.themeWhite};
  /* align-self: flex-start; */

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 0.5rem;
    color: ${theme.primaryColor};
  }
`

const ContactLocationsBox = styled.div`
  background-color: ${theme.neutralLight};
  margin: 1rem 0;
  padding: 1.5rem;
  align-self: flex-start;

  a {
    color: ${theme.primaryColor};
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${theme.primaryColor};
    }
  }
`
const ContactLocationsSocial = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 2rem;

  h4 {
    font-size: 18px;
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
