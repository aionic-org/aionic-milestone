import React, { useState } from 'react'
import ReactModal from 'react-modal'

import ProjectForm from '../Form'

const SitesProjectsOverview = props => {
  const { projects } = props
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const finishedProjects = projects.filter(project => project.done).length
  const openProjects = projects.length - finishedProjects

  return (
    <div className="SitesProjectsOverview">
      <p className="text-muted font-weight-bold">Overview</p>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
          Projects
          <span className="badge badge-primary badge-pill">{projects.length}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Open projects
          <span className="badge badge-primary badge-pill">{openProjects}</span>
          Finished projects
          <span className="badge badge-primary badge-pill">{finishedProjects}</span>
        </li>
      </ul>

      <button className="btn btn-block mt-3 btn-primary" onClick={handleOpenModal}>
        Create project
      </button>

      <ReactModal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        className="Modal"
        overlayClassName="Modal-Overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">Create Project</h5>
          <button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <ProjectForm />
        </div>
      </ReactModal>
    </div>
  )
}

export default SitesProjectsOverview
