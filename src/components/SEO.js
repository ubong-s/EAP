import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          siteDesc: description
          siteUrl
          image
          siteTitle: title
          twitter
        }
      }
    }
  `)

  const {
    siteDesc,
    siteTitle,
    siteUrl,
    twitter,
    image,
    author,
  } = data.site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
    </Helmet>
  )
}

export default SEO
