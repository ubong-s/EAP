import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import styled from "styled-components"

const Error = () => {
  return (
    <Layout>
      <Seo title="404" description="This is the 404 page" />
      <ErrorWrap>
        <div className="container">
          <h1>This page doesn't exist</h1>
          <Link to="/">
            <button className="btn"> Back to Home</button>
          </Link>
        </div>
      </ErrorWrap>
    </Layout>
  )
}

export default Error

const ErrorWrap = styled.section`
  .container {
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 1024px) {
      height: 65vh;
    }

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      text-transform: capitalize;

      @media screen and (min-width: 1024px) {
        font-size: 2rem;
      }
    }
  }
`
