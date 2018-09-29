import React from 'react'

import { UsersList } from '../User/UsersList'
import { TaskStatusList } from './StatusList'
import { TaskPriority } from './Priority'

export const TaskDetails = props => (
  <div className="TaskDetails">
    <p className="text-muted font-italic">Details</p>
    <div className="form-group row">
      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
        Assignee
      </label>
      <div className="col-sm-4">
        <UsersList
          name="assignee"
          userList={props.userList}
          selectedUser={props.task.assignee}
          onChange={props.handleInputChange}
        />
      </div>
      <label className="col-sm-2 col-form-label">Author</label>
      <div className="col-sm-4">
        <UsersList
          name="author"
          userList={props.userList}
          selectedUser={props.task.author}
          onChange={props.handleInputChange}
        />
      </div>
    </div>

    <div className="form-group row">
      <label className="col-sm-2 col-form-label">Status</label>
      <div className="col-sm-4">
        <TaskStatusList
          statusList={props.statusList}
          selectedStatus={props.task.status}
          onChange={props.handleInputChange}
        />
      </div>

      <label className="col-sm-2 col-form-label">Branch</label>
      <div className="col-sm-4">
        <input
          type="text"
          name="branch"
          className="form-control"
          value={props.task.branch}
          onChange={props.handleInputChange}
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
          value={props.task.created}
          disabled
        />
      </div>

      <label className="col-sm-2 col-form-label">Updated</label>
      <div className="col-sm-4">
        <input
          type="text"
          name="updated"
          className="form-control"
          value={props.task.updated}
          disabled
        />
      </div>
    </div>

    <fieldset className="form-group">
      <div className="row">
        <legend className="col-form-label col-sm-2 pt-0">Priority</legend>
        <div className="col-sm-4">
          <TaskPriority
            handleInputChange={props.handleInputChange}
            priorityList={props.priorityList}
            selectedPriority={props.task.priority}
          />
        </div>
      </div>
    </fieldset>

    <div className="form-group row">
      <div className="col-sm-2">More</div>
      <div className="col-sm-4">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1">
            Save task
          </label>
        </div>
      </div>
    </div>
  </div>
)
