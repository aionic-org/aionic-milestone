import React, { useState } from 'react'

import { withRouter } from 'react-router'
import ReactModal from 'react-modal'
import queryString from 'query-string'

import BoardsForm from './Form'

const BoardsCreate = props => {
  const { location } = props

  const { create } = queryString.parse(location.search)
  const [showModal, setShowModal] = useState(create === 'true') // query param is of type string

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="BoardsCreate">
      <div className="form-group">
        <button type="button" className="btn btn-primary btn-block" onClick={handleOpenModal}>
          <i className="fas fa-plus mr-2" />
          Create board
        </button>
      </div>

      <ReactModal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        className="Modal"
        overlayClassName="Modal-Overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">Create board</h5>
          <button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <BoardsForm />
        </div>
      </ReactModal>
    </div>
  )
}

export default withRouter(BoardsCreate)
