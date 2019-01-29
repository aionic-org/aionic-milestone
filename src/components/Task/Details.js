import React, { Component } from 'react'

import { Session } from 'services/session'
import { Api } from 'services/api'

import InputRadio from 'components/UI/Input/Radio'
import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import UserList from 'components/User/UserList'
import TaskStatusList from './StatusList'

class TaskDetails extends Component {
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
        <div className="TaskDetails">
          <p className="text-muted font-italic">Details</p>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Assignee</label>
            <div className="col-sm-4">
              <UserList
                name="assignee"
                userList={userList}
                defaultValue={this.props.task.assignee ? this.props.task.assignee.id : undefined}
                onChange={this.props.handleInputChange}
              />
            </div>
            <label className="col-sm-2 col-form-label">Author</label>
            <div className="col-sm-4">
              <UserList
                name="author"
                userList={userList}
                defaultValue={
                  this.props.task.author
                    ? this.props.task.author.id
                    : this.props.isNewTask
                    ? Session.getUser().id
                    : ''
                }
                onChange={this.props.handleInputChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Status</label>
            <div className="col-sm-4">
              <TaskStatusList
                statusList={statusList}
                defaultValue={this.props.task.status ? this.props.task.status.id : undefined}
                onChange={this.props.handleInputChange}
              />
            </div>

            <label className="col-sm-2 col-form-label">Branch</label>
            <div className="col-sm-4">
              <input
                type="text"
                name="branch"
                className="form-control"
                defaultValue={this.props.task.branch ? this.props.task.branch : ''}
                onBlur={this.props.handleInputChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Created</label>
            <div className="col-sm-4">
              <input
                type="text"
                name="created"
                className="form-control"
                value={this.props.task.created ? this.props.task.created : ''}
                disabled
              />
            </div>

            <label className="col-sm-2 col-form-label">Updated</label>
            <div className="col-sm-4">
              <input
                type="text"
                name="updated"
                className="form-control"
                value={this.props.task.updated ? this.props.task.updated : ''}
                disabled
              />
            </div>
          </div>

          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Priority</legend>
              <div className="col-sm-4">
                {priorityList.map(priority => (
                  <InputRadio
                    value={priority.value}
                    title={priority.title}
                    key={priority.id}
                    defaultChecked={
                      this.props.task.priority ? this.props.task.priority.value : undefined
                    }
                    onChange={this.props.handleInputChange}
                  />
                ))}
              </div>
            </div>
          </fieldset>

          <div className="form-group row">
            <div className="col-sm-2">More</div>
            <div className="col-sm-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Remember
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

TaskDetails.defaultProps = {
  isNewTask: false
}

export default TaskDetails
