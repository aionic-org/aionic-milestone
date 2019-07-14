import React from 'react'

const ProjectOptionButtons = props => {
  const { project, updateParentProjectState } = props

  const toggleComplete = () => {
    updateParentProjectState({ ...project, completed: !project.completed })
  }

  const completeBtn = project.completed ? (
    <button type="button" className="btn btn-warning" onClick={toggleComplete}>
      <i className="fas fa-redo mr-2" /> Reopen
    </button>
  ) : (
    <button type="button" className="btn btn-secondary" onClick={toggleComplete}>
      <i className="fas fa-check mr-2" />
      Mark complete
    </button>
  )

  return (
    <div className="ProjectOptionButtons">
      <div className="float-md-right">
        {completeBtn}
        <div className="btn-group ml-2">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle disabled"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">
              <i className="fas fa-share fa-fw mr-2" /> Share
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-print fa-fw mr-2" /> Print
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-archive fa-fw mr-2" /> Archive
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item text-danger" href="#">
              <i className="fas fa-trash fa-fw mr-2" /> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

ProjectOptionButtons.defaultProps = {
  assignedClasses: []
}

export default ProjectOptionButtons
