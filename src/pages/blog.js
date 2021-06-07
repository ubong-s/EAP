import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import BlogHero from "../images/pageHero/blog.jpg"
import Seo from "../components/SEO"

const Blog = () => {
  return (
    <Layout>
      <Seo title="Blog" description="This is the Blog page" />
      <PageHero title="Blog" backgroundImg={BlogHero} />
    </Layout>
  )
}

export default Blog
