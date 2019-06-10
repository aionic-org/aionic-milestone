import React from 'react'

const TaskLabel = props => {
  const { task, assignedClasses } = props

  return task.completed ? (
    <span className={`TaskLabel badge badge-primary float-right ${assignedClasses.join(' ')}`}>
      Closed
    </span>
  ) : null
}

TaskLabel.defaultProps = {
  assignedClasses: []
}

export default TaskLabel
