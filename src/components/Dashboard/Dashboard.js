import React, { Component } from 'react'

import { TasksFilter } from '../Tasks/TasksFilter'
import { TasksPreview } from '../Tasks/TasksPreview'

export class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Dashboard">
        <TasksFilter />
        <hr className="featurette-divider" />
        <p className="text-muted font-weight-bold mt-4">Your focus for this week</p>
        <TasksPreview tasks={[1, 2, 3, 4]} />
        <p className="text-muted font-weight-bold mt-5">Tasks from last week</p>
        <TasksPreview tasks={[1, 2, 3]} />
      </div>
    )
  }
}
