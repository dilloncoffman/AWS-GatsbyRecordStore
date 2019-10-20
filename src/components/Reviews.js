import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
var slug = require('slug')

const Reviews = () => {
  const data = useStaticQuery(graphql`
    {
      recordstore {
        listReviews(limit: 16) {
          items {
            id
            author
            content
            album {
              title
              albumart
              artist {
                name
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="container mt-6 font-mono">
      <h1 className="font-mono">Reviews</h1>
      <div className="container">
        {data.recordstore.listReviews.items.map(review => (
          <>
            <div key={review.id} className="py-8">
              <div class="md:flex">
                <div class="md:flex-shrink-0">
                  <img
                    class="rounded-lg md:w-56"
                    src={review.album.albumart}
                    alt={review.album.title}
                  />
                </div>
                <div class="mt-4 md:mt-0 md:ml-6">
                  <div class="uppercase tracking-wide text-sm text-teal-200 font-bold">
                    {review.album.title}
                  </div>
                  <Link
                    to={`app/reviews/${slug(review.album.title, {
                      lower: true,
                      replacement: '-',
                    })}`}
                    href="#"
                    class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                  >
                    {review.author}
                  </Link>
                  <p class="mt-2 text-gray-600">{review.content}</p>
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  )
}
export default Reviews
