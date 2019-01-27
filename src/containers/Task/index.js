import React, { Component } from 'react'

import { Session } from '../../services/session'
import { Api } from '../../services/api'

import ContainersTaskHOC from './HOC'
import Error from '../../components/UI/Error'
import Spinner from '../../components/UI/Spinner'
import ContainersTaskMainTabs from '../../components/Task/Tabs'
import TaskTitle from '../../components/Task/Title'
import TaskDetails from '../../components/Task/Details'
import Alert from '../../components/UI/Alert'
import TaskDescription from '../../components/Task/Description'

class ContainersTask extends Component {
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
    const taskID = this.props.match.params.id

    // new task
    if (taskID === undefined) {
      this.setState({
        isLoading: false,
        isNewTask: true,
        task: { author: Session.getUser() }
      })
    } else {
      // fetch existing task
      Api.fetchData(`task/${taskID}`)
        .then(res => {
          if (res) {
            this.setState({ isLoading: false, task: res })
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
    const name = e.target.name
    const value = e.target.value.length ? e.target.value : null

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
    console.log(task, this.state.task)

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
        <ContainersTaskHOC>
          <Spinner />
        </ContainersTaskHOC>
      )
    } else if (msg.length) {
      return (
        <ContainersTaskHOC>
          <Error message={msg} />
        </ContainersTaskHOC>
      )
    } else {
      const taskUpdateAlert = !taskUpdate.status.length ? null : (
        <Alert
          assignedClass={taskUpdate.status === 'Success' ? 'success' : 'danger'}
          title={taskUpdate.status}
          message={taskUpdate.msg}
        />
      )

      const taskFooter = isNewTask ? (
        <div className="row">
          <div className="col-xl-8">
            <button
              className="btn btn-primary btn-block"
              onClick={() => {
                this.createTask()
              }}
            >
              Create task
            </button>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-xl-8 mt-4">
            <ContainersTaskMainTabs task={task} />
          </div>
        </div>
      )

      return (
        <ContainersTaskHOC>
          <div>
            <div className="mb-2">
              <TaskTitle defaultValue={this.state.task.title} onBlur={this.handleInputChange} />
              <hr className="featurette-divider" />
            </div>
            <div className="row">
              <div className="col-xl-8">
                <TaskDetails handleInputChange={this.handleInputChange} task={this.state.task} />
              </div>
              <div className="col-xl-4">{taskUpdateAlert}</div>
            </div>
            <div className="row">
              <div className="col-xl-8">
                <TaskDescription
                  task={this.state.task}
                  handleInputChange={this.handleInputChange}
                />
              </div>
            </div>
            {taskFooter}
          </div>
        </ContainersTaskHOC>
      )
    }
  }
}

export default ContainersTask
