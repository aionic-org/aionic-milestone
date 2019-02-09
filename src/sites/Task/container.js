import React, { Component } from 'react'

import { Session } from 'services/session'
import { Api } from 'services/api'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import SitesTask from '.'

class SitesTaskContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      isNewTask: false,
      msg: '',
      task: {},
      taskUpdate: {
        status: '',
        msg: ''
      }
    }
  }

  componentDidMount = () => {
    const taskId = this.props.match.params.id

    // New task
    if (taskId === undefined) {
      this.setState({
        isLoading: false,
        isNewTask: true,
        task: { author: Session.getUser() }
      })
    } else {
      // Fetch existing task
      Api.fetchData(`task/${taskId}`)
        .then(task => {
          if (task) {
            this.setState({ isLoading: false, task })
          } else {
            this.setState({ isLoading: false, msg: 'Resource not found!' })
          }
        })
        .catch(err => {
          this.setState({
            isLoading: false,
            msg: Api.handleHttpError(err)
          })
        })
    }
  }

  handleInputChange = e => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (this.state.task[name] !== value) {
      const task = { ...this.state.task, [name]: value }

      this.setState({ task: task }, () => {
        if (!this.state.isNewTask) {
          this.updateTask()
        }
      })
    }
  }

  updateTask = task => {
    const _task = task || this.state.task

    Api.postData(`task/${_task.id}`, { task: _task })
      .then(res => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        this.setState({
          taskUpdate: {
            status: 'Success',
            msg: 'Task updated'
          }
        })

        setTimeout(() => {
          this.setState({
            taskUpdate: {
              status: '',
              msg: ''
            }
          })
        }, 1500)
      })
      .catch(err => {
        this.setState({
          taskUpdate: {
            status: 'Error',
            msg: 'Failed to update task!'
          }
        })
      })
  }

  createTask = task => {
    const _task = task || this.state.task

    Api.postData('task', { task: _task })
      .then(res => {
        this.props.history.push(`/task/${res.id}`)
      })
      .catch(err => {
        this.setState({
          taskUpdate: {
            status: 'Error',
            msg: Api.handleHttpError(err)
          }
        })
      })
  }

  render() {
    const { isLoading, isNewTask, msg, task, taskUpdate } = this.state

    if (isLoading) {
      return (
        <div className="SitesTaskContainer">
          <Spinner wrapContent={true} />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="SitesTaskContainer">
          <Error message={msg} wrapContent={true} />
        </div>
      )
    } else {
      return (
        <SitesTask
          isNewTask={isNewTask}
          task={task}
          taskUpdate={taskUpdate}
          createTask={this.createTask}
          handleInputChange={this.handleInputChange}
        />
      )
    }
  }
}

export default SitesTaskContainer
