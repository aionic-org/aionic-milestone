import React, { useState } from 'react'

import { withRouter } from 'react-router'
import ReactModal from 'react-modal'
import queryString from 'query-string'

import ProjectForm from './Form'

const ProjectsActionbar = props => {
  const { location, updateSearchParams, filterByText } = props

  const { create } = queryString.parse(location.search)
  const [showModal, setShowModal] = useState(create === 'true') // query param is of type string

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleTextFilter = e => {
    filterByText(e.target.value)
  }

  const handleSearchParamChange = e => {
    const target = e.target
    updateSearchParams({ [target.name]: target.value })
  }

  return (
    <div className="ProjectsActionbar">
      <div className="row">
        <div className="col-12 col-xl-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Filter projects..."
              onChange={handleTextFilter}
            />
          </div>
        </div>
        <div className="col-12 col-xl-2">
          <div className="input-group form-group">
            <select className="form-control" name="orderby" onChange={handleSearchParamChange}>
              <option value="">Order by</option>
              <option value="created">Created</option>
              <option value="done">Done</option>
              <option value="title">Title</option>
              <option value="updated">Updated</option>
            </select>
            <select
              className="form-control ml-2"
              name="orderdir"
              onChange={handleSearchParamChange}
            >
              <option value="">Direction</option>
              <option value="ASC">ASC</option>
              <option value="DESC">DESC</option>
            </select>
          </div>
        </div>
        <div className="col-12 col-xl-2">
          <div className="form-group">
            <select className="form-control" name="limit" onChange={handleSearchParamChange}>
              <option value="">Max results</option>
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div className="col-12 col-xl-2">
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary btn-block ml-2"
              onClick={handleOpenModal}
            >
              <i className="fas fa-plus mr-1" />
              Create project
            </button>
          </div>
        </div>
      </div>

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

export default withRouter(ProjectsActionbar)
