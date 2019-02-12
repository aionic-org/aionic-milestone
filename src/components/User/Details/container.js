import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import UserDetails from './index'

class UserDetailsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      roles: []
    }
  }

  componentDidMount = () => {
    Api.fetchData('userRole/')
      .then(roles => {
        this.setState({
          isLoading: false,
          roles
        })
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  render() {
    const { isLoading, msg, roles } = this.state
    const { user, handleInputChange } = this.props

    if (isLoading) {
      return <Spinner />
    } else if (msg.length) {
      return <Error message={msg} />
    } else {
      return (
        <div className="UserDetailsContainer">
          <UserDetails user={user} roles={roles} handleInputChange={handleInputChange} />
        </div>
      )
    }
  }
}

export default UserDetailsContainer
