import React from 'react'

import TaskSuggestion from './Suggestion'

const TaskLinks = props => {
  const { task, updateTask } = props

  const handleChange = taskList => {
    const updatedTask = { ...task, links: taskList }
    updateTask(updatedTask)
  }

  return (
    <div className="TaskLinks">
      <TaskSuggestion updateParent={handleChange} taskListSelected={task.links} />
    </div>
  )
}

export default TaskLinks
