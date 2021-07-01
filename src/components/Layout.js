import React, { useEffect, useState } from "react"
import { useLocation } from "@reach/router"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { GlobalStyle } from "../styles/globalStyle"
import Sidebar from "./Sidebar"
import { motion, AnimatePresence } from "framer-motion"
import BackToTop from "./BackToTop"

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  const clickMenu = () => setToggleMenu(!toggleMenu)
  const closeMenu = () => setToggleMenu(false)

  const location = useLocation()

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
      <BackToTop />
      <Sidebar toggleMenu={toggleMenu} closeMenu={closeMenu} />
      <AnimatePresence>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer closeMenu={closeMenu} />
    </>
  )
}

export default Layout
