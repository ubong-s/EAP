import React, { useEffect, useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { GlobalStyle } from "../styles/globalStyle"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  const clickMenu = () => setToggleMenu(!toggleMenu)
  const closeMenu = () => setToggleMenu(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    })
  }, [scrollNav])

  return (
    <>
      <GlobalStyle toggleMenu={toggleMenu} />
      <Navbar
        clickMenu={clickMenu}
        scrollNav={scrollNav}
        toggleMenu={toggleMenu}
      />
      <Sidebar toggleMenu={toggleMenu} closeMenu={closeMenu} />
      <main>{children}</main>
      <Footer closeMenu={closeMenu} />
    </>
  )
}

export default Layout
