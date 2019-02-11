import React from 'react'

const TaskLabel = props => {
  const { task } = props

  return task.closed ? (
    <span class="TaskLabel badge badge-primary float-right ml-3 mt-1">Closed</span>
  ) : null
}

export default TaskLabel
