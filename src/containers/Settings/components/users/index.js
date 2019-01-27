import React, { Component } from 'react'

import { Api } from '../../../../services/api'

import Spinner from '../../../../components/UI/Spinner'
import Error from '../../../../components/UI/Error'
import Deck from '../../../../components/UI/Deck'
import UserInvitation from '../../../../components/User/Invitation'

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
      .then(res => {
        console.log(res)
        this.setState({
          isLoading: false,
          users: res
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
          <UserInvitation />
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="SettingsUsers">
          <UserInvitation />
          <Error message={msg} />
        </div>
      )
    } else {
      return (
        <div className="SettingsUsers">
          <UserInvitation />
          <Deck itemList={users} deckType={'users'} />
        </div>
      )
    }
  }
}

export default SettingsUsers
