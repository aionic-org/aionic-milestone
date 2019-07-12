import React from 'react'

import Progress from 'components/UI/Progress'
import Widget from 'components/UI/Widget'

const ProjectsWidgetbar = props => {
  const { allProjects } = props

  const openProjects = allProjects.filter(project => !project.completed)
  const finishedProjects = allProjects.filter(project => project.completed)

  return (
    <div className="ProjectsWidgetbar mb-5">
      <div className="row">
        <div className="col-12 col-xl-4 mt-xl-0">
          <Widget title={openProjects.length} subtitle="Open projects" icon="fas fa-list" />
        </div>
        <div className="col-12 col-xl-4 mt-2 mt-xl-0">
          <Widget title={allProjects.length} subtitle="Total projects" icon="fas fa-table" />
        </div>
        <div className="col-12 col-xl-4 mt-2 mt-xl-0">
          <Widget
            title={finishedProjects.length}
            subtitle="Finished projects"
            icon="fas fa-check"
            subcontent={
              <div className="col">
                <Progress progress="70" showPercent={true} />
              </div>
            }
          />
        </div>
      </div>
      <hr className="featurette-divider" />
    </div>
  )
}

export default ProjectsWidgetbar
