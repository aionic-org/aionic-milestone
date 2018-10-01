import React from 'react'

import TaskPreview from './Preview/'

const TaskPreviews = props => (
  // TODO: Max 4 cards in one row
  <div className="TasksPreview">
    <div className="card-deck">
      {props.taskList.map(task => {
        return <TaskPreview key={task.id} task={task} />
      })}
    </div>
  </div>
)

TaskPreviews.defaultProps = {
  taskList: []
}

export default TaskPreviews
