/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
var slug = require('slug')

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `GraphQLSource`) {
    console.log(node)
  }
}

// You can delete this file if you're not using it
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`

    // Update the page.
    createPage(page)
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      recordstore {
        listReviews {
          items {
            album {
              title
              albumart
              artist {
                name
              }
            }
            author
            content
          }
        }
      }
    }
  `)
  console.log(data.recordstore.listReviews.items)
  data.recordstore.listReviews.items.map(review => {
    actions.createPage({
      path: `app/reviews/${slug(review.album.title, {
        lower: true,
        replacement: '-',
      })}`,
      component: path.resolve('./src/components/Review.js'),
      context: {
        author: review.author,
        content: review.content,
        album: review.album,
      },
    })
  })
}
