import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <div className="container my-6 font-mono">
      <h1 className="font-mono">Record Review</h1>
      <p>
        Welcome to Record Review where you can see how others are rating your
        favorite/least-liked albums! Here's some reviews.. sign up to see them
        all!
      </p>
      <div className="flex mb-4">
        <div className="w-1/3 h-12 text-center text-3xl pt-3 hover:text-teal-300 hover:font-bold">
          <Link to="/app/signup">Sign Up</Link>
        </div>
        <div className="w-1/3 h-12 text-center text-3xl pt-3 hover:text-teal-300 hover:font-bold">
          <Link to="/app/login">Sign In</Link>
        </div>
        <div className="w-1/3 h-12 text-center text-3xl pt-3 hover:text-teal-300 hover:font-bold">
          <Link to="/app/reviews">Newsletter</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
