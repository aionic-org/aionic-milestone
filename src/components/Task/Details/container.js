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
      userList: [],
      statusList: [],
      priorityList: []
    }
  }

  componentDidMount = () => {
    const requests = [
      Api.fetchData('user/'),
      Api.fetchData('taskStatus/'),
      Api.fetchData('taskPriority/')
    ]

    Promise.all(requests)
      .then(res => {
        this.setState({
          isLoading: false,
          userList: res[0],
          statusList: res[1],
          priorityList: res[2]
        })
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  render() {
    const { isLoading, msg, userList, statusList, priorityList } = this.state

    if (isLoading) {
      return (
        <div className="TaskDetailsContainer">
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="TaskDetailsContainer">
          <Error message={msg} />
        </div>
      )
    } else {
      return (
        <div className="TaskDetailsContainer">
          <TaskDetails
            userList={userList}
            statusList={statusList}
            priorityList={priorityList}
            {...this.props}
          />
        </div>
      )
    }
  }
}

export default TaskDetailsContainer
