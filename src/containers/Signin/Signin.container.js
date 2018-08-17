import React, { Component } from 'react'

import './Signin.container.css'

import { SigninForm } from './components/Signin.form'
import { Logo } from '../../components/Logo/Logo'

export class SigninContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handleInputChange = e => {
    const value = e.target.value
    const name = e.target.name

    this.setState({
      [name]: value
    })

    // TODO: API request
  }

  handleSubmit = e => {
    e.preventDefault()

    console.log(this.state)
  }

  render() {
    return (
      <div className="SigninContainer">
        <Logo />
        <SigninForm handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
        <a href="https://aionic.app" target="_blank" className="mt-4 text-muted d-block">
          Aionic App
        </a>
      </div>
    )
  }
}
