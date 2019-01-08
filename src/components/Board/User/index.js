import React, { Component } from 'react'

import { Api } from '../../../services/api'

import BoardUserHOC from './HOC'
import Error from '../../UI/Error/'
import Spinner from '../../UI/Spinner/'
import TaskPreviews from '../../Task/Previews/'
import Icon from '../../UI/Icon'

class BoardUser extends Component {
  constructor(props) {
    super(props)

    this.state = { isLoading: true, msg: '', tasks: [] }
  }

  handleStatusChange = statusID => {
    this.fetchTasks(statusID)
  }

  fetchTasks = statusID => {
    this.setState({ isLoading: true })

    Api.fetchData(`user/${this.props.user.id}/tasks/status/${statusID}`)
      .then(res => {
        this.setState({ isLoading: false, tasks: res })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  render() {
    const { isLoading, msg, tasks } = this.state

    if (isLoading) {
      return (
        <BoardUserHOC handleStatusChange={this.handleStatusChange} user={this.props.user}>
          <Spinner />
        </BoardUserHOC>
      )
    } else if (msg.length) {
      return (
        <BoardUserHOC handleStatusChange={this.handleStatusChange} user={this.props.user}>
          <Error message={msg} />
        </BoardUserHOC>
      )
    } else {
      const content = tasks.length ? (
        <div>
          <p className="text-muted font-weight-bold mt-4">Number of tasks: {tasks.length}</p>
          <TaskPreviews taskList={tasks} />
        </div>
      ) : (
        <Icon assignedClasses={['fa-check-circle']} text="Done!" />
      )

      return (
        <BoardUserHOC handleStatusChange={this.handleStatusChange} user={this.props.user}>
          {content}
        </BoardUserHOC>
      )
    }
  }
}

export default BoardUser
