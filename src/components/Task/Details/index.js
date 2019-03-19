import React from 'react'

import './Details.css'

import TaskDetailsGeneralContainer from './General/container'
import TaskDetailsGitContainer from './Git/container'

const TaskDetails = props => {
  return (
    <div className="TaskDetails">
      <TaskDetailsGeneralContainer {...props} />
      <TaskDetailsGitContainer {...props} />
    </div>
  )
}

TaskDetails.defaultProps = {
  isNewTask: false
}

export default TaskDetails
