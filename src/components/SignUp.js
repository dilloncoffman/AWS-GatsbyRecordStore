import React from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import Error from './Error'
import { Auth } from 'aws-amplify'

const initialState = {
  username: ``,
  password: ``,
  email: '',
  phone_number: '',
  authCode: '',
  stage: 0,
  error: '',
}

class SignUp extends React.Component {
  state = initialState

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, phone_number },
      })
      this.setState({ stage: 1 })
    } catch (err) {
      this.setState({ error: err })
      console.log('error signing up...', err)
    }
  }

  confirmSignUp = async () => {
    const { username, authCode } = this.state
    try {
      await Auth.confirmSignUp(username, authCode)
      alert('Successfully signed up!')
      navigate('/app/login')
    } catch (err) {
      this.setState({ error: err })
      console.log('error confirming signing up...', err)
    }
  }

  render() {
    return (
      <div className="my-6 font-mono">
        <h1 className="font-mono">Sign Up</h1>
        {this.state.stage === 0 && (
          <div style={styles.formContainer}>
            {this.state.error && <Error errorMessage={this.state.error} />}
            <input
              onChange={this.handleUpdate}
              placeholder="Username"
              name="username"
              value={this.state.username}
              style={styles.input}
            />
            <input
              onChange={this.handleUpdate}
              placeholder="Password"
              name="password"
              value={this.state.password}
              type="password"
              style={styles.input}
            />
            <input
              onChange={this.handleUpdate}
              placeholder="Email"
              name="email"
              value={this.state.email}
              style={styles.input}
            />
            <input
              onChange={this.handleUpdate}
              placeholder="Phone Number"
              name="phone_number"
              value={this.state.phone_number}
              style={styles.input}
            />
            <div
              className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 my-2 px-4 rounded"
              onClick={this.signUp}
            >
              <span style={styles.buttonText}>Sign Up</span>
            </div>
          </div>
        )}
        {this.state.stage === 1 && (
          <div style={styles.formContainer}>
            {this.state.error && <Error errorMessage={this.state.error} />}
            <input
              onChange={this.handleUpdate}
              placeholder="Authorization Code"
              name="authCode"
              value={this.state.authCode}
              style={styles.input}
            />
            <div style={styles.button} onClick={this.confirmSignUp}>
              <span style={styles.buttonText}>Confirm Sign Up</span>
            </div>
          </div>
        )}
        <div className="text-center">
          <Link
            to="/app/login"
            className="text-blue-500 hover:text-blue-200 hover:no-underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }
}

const styles = {
  input: {
    height: 40,
    margin: '10px 0px',
    padding: 7,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: 'rebeccapurple',
    padding: '15px 7px',
    cursor: 'pointer',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
}

export default SignUp
