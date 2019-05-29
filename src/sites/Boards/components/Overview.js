import React, { useState } from 'react'
import { withRouter } from 'react-router'

import ReactModal from 'react-modal'
import queryString from 'query-string'

import BoardForm from './Form'

const SitesBoardOverview = props => {
  const { create } = queryString.parse(props.location.search)

  const { boards } = props
  const [showModal, setShowModal] = useState(create === 'true') // query param is of type string

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="SitesBoardOverview">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
          Boards
          <span className="badge badge-secondary badge-pill">{boards.length}</span>
        </li>
      </ul>

      <button className="btn btn-block mt-3 btn-primary" onClick={handleOpenModal}>
        Create board
      </button>

      <ReactModal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        className="Modal"
        overlayClassName="Modal-Overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">Create Board</h5>
          <button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <BoardForm />
        </div>
      </ReactModal>
    </div>
  )
}

export default withRouter(SitesBoardOverview)
