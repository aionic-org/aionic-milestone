import React from 'react'

import { TaskPreview } from './Task/TaskPreview'

export const TasksPreview = props => (
  // TODO: Max 4 cards in one row
  <div className="TasksPreview">
    <div className="card-deck">
      {props.tasks.map((task, i) => {
        return <TaskPreview key={i} task={task} />
      })}
    </div>
  </div>
)
