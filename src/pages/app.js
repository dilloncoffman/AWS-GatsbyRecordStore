import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Profile from '../components/Profile'
import Reviews from '../components/Reviews'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import PrivateRoute from '../components/PrivateRoute'

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/reviews" component={Reviews} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <SignUp path="/app/signup" />
    </Router>
  </Layout>
)

export default App
