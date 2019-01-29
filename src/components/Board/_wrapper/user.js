import React, { Component } from 'react'

import { Api } from 'services/api'

import Error from 'components/UI/Error/'
import Spinner from 'components/UI/Spinner/'
import BoardTask from '../Task'

class BoardUser extends Component {
  constructor(props) {
    super(props)

    this.state = { isLoading: false, msg: '', tasks: [] }
  }

  componentDidMount = () => {
    this.fetchTasks()
  }

  updateParent = () => {
    this.fetchTasks()
  }

  fetchTasks = () => {
    this.setState({
      isLoading: true
    })

    Api.fetchData(`user/${this.props.user.id}/tasks/`)
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
        <div className="BoardUser">
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="BoardUser">
          <Error message={msg} />
        </div>
      )
    } else {
      return (
        <div className="BoardUser">
          <BoardTask
            taskList={tasks}
            handleStatusChange={this.handleStatusChange}
            title={<h1 className="h2">{`${this.props.user.firstname}'s`} Board</h1>}
            updateParent={this.updateParent}
          />
        </div>
      )
    }
  }
}

export default BoardUser
