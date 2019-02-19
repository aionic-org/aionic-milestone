import React from 'react'

import { Session } from 'services/session'

import InputRadio from 'components/UI/Input/Radio'

import UserList from 'components/User/UserList'

import TaskStatusList from 'components/Task/StatusList'
import TaskLabel from '../Label'
import GitRepositoryList from '../../Git/Repository/List'

const TaskDetails = props => {
  const { userList, statusList, priorityList, repoList, task, isNewTask, handleInputChange } = props

  return (
    <div className="TaskDetails">
      <p className="text-muted font-italic">
        Details
        <TaskLabel task={task} />
      </p>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Assignee</label>
        <div className="col-sm-4">
          <UserList
            name="assignee"
            userList={userList}
            defaultValue={task.assignee ? task.assignee.id : undefined}
            onChange={handleInputChange}
          />
        </div>
        <label className="col-sm-2 col-form-label">Author</label>
        <div className="col-sm-4">
          <UserList
            name="author"
            userList={userList}
            defaultValue={task.author ? task.author.id : isNewTask ? Session.getUser().id : ''}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Status</label>
        <div className="col-sm-4">
          <TaskStatusList
            statusList={statusList}
            defaultValue={task.status ? task.status.id : undefined}
            onChange={handleInputChange}
          />
        </div>

        <label className="col-sm-2 col-form-label">Repository / Branch</label>
        <div className="col-sm-2">
          <GitRepositoryList
            repoList={repoList}
            defaultValue={task.repository ? task.repository.id : undefined}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-sm-2">
          <input
            type="text"
            name="branch"
            className="form-control"
            defaultValue={task.branch ? task.branch : ''}
            onBlur={handleInputChange}
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
            value={task.created ? task.created : ''}
            disabled
          />
        </div>

        <label className="col-sm-2 col-form-label">Updated</label>
        <div className="col-sm-4">
          <input
            type="text"
            name="updated"
            className="form-control"
            value={task.updated ? task.updated : ''}
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
                defaultChecked={task.priority ? task.priority.value : undefined}
                onChange={handleInputChange}
              />
            ))}
          </div>

          <div className="col-sm-2">Closed</div>
          <div className="col-sm-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="closed"
                onChange={handleInputChange}
                checked={task.closed ? true : false}
              />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  )
}

TaskDetails.defaultProps = {
  isNewTask: false
}

export default TaskDetails
