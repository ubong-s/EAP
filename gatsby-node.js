const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 1000) {
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
      allStrapiProjects(sort: { fields: date, order: DESC }, limit: 1000) {
        nodes {
          title
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog pages
  const blogs = result.data.allStrapiBlogs.nodes
  const blogsPerPage = 6
  const blogPages = Math.ceil(blogs.length / blogsPerPage)

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

  // Create BLog List Page
  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("src/templates/blog-list-template.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        blogPages,
        currentPage: i + 1,
      },
    })
  })

  // Create project pages
  const projects = result.data.allStrapiProjects.nodes
  const projectsPerPage = 6
  const projectsPages = Math.ceil(projects.length / projectsPerPage)

  projects.forEach((project, index) => {
    const previous = index === 0 ? null : projects[index - 1]
    const next = index === projects.length - 1 ? null : projects[index + 1]

    createPage({
      path: `/projects/${project.slug}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        slug: project.slug,
        previous,
        next,
      },
    })
  })

  // Create Projects List Page
  Array.from({ length: projectsPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/projects` : `/projects/${i + 1}`,
      component: path.resolve("src/templates/projects-list-template.js"),
      context: {
        limit: projectsPerPage,
        skip: i * projectsPerPage,
        projectsPages,
        currentPage: i + 1,
      },
    })
  })

  // Create service pages
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
