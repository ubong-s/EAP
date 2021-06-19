/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "EAP Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Dev Ubong",
    twitter: "@devubong",
    image: "/twitter.png",
    siteUrl: `https://eap-development.netlify.app`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          `blogs`,
          `projects`,
          `partners`,
          `services`,
          `teams`,
          `jobs`,
        ],
        // singleTypes: [`home-page`, `contact`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`russo one\:400`, `pt sans\:300,400,600,700`],
        display: "swap",
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Libre Baskerville`,
    //         variants: [`700`],
    //         subsets: [`latin-ext`],
    //       },
    //       {
    //         family: `Source Sans Pro`,
    //         variants: [`400`, `700`],
    //       },
    //     ],
    //     formats: ["woff", "woff2"],
    //   },
    // },
  ],
}
