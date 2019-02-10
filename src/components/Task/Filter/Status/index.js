import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'
import Tabs from 'components/UI/Tabs'

class TaskFilterStatus extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      status: [],
      activeStatus: 0
    }
  }

  componentDidMount = () => {
    Api.fetchData('taskStatus/')
      .then(status => {
        this.setState({
          isLoading: false,
          status
        })
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  handleClick = statusTitle => {
    if (statusTitle) {
      const statusId = this.getStatusByTitle(statusTitle).id || 0

      if (statusId !== this.state.activeStatus) {
        this.setState({ activeStatus: statusId }, () => {
          this.props.handleStatusChange(statusId)
        })
      }
    } else {
      this.setState({ activeStatus: null }, () => {
        this.props.handleStatusChange(null)
      })
    }
  }

  getStatusByTitle = title => {
    return this.state.status.find(status => status.title === title)
  }

  render() {
    const { isLoading, msg, status } = this.state
    const tabs = status.map(status => status.title)

    if (isLoading) {
      return (
        <div className="TaskFilterStatus">
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="TaskFilterStatus">
          <Error message={msg} />
        </div>
      )
    } else {
      return (
        <div className="TaskFilterStatus">
          <Tabs tabs={tabs} handleClick={this.handleClick} />
        </div>
      )
    }
  }
}

export default TaskFilterStatus
