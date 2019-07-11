import React from 'react'

import { Helper } from 'services/helper'
import { Session } from 'services/session'

import TaskSelectsStatus from 'components/Task/Selects/Status'
import TaskSelectsPriority from 'components/Task/Selects/Priority'
import TaskSelectsLabel from 'components/Task/Selects/Label'

import InputSuggestion from 'components/UI/Input/Suggestion'

const TaskSummary = props => {
  const { lists, task, updateParentTaskState, isNewTask } = props
  const { statusList, priorityList, userList } = lists

  const userListPrepared = userList.map(user => {
    return {
      id: user.id,
      text: `${user.firstname} ${user.lastname}`
    }
  })

  const handleInputSuggestion = element => {
    updateParentTaskState({ ...task, [element.name]: element.id })
  }

  const handleInputChange = e => {
    Helper.updateObjectPropByEvent(task, e, updateParentTaskState)
  }

  return (
    <div className="TaskSummary mt-2">
      <p className="text-muted">
        Summary <span className="float-right">Updated: {task.created}</span>
      </p>
      <hr className="featurette-divider" />

      <div className="form-group row">
        <div className="col-12 col-md-4">
          <label className="col-12 col-form-label">Status</label>
          <div className="col-12">
            <TaskSelectsStatus
              statusList={statusList}
              defaultValue={task.status ? task.status.id : undefined}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-12 col-md-4">
          <label className="col-12 col-form-label">Assignee</label>
          <div className="col-12">
            <InputSuggestion
              elementList={userListPrepared}
              name="assignee"
              placeholder="Enter username"
              defaultValue={task.assignee ? task.assignee.id : undefined}
              updateParent={handleInputSuggestion}
            />
          </div>
        </div>

        <div className="col-12 col-md-4">
          <label className="col-12 col-form-label">Author</label>
          <div className="col-12">
            <InputSuggestion
              elementList={userListPrepared}
              name="author"
              placeholder="Enter username"
              defaultValue={task.author ? task.author.id : isNewTask ? Session.getUser().id : ''}
              updateParent={handleInputSuggestion}
            />
          </div>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-12 col-md-4">
          <label className="col-12 col-form-label">Created</label>
          <div className="col-12">
            <input
              type="text"
              name="created"
              className="form-control"
              value={task.created ? task.created : ''}
              disabled
            />
          </div>
        </div>

        <div className="col-12 col-md-4">
          <label className="col-12 col-form-label">Priority</label>
          <div className="col-12">
            <TaskSelectsPriority
              priorityList={priorityList}
              defaultValue={task.priority ? task.priority.value : undefined}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-12 col-md-4">
          <label className="col-12 col-form-label">Label</label>
          <div className="col-12">
            <TaskSelectsLabel
              defaultValue={task.label ? task.label : undefined}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

TaskSummary.defaultProps = {
  isNewTask: false
}

export default TaskSummary
