import React, { Component } from 'react'

import { Api } from 'services/api'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

class UserStatus extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: null,
      user: {}
    }
  }

  componentDidMount = () => {
    Api.fetchData(`user/${this.props.user.id}`)
      .then(user => {
        if (user) {
          this.setState({ isLoading: false, user })
        } else {
          this.setState({ isLoading: false, msg: 'Resource not found!' })
        }
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  handleInputChange = e => {
    const value = e.target.value

    if (this.state.user.status !== value) {
      const user = { ...this.state.user, status: value }

      this.setState({ user }, () => {
        Api.putData(`user/${user.id}`, { user })
          .then(_user => {
            this.setState({
              user: _user
            })
          })
          .catch(err => {
            this.setState({
              msg: Api.handleHttpError(err)
            })
          })
      })
    }
  }

  render() {
    const { isLoading, msg, user } = this.state

    if (isLoading) {
      return <Spinner small={true} />
    } else if (msg) {
      return <Error message={msg} />
    } else {
      return (
        <div className="UserStatus">
          <div className="form-group">
            <textarea
              className="form-control"
              name="status"
              rows="2"
              defaultValue={user.status}
              onBlur={this.handleInputChange}
            />
          </div>
        </div>
      )
    }
  }
}

export default UserStatus
