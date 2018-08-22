import React from 'react'

import './TaskPriority.css'

export const TaskPriority = props => {
  let icon = null
  let title = ''
  if (props.priority === 1) {
    icon = <i class="fas fa-angle-double-down" />
    title = 'Low priority'
  } else if (props.priority === 2) {
    icon = <i class="fas fa-minus" />
    title = 'Medium priority'
  } else if (props.priority === 3) {
    icon = <i class="fas fa-angle-double-up" />
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
