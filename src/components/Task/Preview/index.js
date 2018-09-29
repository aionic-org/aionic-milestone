import React from 'react'
import { Link } from 'react-router-dom'

import './Preview.css'

import { TaskPriorityIcon } from '../PriorityIcon/'

export const TaskPreview = props => (
  <Link to={`task/${props.task.id}`} className="TaskPreview TaskLink card">
    <div className="card-header font-weight-bold">
      <span>{props.task.title}</span>
      <TaskPriorityIcon priority={props.task.priority.value} />
    </div>
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">
        {props.task.author.firstname + ' ' + props.task.author.lastname}
      </h6>
      <p className="card-text">{props.task.description}</p>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </Link>
)
