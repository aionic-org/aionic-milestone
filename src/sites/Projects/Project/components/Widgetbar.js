import React from 'react'

import Progress from 'components/UI/Progress'
import Widget from 'components/UI/Widget'

const ProjectWidgetbar = props => {
  const { project } = props
  const { tasks } = project

  const openTasks = tasks.filter(task => !task.completed)
  const finishedTasks = tasks.filter(task => task.completed)

  return (
    <div className="ProjectWidgetbar">
      <div className="row">
        <div className="col-12 col-xl-3 mt-3 mt-xl-0">
          <Widget title={tasks.length} subtitle="Total tasks" icon="fas fa-table" />
        </div>
        <div className="col-12 col-xl-3 mt-2 mt-xl-0">
          <Widget title={openTasks.length} subtitle="Open tasks" icon="fas fa-list" />
        </div>
        <div className="col-12 col-xl-3 mt-2 mt-xl-0">
          <Widget
            title={finishedTasks.length}
            subtitle="Completed tasks"
            icon="fas fa-check"
            subcontent={
              <div className="col">
                <Progress progress="70" showPercent={true} />
              </div>
            }
          />
        </div>
        <div className="col-12 col-xl-3 mt-2 mt-xl-0">
          <Widget title={project.updated} subtitle="Last update" icon="fas fa-history" />
        </div>
      </div>
      <hr class="featurette-divider mb-5" />
    </div>
  )
}

export default ProjectWidgetbar
