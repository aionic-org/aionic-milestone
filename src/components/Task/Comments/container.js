import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import TaskComments from './'
import TaskCommentsForm from './Form'

class TaskCommentsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      comments: []
    }
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = () => {
    this.setState({ isLoading: true })
    Api.fetchData(`task/${this.props.taskId}/comments`)
      .then(comments => {
        this.setState({ isLoading: false, comments })
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  render() {
    const { isLoading, msg, comments } = this.state
    const { taskId, showForm } = this.props

    if (isLoading) {
      return (
        <div className="TaskCommentsContainer">
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="TaskCommentsContainer">
          <Error message={msg} />
        </div>
      )
    } else {
      const form = showForm ? (
        <div className="mt-4">
          <TaskCommentsForm taskId={taskId} updateParentState={this.fetchData} />
        </div>
      ) : null

      return (
        <div className="TaskCommentsContainer">
          <TaskComments commentList={comments} taskId={taskId} />
          {form}
        </div>
      )
    }
  }
}

TaskCommentsContainer.defaultProps = {
  showForm: true
}

export default TaskCommentsContainer
