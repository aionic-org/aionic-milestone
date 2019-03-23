import React from 'react'

import { Session } from 'services/session'

import InputRadio from 'components/UI/Input/Radio'

import UserList from 'components/User/List'

import TaskStatusList from 'components/Task/StatusList'
import TaskLabel from 'components/Task/Label'

const TaskDetailsGeneral = props => {
  const { lists, task, isNewTask, handleInputChange } = props
  const { userList, statusList, priorityList } = lists

  return (
    <div className="TaskDetailsGeneral">
      <p className="text-muted">General</p>
      <hr className="featurette-divider" />
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Assignee / Author</label>
        <div className="col-sm-2">
          <UserList
            name="assignee"
            userList={userList}
            defaultValue={task.assignee ? task.assignee.id : undefined}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-sm-2">
          <UserList
            name="author"
            userList={userList}
            defaultValue={task.author ? task.author.id : isNewTask ? Session.getUser().id : ''}
            onChange={handleInputChange}
          />
        </div>

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

      <div className="form-group row">
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
            <TaskLabel task={task} assignedClasses={['mt-1']} />
          </div>
        </div>
      </div>
    </div>
  )
}

TaskDetailsGeneral.defaultProps = {
  isNewTask: false
}

export default TaskDetailsGeneral
