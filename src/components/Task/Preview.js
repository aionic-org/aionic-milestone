import React from 'react'
import { Link } from 'react-router-dom'

import { Helper } from 'services/helper'

import TaskPriorityIcon from './Priority'
import TaskBadgeCompleted from './Badges/Completed'

const TaskPreview = props => {
  const { task } = props

  const type = task.type ? (
    <span className="small mr-1 text-secondary">{`${task.type.title} `}</span>
  ) : null

  return (
    <Link to={`/task/${task.id}`} className="TaskPreview CardLink card">
      <div className="card-header font-weight-bold">
        <div className="row">
          <div className="col">
            {type}
            <span>{task.title}</span>
          </div>
          <div className="col-auto">
            <TaskBadgeCompleted task={task} assignedClasses={['float-right', 'ml-3', 'mt-1']} />
            <TaskPriorityIcon task={task} />
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text text-muted">
          {task.status ? task.status.title : ''} (
          {task.assignee ? task.assignee.firstname + ' ' + task.assignee.lastname : '-'})
        </p>
      </div>
      <div className="card-footer text-muted">
        <small>Updated: {Helper.formatDateTime(task.updated)} </small>
      </div>
    </Link>
  )
}

TaskPreview.defaultProps = {
  highlightAssignee: false
}

export default TaskPreview
