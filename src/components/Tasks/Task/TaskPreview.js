import React from 'react'
import { Link } from 'react-router-dom'

import './TaskPreview.css'

import { TaskPriority } from './TaskPriority'

export const TaskPreview = props => (
  <Link to="task/1" className="TaskPreview TaskLink card">
    <div className="card-header font-weight-bold">
      <span>Fix user login</span>
      <TaskPriority priority={Math.floor(Math.random() * 3 + 1)} />
    </div>
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">John Doe</h6>
      <p className="card-text">
        This is a longer card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </p>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </Link>
)
