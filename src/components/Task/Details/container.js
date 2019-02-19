import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import TaskDetails from '.'

class TaskDetailsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      lists: {}
    }
  }

  componentDidMount = () => {
    const requests = [
      Api.fetchData('user/'),
      Api.fetchData('taskStatus/'),
      Api.fetchData('taskPriority/'),
      Api.fetchData('git/56/repositories')
    ]

    Promise.all(requests)
      .then(res => {
        this.setState({
          isLoading: false,
          lists: {
            userList: res[0],
            statusList: res[1],
            priorityList: res[2],
            repoList: res[3]
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
    } else if (msg.length) {
      return <Error message={msg} />
    } else {
      return (
        <div className="TaskDetailsContainer">
          <TaskDetails {...lists} {...this.props} />
        </div>
      )
    }
  }
}

export default TaskDetailsContainer
