import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import TaskSummary from '.'

class TaskSummaryContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: null,
      lists: {}
    }
  }

  componentDidMount = () => {
    const requests = [
      Api.fetchData('task-priorities'),
      Api.fetchData('task-status'),
      Api.fetchData('task-type'),
      Api.fetchData('users')
    ]

    Promise.all(requests)
      .then(res => {
        this.setState({
          isLoading: false,
          lists: {
            priorityList: res[0],
            statusList: res[1],
            typeList: res[2],
            userList: res[3]
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
        <div className="TaskSummaryContainer">
          <TaskSummary lists={lists} {...this.props} />
        </div>
      )
    }
  }
}

export default TaskSummaryContainer
