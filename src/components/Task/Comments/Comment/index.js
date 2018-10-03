import React from 'react'

const TaskComment = props => {
  return (
    <div className="TaskComment">
      <div className="card">
        <div className="card-header font-weight-bold">
          <span>{`${props.comment.author.firstname} ${props.comment.author.lastname}`}</span>
        </div>
        <div className="card-body">
          <p className="card-text">{props.comment.text}</p>
          <p className="card-text">
            <small className="text-muted">Created: {props.comment.created} </small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TaskComment
