import React, { useState } from 'react'

import ReactModal from 'react-modal'

import Content from 'components/UI/Content'
import InputTitle from 'components/UI/Input/Title/'

import Widget from 'components/Widget'

import SitesBoardDetails from './components/Details'

import BoardContainer from 'components/Board/container'

const SitesBoard = props => {
  const { board, handleInputChange, deleteBoard, updateBoardUsers } = props

  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="SitesBoard">
      <Content>
        <InputTitle
          defaultValue={board.title}
          placeholder={'Enter board title'}
          onBlur={handleInputChange}
        />
        <div className="row">
          <div className="col-12">
            <Widget title="Board" icon="fas fa-tasks">
              <BoardContainer userList={board.users} showDetails={setShowModal} />
            </Widget>
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
