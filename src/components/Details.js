import React from 'react'
import { Link } from 'gatsby'
import { getCurrentUser } from '../utils/auth'

const Profile = () => {
  const user = getCurrentUser()
  console.log('user:', user)
  return (
    <div>
      <h1>Profile Details</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone_number}</p>
      <p>Username: {user.username}</p>
      <Link to="/app/reviews">All Reviews</Link>
    </div>
  )
}

export default Profile
