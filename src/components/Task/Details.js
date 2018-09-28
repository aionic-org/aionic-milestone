import React from 'react'

import { UsersList } from '../User/UsersList'
import { TaskStatusList } from './StatusList'

export const TaskDetails = props => (
  <div className="TaskDetails">
    <form>
      <p className="text-muted font-italic">Details</p>
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">
          Assignee
        </label>
        <div className="col-sm-4">
          <UsersList name="assignee" userList={props.userList} selectedUser={props.task.assignee} />
        </div>
        <label className="col-sm-2 col-form-label">Author</label>
        <div className="col-sm-4">
          <UsersList name="assignee" userList={props.userList} selectedUser={props.task.author} />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Status</label>
        <div className="col-sm-4">
          <TaskStatusList statusList={props.statusList} selectedStatus={props.task.status} />
        </div>

        <label className="col-sm-2 col-form-label">Branch</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={props.task.branch} />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Created</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={props.task.created} disabled />
        </div>

        <label className="col-sm-2 col-form-label">Updated</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={props.task.updated} disabled />
        </div>
      </div>

      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Priority</legend>
          <div className="col-sm-4">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priority"
                value="1"
                defaultChecked
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="priority" value="2" />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="priority" value="3" />
              <label className="form-check-label">High</label>
            </div>
          </div>
        </div>
      </fieldset>

      <div className="form-group row">
        <div className="col-sm-2">More</div>
        <div className="col-sm-4">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" for="gridCheck1">
              Save task
            </label>
          </div>
        </div>
      </div>
    </form>
  </div>
)
