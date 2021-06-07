const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const serviceResult = await graphql(`
    query GetSingleService {
      services: allStrapiServices {
        nodes {
          slug
        }
      }
    }
  `)

  serviceResult.data.services.nodes.forEach(service => {
    createPage({
      path: `/services/${service.slug}`,
      component: path.resolve(`src/templates/service-template.js`),
      context: {
        slug: service.slug,
      },
    })
  })
}
