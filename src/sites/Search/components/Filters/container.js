import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import TaskFilter from '.'

class SitesSearchFiltersContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: null,
      lists: {
        userList: [],
        statusList: [],
        orgList: []
      }
    }
  }

  componentDidMount = () => {
    const requests = [
      Api.fetchData('users'),
      Api.fetchData('task-status'),
      Api.fetchData('git/organization')
    ]

    Promise.all(requests)
      .then(res => {
        this.setState({
          isLoading: false,
          lists: {
            userList: res[0],
            statusList: res[1],
            orgList: res[2]
          }
        })
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  render() {
    const { isLoading, msg, lists } = this.state

    if (isLoading) {
      return <Spinner />
    } else if (msg) {
      return <Error message={msg} />
    } else {
      return (
        <div className="SitesSearchFiltersContainer">
          <TaskFilter lists={lists} {...this.props} />
        </div>
      )
    }
  }
}

export default SitesSearchFiltersContainer
