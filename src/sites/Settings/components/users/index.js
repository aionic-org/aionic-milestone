import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'
import Deck from 'components/UI/Deck'

import UserInvitation from 'components/User/Invitation'

class SettingsUsers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      users: []
    }
  }

  componentDidMount = props => {
    Api.fetchData('user')
      .then(users => {
        this.setState({
          isLoading: false,
          users
        })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  render() {
    const { isLoading, msg, users } = this.state

    if (isLoading) {
      return (
        <div className="SettingsUsers">
          <div className="mt-2 mt-xl-0">
            <UserInvitation />
          </div>
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="SettingsUsers">
          <div className="mt-4 mt-xl-0">
            <UserInvitation />
          </div>
          <Error message={msg} />
        </div>
      )
    } else {
      return (
        <div className="SettingsUsers">
          <div className="mt-4 mt-xl-0">
            <UserInvitation />
          </div>
          <Deck itemList={users} deckType={'user'} />
        </div>
      )
    }
  }
}

export default SettingsUsers
