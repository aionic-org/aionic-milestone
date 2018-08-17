import React, { Component } from 'react'

import './Register.container.css'

import { Logo } from '../../components/Logo/Logo'
import { RegisterForm } from './components/Register.form'

export class RegisterContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { user: {} }
  }

  handleInputChange = e => {
    const value = e.target.value
    const name = e.target.name

    this.setState(prevState => {
      return { user: { ...prevState.user, [name]: value } }
    })

    // TODO: API request
  }

  handleSubmit = e => {
    e.preventDefault()

    console.log(this.state)
  }

  render() {
    return (
      <div className="RegisterContainer">
        <Logo />
        <RegisterForm handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
        <a href="https://aionic.app" target="_blank" className="mt-4 text-muted d-block">
          Aionic App
        </a>
      </div>
    )
  }
}
