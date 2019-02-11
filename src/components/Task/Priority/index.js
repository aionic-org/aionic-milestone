import React from 'react'

import './Priority.css'

const TaskPriority = props => {
  const { task } = props

  let icon = null
  let title = ''

  if (!task.priority) {
    return null
  } else if (task.priority === 1) {
    icon = <i className="fas fa-angle-double-down" />
    title = 'Low priority'
  } else if (task.priority === 2) {
    icon = <i className="fas fa-minus" />
    title = 'Medium priority'
  } else if (task.priority === 3) {
    icon = <i className="fas fa-angle-double-up" />
    title = 'High priority'
  }

  return (
    <span
      className="TaskPriority float-right"
      data-toggle="tooltip"
      data-placement="top"
      title={title}
    >
      {icon}
    </span>
  )
}

export default TaskPriority
