import React from 'react'

import { Session } from 'services/session'

import InputRadio from 'components/UI/Input/Radio'

import UserList from 'components/User/List'

import TaskStatusList from 'components/Task/StatusList'
import TaskLabel from 'components/Task/Label'
import InputSuggestion from '../../../UI/Input/Suggestion'

const TaskDetailsGeneral = props => {
  const { lists, task, isNewTask, handleInputChange, updateTask } = props
  const { userList, statusList, priorityList } = lists

  const userListPrepared = userList.map(user => {
    return {
      id: user.id,
      text: `${user.firstname} ${user.lastname}`
    }
  })

  const updateParent = element => {
    updateTask({ ...task, [element.name]: element.id })
  }

  return (
    <div className="TaskDetailsGeneral">
      <p className="text-muted">General</p>
      <hr className="featurette-divider" />
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Assignee / Author</label>
        <div className="col-sm-2">
          <InputSuggestion
            elementList={userListPrepared}
            name="assignee"
            placeholder="Enter username"
            defaultValue={task.assignee ? task.assignee.id : undefined}
            updateParent={updateParent}
          />
        </div>
        <div className="col-sm-2">
          <InputSuggestion
            elementList={userListPrepared}
            name="author"
            placeholder="Enter username"
            defaultValue={task.author ? task.author.id : isNewTask ? Session.getUser().id : ''}
            updateParent={updateParent}
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
        <label className="col-sm-2 col-form-label">Priority</label>
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

        <label className="col-sm-2 col-form-label">Tags</label>
        <div className="col-sm-4">
          <input type="text" name="tags" className="form-control" />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Closed</label>
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
