import React from 'react'
import { Link } from 'react-router-dom'

import './Preview.css'

import TaskPriorityIcon from '../../Priority/'

const TaskPreview = props => {
  const priorityIcon =
    props.task.priority !== null ? <TaskPriorityIcon priority={props.task.priority.value} /> : null

  return (
    <Link to={`/task/${props.task.id}`} className="TaskPreview TaskLink card">
      <div className="card-header font-weight-bold">
        <span>{props.task.title}</span>
        {priorityIcon}
      </div>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">
          {props.task.author ? props.task.author.firstname + ' ' + props.task.author.lastname : '-'}
        </h6>
        <p className="card-text">{props.task.description}</p>
        <p className="card-text">
          <small className="text-muted">Last update: {props.task.updated} </small>
        </p>
      </div>
    </Link>
  )
}

export default TaskPreview
