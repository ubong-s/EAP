import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import {
  AiFillCloseSquare,
  AiFillCaretRight,
  AiFillCaretLeft,
} from "react-icons/ai"
import { theme } from "../styles/theme"

const ProjectImageModal = ({
  indexImage,
  nextImage,
  prevImage,
  modalOpen,
  setModalOpen,
}) => {
  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <ModalWrap className={modalOpen && "show-modal"}>
      <SlideIcons>
        <AiFillCaretLeft className="icon" onClick={prevImage} />
        <AiFillCaretRight className="icon" onClick={nextImage} />
      </SlideIcons>
      <ModalContainer className={modalOpen && "show-modal"}>
        {<GatsbyImage image={indexImage} />}
      </ModalContainer>
      <CloseModal onClick={closeModal} />
    </ModalWrap>
  )
}

export default ProjectImageModal

const ModalWrap = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
  padding: 0.5rem;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  visibility: hidden;
  transform: translateY(-100%);
  transition: all 0.3s ease-in-out;

  &.show-modal {
    visibility: visible;
    transform: translateY(0);
    transition: all 0.3s ease-in-out;
  }

  @media screen and (min-width: 1024px) {
    padding: 10rem;
  }
`
const ModalContainer = styled.div`
  background: white;
  padding: 1rem;
  visibility: hidden;
  transform: translateY(-100%);
  transition: all 0.5s ease-in-out;
  z-index: 6;

  img {
    width: 85vw;
    height: 50vh;
    transition: all 0.5s ease-in-out;

    @media screen and (min-width: 1024px) {
      width: 60vw;
      height: 70vh;
    }
  }

  &.show-modal {
    visibility: visible;
    transform: translateY(0);
    transition: all 0.5s ease-in-out;
  }
`
const CloseModal = styled(AiFillCloseSquare)`
  position: absolute;
  top: 5rem;
  right: 1rem;
  font-size: 2rem;
  color: ${theme.themeWhite};
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${theme.accentColor};
  }

  @media screen and (min-width: 1024px) {
    top: 2rem;
    right: 3rem;
    font-size: 3rem;
  }
`
const SlideIcons = styled.div`
  position: absolute;
  top: 80%;
  left: 0;
  width: 100%;
  font-size: 2rem;
  color: ${theme.themeWhite};
  cursor: pointer;
  z-index: 6;
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 1024px) {
    top: 50%;
    transform: translateY(-50%);
    justify-content: space-between;
    padding: 0 8rem;
    font-size: 3rem;

    .icon {
      position: relative;
      z-index: 10;
      color: ${theme.themeWhite};
      transition: all 0.5s ease-in-out;

      &:hover {
        color: ${theme.accentColor};
      }
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 0 10rem;
  }
`
