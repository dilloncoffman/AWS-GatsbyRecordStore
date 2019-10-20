import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Reviews = () => {
  const data = useStaticQuery(graphql`
    {
      recordstore {
        listReviews {
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
    <>
      <h1>Reviews</h1>
      <div className="container">
        {data.recordstore.listReviews.items.map(review => (
          <div key={review.id} className="py-8">
            <h2>{review.author}</h2>
            <p>
              <a href="#">{review.album.title}</a> by{' '}
              <a href="#">{review.album.artist.name}</a>
            </p>
            <hr />
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </>
  )
}
export default Reviews
