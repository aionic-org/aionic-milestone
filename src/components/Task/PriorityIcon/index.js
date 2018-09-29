import React from 'react'

import './PriorityIcon.css'

export const TaskPriorityIcon = props => {
  let icon = null
  let title = ''

  if (props.priority === 1) {
    icon = <i className="fas fa-angle-double-down" />
    title = 'Low priority'
  } else if (props.priority === 2) {
    icon = <i className="fas fa-minus" />
    title = 'Medium priority'
  } else if (props.priority === 3) {
    icon = <i className="fas fa-angle-double-up" />
    title = 'High priority'
  }

  return (
    <span
      className="TaskPriorityIcon float-right"
      data-toggle="tooltip"
      data-placement="top"
      title={title}
    >
      {icon}
    </span>
  )
}
