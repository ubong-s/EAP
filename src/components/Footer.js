import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import {
  // ContactData,
  MenuData,
  // ServiceLinksData,
  SocialData,
} from "../constants"
import { theme } from "../styles/theme"

const Footer = ({ closeMenu }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  // const toggleHome = () => {
  //   scroll.scrollToTop()
  // }

  return (
    <>
      <FooterContainer onClick={closeMenu}>
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="phone" href="tel:+0123456789">
                +1 (234) 5467890
              </a>
              <p className="time">Mon-Fri 9: 00-21: 00</p>
              <p>
                &copy; {data.site.siteMetadata.title},{" "}
                {new Date().getFullYear()}
              </p>
            </div>
            <div className="">
              <ul className="footer-links">
                {MenuData.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url} activeClassName="active">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <p>
                Our support available to help you 24 hours a day & 7 days a
                week.
              </p>
            </div>
            <div>
              <ul className="footer-social">
                {SocialData.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="developer">
                Developed by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.devubong.com/"
                >
                  {" "}
                  DevUbong
                </a>
              </p>
            </div>
          </div>
        </div>
      </FooterContainer>
    </>
  )
}

export default Footer

export const FooterContainer = styled.footer`
  background-color: ${theme.themeWhite};
  color: ${theme.themeDark};
  padding: 3rem 3rem 3rem 0;
  font-size: 16px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 2.5fr 1fr;
    padding: 4rem 0;
  }

  p {
    margin-bottom: 0.75rem;
  }

  .phone {
    font-size: 1.25rem;
    color: ${theme.primaryColor};

    &:hover {
      color: ${theme.accentColor};
    }
  }

  .time {
    color: ${theme.textColor};
    margin-top: 2rem;
  }

  .footer-grid {
    display: grid;
    gap: 1rem;

    @media screen and (min-width: 768px) {
      align-items: start;
      gap: 3rem;
    }

    @media screen and (min-width: 1024px) {
      grid-template-columns: 1fr 2.5fr 1fr;
    }
  }

  .footer-social {
    font-size: 1rem;
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1.5rem;

    @media screen and (min-width: 1024px) {
      font-size: 1.5rem;
    }

    li {
      a {
        display: flex;
        align-items: center;
        color: ${theme.themeWhite};
        background-color: ${theme.primaryColor};
        padding: 0.5rem;
        border-radius: 50%;

        &:hover {
          background-color: ${theme.accentColor};
          transition: ${theme.transitionEase};
        }
      }
    }
  }

  .footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    margin-bottom: 0.75rem;

    li {
      a {
        color: ${theme.primaryColor};
        cursor: pointer;
        text-transform: capitalize;

        &:hover {
          opacity: 0.5;
          transition: ${theme.transitionEase};
        }
      }

      .active {
        opacity: 0.5;
      }
    }
  }

  .developer {
    font-family: ${theme.fontPrimary};

    a {
      color: ${theme.primaryColor};

      &:hover {
        color: ${theme.accentColor};
      }
    }
  }
`
