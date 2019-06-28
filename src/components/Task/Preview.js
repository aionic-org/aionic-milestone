import React from 'react'
import { Link } from 'react-router-dom'

import TaskPriorityIcon from './Priority'
import TaskBadgeCompleted from './Badges/Completed'

const TaskPreview = props => {
  const { task } = props

  return (
    <Link to={`/task/${task.id}`} className="TaskPreview CardLink card">
      <div className="card-header font-weight-bold">
        <div className="row">
          <div className="col">
            <span>{task.title}</span>
          </div>
          <div className="col-auto">
            <TaskBadgeCompleted task={task} assignedClasses={['float-right', 'ml-3', 'mt-1']} />
            <TaskPriorityIcon task={task} />
          </div>
        </div>
      </div>
      <div className="card-body">
        <h6 className="card-subtitle text-muted">
          {task.status ? task.status.title : ''} (
          {task.assignee ? task.assignee.firstname + ' ' + task.assignee.lastname : '-'})
        </h6>
      </div>
      <div className="card-footer text-muted">
        <small>Updated: {task.updated} </small>
      </div>
    </Link>
  )
}

TaskPreview.defaultProps = {
  highlightAssignee: false
}

export default TaskPreview
