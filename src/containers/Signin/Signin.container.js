import React, { Component } from 'react'

import './Signin.container.css'

import { SigninForm } from './components/Signin.form'
import { Logo } from '../../components/Misc/Logo'

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
    const logoStyle = {
      height: '72px',
      width: '72px',
      marginBottom: '20px'
    }

    return (
      <div className="SigninContainer">
        <Logo assignedStyle={logoStyle} />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <SigninForm handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
        <a href="https://aionic.app" target="_blank" className="mt-4 text-muted d-block">
          Aionic App
        </a>
      </div>
    )
  }
}
