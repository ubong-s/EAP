import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MoreBtn = ({ address, btnText }) => {
  return (
    <BtnWrap>
      <Link to={address}>
        <button className="btn">{btnText ? `${btnText}` : "View All"}</button>
      </Link>
    </BtnWrap>
  )
}

export default MoreBtn

const BtnWrap = styled.div`
  margin-top: 2.5rem;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`
