import React, { Component } from 'react'

import { Api } from '../../../services/api'

import Alert from '../../UI/Alert'
import Spinner from '../../UI/Spinner'
import Error from '../../UI/Error'
import TaskDetails from '../../../components/Task/Details'
import TaskDescription from '../../../components/Task/Description'

export default class TaskForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      taskUpdate: {
        status: '',
        msg: ''
      },
      userList: [],
      statusList: [],
      priorityList: []
    }
  }

  componentDidMount = () => {
    const requests = new Array(
      Api.fetchData('user/'),
      Api.fetchData('taskStatus/'),
      Api.fetchData('taskPriority/')
    )

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

  handleInputChange = e => {
    const name = e.target.name
    const value = e.target.value.length ? e.target.value : null

    if (this.props.task[name] !== value) {
      const task = { ...this.props.task, [name]: value }

      if (this.props.doLiveUpdate === true) {
        this.updateTask(task)
      } else {
        this.props.updateStateTask(task)
      }
    }
  }

  createTask = () => {
    Api.postData('task', { task: this.props.task })
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

  updateTask = task => {
    Api.postData(`task/${task.id}`, { task: task })
      .then(res => {
        this.props.updateStateTask(task)
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

  render() {
    const { isLoading, msg, taskUpdate, userList, statusList, priorityList } = this.state

    const titleStyle = {
      border: 'none',
      padding: '10px 5px',
      background: 'transparent'
    }

    let taskUpdateAlert = null
    if (taskUpdate.status.length) {
      taskUpdateAlert = (
        <Alert
          assignedClass={taskUpdate.status === 'Success' ? 'success' : 'danger'}
          title={taskUpdate.status}
          message={taskUpdate.msg}
        />
      )
    }

    let taskCreateBtn = null
    if (this.props.isNewTask === true) {
      taskCreateBtn = (
        <button className="btn btn-primary btn-block" onClick={this.createTask}>
          Create task
        </button>
      )
    }

    if (isLoading) {
      return (
        <div className="TaskForm">
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="TaskForm">
          <Error message={msg} />
        </div>
      )
    } else {
      return (
        <div className="TaskForm">
          <div className="mb-2">
            <h1 className="h2">
              <input
                type="text"
                name="title"
                className="w-100"
                style={titleStyle}
                placeholder="Enter task title"
                autoComplete="off"
                defaultValue={this.props.task.title}
                onBlur={this.handleInputChange}
              />
            </h1>
            <hr className="featurette-divider" />
          </div>
          <div className="row">
            <div className="col-xl-8">
              <TaskDetails
                {...this.props}
                userList={userList}
                statusList={statusList}
                priorityList={priorityList}
                handleInputChange={this.handleInputChange}
              />

              <TaskDescription task={this.props.task} handleInputChange={this.handleInputChange} />
            </div>
            <div className="col-xl-4">{taskUpdateAlert}</div>
          </div>
          <div className="row">
            <div className="col-xl-8">{taskCreateBtn}</div>
          </div>
        </div>
      )
    }
  }
}

TaskForm.defaultProps = {
  doLiveUpdate: true,
  isNewTask: false,
  updateStateTask: () => {}
}
