import React from 'react'
import { Link } from 'gatsby'

import { navigate } from '@reach/router'

import { logout, isLoggedIn } from '../utils/auth'
import { Auth } from 'aws-amplify'

const Header = ({ siteTitle }) => (
  <div className="bg-blue-500 p-4 font-mono">
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 mx-16:lg">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h1 className="mb-0 font-mono font-hairline text-sm">
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <Link
          to="/app/reviews"
          className="block pr-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 hover:no-underline"
        >
          Reviews
        </Link>
        <Link
          to="/app/profile"
          className="block lg:inline-block lg:mt-0 text-white hover:text-teal-200 hover:no-underline mr-4"
        >
          Profile
        </Link>
        {isLoggedIn() ? (
          <Link
            to="/"
            className="text-white hover:text-teal-200 hover:no-underline"
            onClick={() =>
              Auth.signOut()
                .then(logout(() => navigate('/app/login')))
                .catch(err => console.log('eror:', err))
            }
          >
            Sign Out
          </Link>
        ) : (
          <Link
            className="text-white hover:text-teal-200 hover:no-underline"
            to="/app/login"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  </div>
)
/* <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={styles.headerTitle}>
          {siteTitle}
        </Link>
      </h1>
    </div> */

const styles = {
  headerTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'underline',
  },
}

export default Header
