import React, { useState } from 'react'

import ReactModal from 'react-modal'

import Content from 'components/UI/Content'
import InputTitle from 'components/UI/Input/Title/'

import Widget from 'components/Widget'

import SitesBoardDetails from './components/Details'

import BoardContainer from 'components/Board/View/container'

const SitesBoard = props => {
  const { board, handleInputChange, deleteBoard, updateBoardUsers } = props

  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="SitesBoard">
      <Content>
        <div className="row">
          <div className="col">
            <InputTitle
              defaultValue={board.title}
              placeholder={'Enter board title'}
              onBlur={handleInputChange}
            />
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-secondary">
              <i className="fas fa-cog" />
            </button>
            <div className="btn-group ml-2">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
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
        <div className="row">
          <div className="col-12">
            <BoardContainer userList={board.users} showDetails={setShowModal} />
          </div>
        </div>

        <ReactModal
          isOpen={showModal}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="Modal-Overlay"
        >
          <div className="modal-header">
            <h5 className="modal-title">{board.title} Details</h5>
            <button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <SitesBoardDetails
              board={board}
              handleInputChange={handleInputChange}
              deleteBoard={deleteBoard}
              updateBoardUsers={updateBoardUsers}
            />
          </div>
        </ReactModal>
      </Content>
    </div>
  )
}

export default SitesBoard
