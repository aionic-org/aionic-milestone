import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Form.css'

import { Session } from '../../../../services/session'

import Spinner from '../../../../components/UI/Spinner/'

class SigninForm extends Component {
  constructor(props) {
    super(props)

    this.state = { user: {}, isLoading: false, msg: '' }
  }

  handleInputChange = e => {
    const name = e.target.name
    const value = e.target.value

    this.setState(prevState => {
      return { user: { ...prevState.user, [name]: value } }
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      isLoading: true
    })

    // signin user
    Session.signinUser(this.state.user)
      .then(res => {
        Session.setToken(res.token)
        Session.setUser(res.user)
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
        switch (err.response.status) {
          case 401:
            this.setState({ isLoading: false, msg: 'Wrong email or password!' })
            break
          default:
            this.setState({ isLoading: false, msg: 'Internal server error!' })
            break
        }
      })
  }

  render() {
    return (
      <div className="SigninForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            onChange={this.handleInputChange}
            required
          />

          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={this.handleInputChange}
            required
          />

          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">
              <i className="fas fa-sign-in-alt" /> Sign in
            </button>
          )}

          {this.state.msg.length ? <p className="mt-3 text-danger">{this.state.msg}</p> : null}
        </form>
      </div>
    )
  }
}

export default withRouter(SigninForm)
