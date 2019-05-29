import React from 'react'

import UserSuggestion from 'components/User/Suggestion'

const SitesBoardDetails = props => {
  const { board, handleInputChange, deleteBoard, updateBoardUsers } = props

  return (
    <div className="SitesBoardDetails">
      <p className="text-muted font-weight-bold">Description</p>
      <textarea
        name="description"
        className="form-control mt-2"
        rows="3"
        defaultValue={board.description}
        onBlur={handleInputChange}
      />

      <p className="text-muted font-weight-bold mt-4">Users</p>
      <UserSuggestion userListSelected={board.users} updateParent={updateBoardUsers} />
      <small className="text-muted d-block text-right mt-3">Updated: {board.updated} </small>

      <button className="btn btn-block btn-danger" onClick={deleteBoard}>
        Delete
      </button>
    </div>
  )
}

export default SitesBoardDetails
