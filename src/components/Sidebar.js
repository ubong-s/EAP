import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { MenuData, SocialData } from "../constants"
import { theme } from "../styles/theme"
import { RiBuilding2Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

const Sidebar = ({ toggleMenu, closeMenu }) => {
  return (
    <SidebarContainer toggleMenu={toggleMenu}>
      <SidebarBackground onClick={closeMenu}></SidebarBackground>
      <SidebarInner>
        <div className="container">
          <div className="sidebar-top">
            <Link to="/" className="logo">
              <RiBuilding2Line /> eap
            </Link>
            <MobileClose onClick={closeMenu}>
              <AiOutlineClose />
            </MobileClose>
          </div>
          <SidebarList>
            {MenuData.map(item => {
              const { url, text, id, subs } = item

              return (
                <li key={id}>
                  <Link to={url} activeClassName="active">
                    {text}
                  </Link>
                  {subs && (
                    <ul className="sub-categories">
                      {subs.map((sub, index) => {
                        return (
                          <li key={index} activeClassName="active">
                            <Link to={sub.url}>{sub.text}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              )
            })}
          </SidebarList>
          <SocialList>
            {SocialData.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}
                </a>
              </li>
            ))}
          </SocialList>
        </div>
      </SidebarInner>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.aside`
  position: fixed;
  transform: ${({ toggleMenu }) =>
    toggleMenu ? "translateX(0)" : "translateX(-100vw)"};
  transition: ${theme.transitionEase};
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const SidebarBackground = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const SidebarInner = styled.div`
  background: ${theme.primaryColor};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: all 0.4s ease;
  z-index: 1000;

  .sidebar-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;

    .logo {
      display: flex;
      align-items: center;
      font-family: ${theme.fontPrimary};
      font-size: 2rem;
      color: ${theme.themeWhite};
    }
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 20%;
  }
`

const SidebarList = styled.ul`
  li {
    margin: 1rem 0;
    font-size: 1rem;
    font-family: ${theme.fontPrimary};
    font-weight: 700;
    text-transform: capitalize;

    a {
      color: ${theme.themeWhite};
      transition: ${theme.transitionEase};

      &:hover {
        color: ${theme.accentColor};
        transition: ${theme.transitionEase};
        padding-left: 10px;
      }
    }

    .active {
      color: ${theme.accentColor};
    }
  }

  .sub-categories {
    display: none;

    @media screen and (min-width: 1024px) {
      display: block;
      margin-left: 1.25rem;

      li {
        margin: 0.5rem 0;
        font-size: 0.9rem;

        a {
          color: ${theme.accentColor};

          &:hover {
            color: ${theme.themeWhite};
          }
        }

        .active {
          color: ${theme.themeWhite};
          margin-left: 1.25rem;
        }
      }
    }
  }
`

const SocialList = styled.ul`
  display: flex;

  margin-top: 2rem;

  li {
    font-size: 2rem;
    margin-right: 1rem;

    a {
      color: ${theme.primaryColor};
      transition: ${theme.transitionEase};

      &:hover {
        color: ${theme.transitionEase};
      }
    }
  }
`

const MobileClose = styled.div`
  font-size: 1.75rem;
  line-height: 0;
  cursor: pointer;
  color: ${theme.accentColor};
  transition: ${theme.transitionEase};

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    span {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      display: block;
      transform: rotate(270deg);
      letter-spacing: 2px;
    }
  }
`
