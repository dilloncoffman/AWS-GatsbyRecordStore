import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { getCurrentUser } from '../utils/auth'

const Profile = () => {
  const user = getCurrentUser()
  const data = useStaticQuery(graphql`
    {
      recordstore {
        listReviews(limit: 16) {
          items {
            id
            author
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
      <h1 className="font-mono">Profile</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone_number}</p>
      <p>Username: {user.username}</p>
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
      <Link to="/app/reviews">All Reviews</Link>
    </div>
  )
}

export default Profile
