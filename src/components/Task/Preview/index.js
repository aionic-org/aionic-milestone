import React from 'react'
import { Link } from 'react-router-dom'

import './Preview.css'

import { Session } from 'services/session'

import TaskPriorityIcon from '../Priority/'

const TaskPreview = props => {
  const priorityIcon =
    props.task.priority !== null ? <TaskPriorityIcon priority={props.task.priority.value} /> : null

  const isAssignee =
    props.highlightAssignee &&
    props.task.assignee !== null &&
    props.task.assignee.id === Session.getUser().id
      ? 'isAssignee'
      : ''

  return (
    <Link to={`/task/${props.task.id}`} className={`TaskPreview CardLink card ${isAssignee}`}>
      <div className="card-header font-weight-bold">
        <span>{props.task.title}</span>
        {priorityIcon}
      </div>
      <div className="card-body">
        <h6 className="card-subtitle text-muted">
          {props.task.assignee
            ? props.task.assignee.firstname + ' ' + props.task.assignee.lastname
            : '-'}
        </h6>
      </div>

      <div className="card-footer">
        <p className="card-text">
          <small className="text-muted">Last update: {props.task.updated} </small>
        </p>
      </div>
    </Link>
  )
}

TaskPreview.defaultProps = {
  highlightAssignee: false
}

export default TaskPreview
