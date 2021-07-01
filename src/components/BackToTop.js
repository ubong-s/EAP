import React, { useState, useEffect } from "react"
import { FaChevronUp } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"

const BackToTop = () => {
  const [show, setShow] = useState(false)

  const showOnScroll = () => {
    if (window.scrollY >= 400) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", showOnScroll)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <div className={show ? "to-top active" : "to-top"} onClick={toggleHome}>
      <FaChevronUp />
    </div>
  )
}

export default BackToTop
