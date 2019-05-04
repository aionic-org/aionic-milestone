import React, { Component } from 'react'

import { Session } from 'services/session'
import { Api } from 'services/api'

class GitHubAuthenticate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showInput: false,
      token: null
    }
  }

  doAuth = () => {
    Api.fetchData('auth/github').then(url => {
      window.open(url, '_blank')

      this.setState({
        showInput: true
      })
    })
  }

  handleInputChange = e => {
    this.setState({
      token: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { showInput } = this.state
    return (
      <div className="GitHubAuthenticate">
        <form onSubmit={this.handleSubmit}>
          <button className="btn btn-primary" onClick={this.doAuth}>
            GitHub Auth <i className="fab fa-github ml-1" />
          </button>

          {showInput ? (
            <div className="input-group mt-2">
              <input
                type="text"
                name="token"
                className="form-control"
                autoFocus
                placeholder="Enter token"
                onChange={this.handleInputChange}
              />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="submit">
                  Send
                </button>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    )
  }
}

export default GitHubAuthenticate
