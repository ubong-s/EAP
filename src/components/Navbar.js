import React from "react"
import { Link } from "gatsby"
import { theme } from "../styles/theme"
import { AiOutlineMenu } from "react-icons/ai"
import { RiBuilding2Line } from "react-icons/ri"
import styled from "styled-components"
// import { MenuData } from "../constants"

const Navbar = ({ toggleMenu, clickMenu, scrollNav }) => {
  return (
    <Header scrollNav={scrollNav}>
      <div className="container">
        <Nav>
          <Link to="/" className="logo">
            <RiBuilding2Line /> EAP
          </Link>
          {/* <NavList>
            {MenuData.map(link => {
              const { id, url, text } = link

              return (
                <li key={id} scrollNav={scrollNav}>
                  <Link to={url} activeClassName="active">
                    {text}
                  </Link>
                </li>
              )
            })}
          </NavList> */}
          <MobileBurger onClick={clickMenu}>
            <AiOutlineMenu />
          </MobileBurger>
        </Nav>
      </div>
    </Header>
  )
}

export default Navbar

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: ${theme.themeWhite};
  transition: ${theme.transitionEase};
  box-shadow: ${theme.shadow};
  z-index: 999;

  @media screen and (min-width: 992px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 80px;
    height: 100vh;
    background-color: transparent;
  }
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;

  @media screen and (min-width: 992px) {
    flex-direction: column;
    height: 150px;
    padding-top: 2rem;
  }

  .logo {
    display: flex;
    align-items: center;
    font-family: ${theme.fontPrimary};
    font-size: 2rem;
    /* font-weight: 600; */
    color: ${theme.primaryColor};
    text-transform: lowercase;

    @media screen and (min-width: 992px) {
      font-size: 1.75rem;
      flex-direction: column;
    }
  }
`
const MobileBurger = styled.div`
  font-size: 2rem;
  line-height: 0;
  cursor: pointer;
  color: ${theme.primaryColor};
  transition: ${theme.transitionEase};

  span {
    display: none;
  }

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
  }
`

// const NavList = styled.ul`
//   display: none;

//   @media screen and (min-width: 992px) {
//     display: flex;
//     gap: 1.5rem;
//     text-transform: capitalize;
//     font-family: ${theme.fontPrimary};

//     li {
//       a {
//         color: ${({ scrollNav }) =>
//           scrollNav ? `${theme.secondaryColor}` : `${theme.primaryColor}`};
//       }
//       .active {
//         color: ${theme.secondaryColor};
//       }
//     }
//   }
// `
