import React, { Component } from 'react'

import { Api } from 'services/api'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import SitesUser from '.'

class SitesUserContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      user: {}
    }
  }

  componentDidMount = () => {
    Api.fetchData(`user/${this.props.match.params.id}`)
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

  render() {
    const { isLoading, msg, user } = this.state

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
          <SitesUser user={user} />
        </div>
      )
    }
  }
}

export default SitesUserContainer
