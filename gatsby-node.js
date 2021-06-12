const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allStrapiBlogs {
        nodes {
          title
          slug
        }
      }
      services: allStrapiServices {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    return
  }

  const blogs = result.data.allStrapiBlogs.nodes

  blogs.forEach((blog, index) => {
    const previous = index === 0 ? null : blogs[index - 1]
    const next = index === blogs.length - 1 ? null : blogs[index + 1]

    createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
        previous,
        next,
      },
    })
  })

  result.data.services.nodes.forEach(service => {
    createPage({
      path: `/services/${service.slug}`,
      component: path.resolve(`src/templates/service-template.js`),
      context: {
        slug: service.slug,
      },
    })
  })
}
