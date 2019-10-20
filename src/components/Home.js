import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Home = () => {
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
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <h1>All Reviews</h1>
      <div className="container">
        {data.recordstore.listReviews.items.map(review => (
          <div key={review.id} className="py-8">
            <h2>{review.author}</h2>
            <a href="#">{review.album.title}</a>
            <hr />
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </>
  )
}
export default Home
