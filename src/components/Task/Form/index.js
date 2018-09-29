import React, { Component } from 'react'

import { Api } from '../../../services/api'

import { TaskDetails } from '../../../components/Task/Details'
import { TaskDescription } from '../../../components/Task/Description'
import { Alert } from '../../UI/Alert'
import { Spinner } from '../../UI/Spinner'
import { Error } from '../../UI/Error'

export class TaskForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      updateSuccess: null,
      userList: [],
      statusList: [],
      priorityList: []
    }
  }

  componentDidMount = () => {
    const requests = new Array(
      Api.fetchData('user'),
      Api.fetchData('task/status'),
      Api.fetchData('task/priority')
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
    const value = e.target.value

    const task = { ...this.props.task, [name]: value }

    // TODO: Prevent multiple updates for rapid input like description
    this.updateTask(task)
  }

  updateTask = task => {
    Api.postData(`task/base/${task.id}`, { task: task })
      .then(res => {
        this.setState(
          {
            updateSuccess: true
          },
          () => {
            this.props.updateStateTask(task)
            setTimeout(() => {
              this.setState({
                updateSuccess: null
              })
            }, 1500)
          }
        )
      })
      .catch(err => {
        this.setState({
          updateSuccess: false
        })
      })
  }

  render() {
    const { isLoading, msg, updateSuccess, userList, statusList, priorityList } = this.state
    const titleStyle = {
      border: 'none',
      padding: '10px 5px',
      background: 'transparent'
    }

    let taskUpdate = null
    if (updateSuccess !== null) {
      taskUpdate =
        updateSuccess === true ? (
          <Alert assignedClass="success" title="Success" message="Task updated!" />
        ) : (
          <Alert assignedClass="danger" title="Error" message="Failed to update task!" />
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
                style={titleStyle}
                defaultValue={this.props.task.title}
                onChange={this.handleInputChange}
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
            <div className="col-xl-4">{taskUpdate}</div>
          </div>
        </div>
      )
    }
  }
}
