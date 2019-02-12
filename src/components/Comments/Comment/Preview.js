import React from 'react'

import { Session } from 'services/session'

const Comment = props => {
  const { comment, deleteComment } = props

  return (
    <div className="Comment">
      <div className="card">
        <div className="card-body">
          <p className="card-text">{comment.comment}</p>
          <p className="card-text">
            <small className="text-muted">
              {`${comment.author.firstname} ${comment.author.lastname}`}
              {' @'}
              {comment.created}{' '}
            </small>
            {comment.author.id === Session.getUser().id ? (
              <button
                className="btn btn-link float-right text-danger"
                onClick={() => {
                  deleteComment(comment.id)
                }}
              >
                Delete
              </button>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comment
