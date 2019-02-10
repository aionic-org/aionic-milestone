import React, { Component } from 'react'

import { Api } from 'services/api'
import { Session } from 'services/session'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import SitesUser from '.'

class SitesUserContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      user: {},
      userUpdate: {
        status: '',
        msg: ''
      }
    }
  }

  componentDidMount = () => {
    const id =
      this.props.match.params.id === 'me' ? Session.getUser().id : this.props.match.params.id

    Api.fetchData(`user/${id}`)
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
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (this.state.user[name] !== value) {
      const user = { ...this.state.user, [name]: value }

      this.setState({ user }, () => {
        this.updateUser()
      })
    }
  }

  updateUser = () => {
    const user = this.state.user

    Api.postData(`user/${user.id}`, { user })
      .then(user => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        this.setState({
          userUpdate: {
            status: 'Success',
            msg: 'User updated'
          }
        })

        setTimeout(() => {
          this.setState({
            userUpdate: {
              status: '',
              msg: ''
            }
          })
        }, 1500)
      })
      .catch(err => {
        this.setState({
          userUpdate: {
            status: 'Error',
            msg: 'Failed to update user!'
          }
        })
      })
  }

  render() {
    const { isLoading, msg, user, userUpdate } = this.state

    if (isLoading) {
      return (
        <div className="SitesUserContainer">
          <Spinner wrapContent={true} />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="SitesUserContainer">
          <Error message={msg} wrapContent={true} />
        </div>
      )
    } else {
      return (
        <div className="SitesUserContainer">
          <SitesUser
            user={user}
            handleInputChange={this.handleInputChange}
            userUpdate={userUpdate}
          />
        </div>
      )
    }
  }
}

export default SitesUserContainer
