import React from 'react'

import InputRadio from 'components/UI/Input/Radio'

import TaskStatusList from 'components/Task/StatusList'
import TaskLabel from 'components/Task/Label'

const TaskDetailsGeneral = props => {
  const { lists, task, handleInputChange } = props
  const { statusList, priorityList } = lists

  return (
    <div className="TaskDetailsGeneral">
      <p className="text-muted">General</p>
      <hr className="featurette-divider" />
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Status</label>
        <div className="col-sm-4">
          <TaskStatusList
            statusList={statusList}
            defaultValue={task.status ? task.status.id : undefined}
            onChange={handleInputChange}
          />
        </div>
        <label className="col-sm-2 col-form-label">Tags</label>
        <div className="col-sm-4">
          <input type="text" name="tags" className="form-control" />
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
