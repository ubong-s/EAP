import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" description="This is our Home page" />
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        excepturi reiciendis. Accusantium porro culpa minima tempora qui maxime
      </p>
    </Layout>
  )
}

export default Home
