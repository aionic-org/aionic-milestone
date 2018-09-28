import React, { Component } from 'react'

import { Api } from '../../../../services/api'

import { BoardViewUserHOC } from './HOC'
import { Error } from '../../../UI/Error/'
import { Spinner } from '../../../UI/Spinner/'
import { TaskPreviews } from '../../../Task/Previews/'

export class BoardViewUser extends Component {
  constructor(props) {
    super(props)

    this.state = { isLoading: true, msg: '', tasks: [] }
  }

  handleStatusChange = statusID => {
    this.fetchTasks(statusID)
  }

  fetchTasks = statusID => {
    this.setState({ isLoading: true })

    Api.fetchData(`task/user/${this.props.user.id}/status/${statusID}`)
      .then(res => {
        this.setState({ isLoading: false, tasks: res })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err.response.status)
        })
      })
  }

  render() {
    const { isLoading, msg, tasks } = this.state

    if (isLoading) {
      return (
        <BoardViewUserHOC handleStatusChange={this.handleStatusChange} user={this.props.user}>
          <Spinner />
        </BoardViewUserHOC>
      )
    } else if (msg.length) {
      return (
        <BoardViewUserHOC handleStatusChange={this.handleStatusChange} user={this.props.user}>
          <Error message={msg} />
        </BoardViewUserHOC>
      )
    } else {
      return (
        <BoardViewUserHOC handleStatusChange={this.handleStatusChange} user={this.props.user}>
          <p className="text-muted font-weight-bold mt-4">Your focus for this week</p>
          <TaskPreviews taskList={tasks} />
          <p className="text-muted font-weight-bold mt-5">Tasks from last week</p>
        </BoardViewUserHOC>
      )
    }
  }
}
