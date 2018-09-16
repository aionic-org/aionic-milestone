import React, { Component } from 'react'

import { TasksFilter } from '../Tasks/TasksFilter'
import { TasksPreview } from '../Tasks/TasksPreview'
import { Api } from '../../services/api'
import { Spinner } from '../Misc/Spinner'
import { Session } from '../../services/session'

export class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = { isLoading: true, msg: '', tasks: [] }
  }

  handleStatusChange = statusID => {
    this.fetchTasks(statusID)
  }

  fetchTasks = statusID => {
    this.setState({ isLoading: true })

    Api.fetchData(`task/user/${Session.getUser().id}/status/${statusID}`)
      .then(res => {
        this.setState({ isLoading: false, tasks: res.data.data })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: 'Failed to fetch data from server!'
        })
      })
  }

  render() {
    const { isLoading, msg, tasks } = this.state

    if (isLoading) {
      return (
        <div className="Dashboard">
          <TasksFilter handleStatusChange={this.handleStatusChange} />
          <hr className="featurette-divider" />
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="Dashboard">
          <TasksFilter handleStatusChange={this.handleStatusChange} />
          <hr className="featurette-divider" />
          <p className="text-center text-danger mt-4">{msg}</p>
        </div>
      )
    } else {
      return (
        <div className="Dashboard">
          <TasksFilter handleStatusChange={this.handleStatusChange} />
          <hr className="featurette-divider" />

          <p className="text-muted font-weight-bold mt-4">Your focus for this week</p>
          <TasksPreview tasks={tasks} />
          <p className="text-muted font-weight-bold mt-5">Tasks from last week</p>
        </div>
      )
    }
  }
}
