import React from 'react'
import { Link } from 'react-router-dom'

import TaskPriorityIcon from './Priority'
import TaskLabel from './Label'

const TaskPreview = props => {
  const { task } = props

  return (
    <Link to={`/task/${task.id}`} className="TaskPreview CardLink card">
      <div className="card-header font-weight-bold">
        <span>{task.title}</span>
        <TaskLabel task={task} assignedClasses={['ml-3', 'mt-1']} />
        <TaskPriorityIcon task={task} />
      </div>
      <div className="card-body">
        <h6 className="card-subtitle text-muted">
          {task.assignee ? task.assignee.firstname + ' ' + task.assignee.lastname : '-'}
        </h6>
      </div>

      <div className="card-footer">
        <p className="card-text">
          <small className="text-muted">Last update: {task.updated} </small>
        </p>
      </div>
    </Link>
  )
}

TaskPreview.defaultProps = {
  highlightAssignee: false
}

export default TaskPreview
