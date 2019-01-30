import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Form.css'

import { Session } from 'services/session'

import Spinner from 'components/UI/Spinner/'

class RegisterForm extends Component {
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

    // register user
    Session.registerUser({ user: this.state.user }, this.props.match.params.hash)
      .then(res => {
        Session.setToken(res.token)
        Session.setUser(res.user)
        this.props.history.push('/')
      })
      .catch(err => {
        switch (err.response.status) {
          case 400:
            this.setState({ isLoading: false, msg: 'Email is already taken!' })
            break
          default:
            this.setState({ isLoading: false, msg: 'Internal server error!' })
            break
        }
      })
  }

  render() {
    return (
      <div className="RegisterForm">
        <form className="sigin-form" onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            onChange={this.handleInputChange}
            required
          />

          <input
            type="text"
            name="firstname"
            className="form-control"
            placeholder="Firstname"
            onChange={this.handleInputChange}
            required
          />

          <input
            type="text"
            name="lastname"
            className="form-control"
            placeholder="Lastname"
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

          {this.props.isLoading ? (
            <Spinner />
          ) : (
            <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">
              <i className="fas fa-sign-in-alt" /> Register
            </button>
          )}

          {this.state.msg.length ? <p className="mt-3 text-danger">{this.state.msg}</p> : null}
        </form>
      </div>
    )
  }
}

export default withRouter(RegisterForm)
