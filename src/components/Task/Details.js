import React from 'react'

import { Session } from '../../services/session'

import UserList from '../User/UserList'
import TaskStatusList from './StatusList'
import InputRadio from '../UI/Input/Radio'

const TaskDetails = props => (
  <div className="TaskDetails">
    <p className="text-muted font-italic">Details</p>
    <div className="form-group row">
      <label className="col-sm-2 col-form-label">Assignee</label>
      <div className="col-sm-4">
        <UserList
          name="assignee"
          userList={props.userList}
          defaultValue={props.task.assignee ? props.task.assignee.id : undefined}
          onChange={props.handleInputChange}
        />
      </div>
      <label className="col-sm-2 col-form-label">Author</label>
      <div className="col-sm-4">
        <UserList
          name="author"
          userList={props.userList}
          defaultValue={props.task.author ? props.task.author.id : Session.getUser().id}
          onChange={props.handleInputChange}
        />
      </div>
    </div>

    <div className="form-group row">
      <label className="col-sm-2 col-form-label">Status</label>
      <div className="col-sm-4">
        <TaskStatusList
          statusList={props.statusList}
          defaultValue={props.task.status ? props.task.status.id : undefined}
          onChange={props.handleInputChange}
        />
      </div>

      <label className="col-sm-2 col-form-label">Branch</label>
      <div className="col-sm-4">
        <input
          type="text"
          name="branch"
          className="form-control"
          defaultValue={props.task.branch ? props.task.branch : ''}
          onBlur={props.handleInputChange}
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
          value={props.task.created ? props.task.created : ''}
          disabled
        />
      </div>

      <label className="col-sm-2 col-form-label">Updated</label>
      <div className="col-sm-4">
        <input
          type="text"
          name="updated"
          className="form-control"
          value={props.task.updated ? props.task.updated : ''}
          disabled
        />
      </div>
    </div>

    <fieldset className="form-group">
      <div className="row">
        <legend className="col-form-label col-sm-2 pt-0">Priority</legend>
        <div className="col-sm-4">
          {props.priorityList.map(priority => (
            <InputRadio
              value={priority.value}
              title={priority.title}
              key={priority.id}
              defaultChecked={props.task.priority ? props.task.priority.value : undefined}
              onChange={props.handleInputChange}
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

TaskDetails.defaultProps = {
  isNewTask: false
}

export default TaskDetails
