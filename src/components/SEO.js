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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
