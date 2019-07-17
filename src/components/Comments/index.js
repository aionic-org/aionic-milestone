import React, { useState } from 'react'

import './Comments.scss'

import TaskCommentContainer from '../Task/Comments/Comment/container'
import ProjectCommentContainer from '../Project/Comments/Comment/container'

const Comments = props => {
  const { type, typeId, commentList } = props
  const [comments, setComments] = useState(commentList)

  const removeComment = id => {
    const newComments = comments.filter(comment => {
      return comment.id !== id
    })

    setComments(newComments)
  }

  return (
    <div className="Comments">
      <div className="list-group">
        {comments.map(comment => {
          switch (type) {
            case 'Task':
              return (
                <TaskCommentContainer
                  comment={comment}
                  taskId={typeId}
                  removeComment={removeComment}
                  key={comment.id}
                />
              )
            case 'Project':
              return (
                <ProjectCommentContainer
                  comment={comment}
                  projectId={typeId}
                  removeComment={removeComment}
                  key={comment.id}
                />
              )
            default:
              return null
          }
        })}
      </div>
      <p className="text-muted text-center mt-2">Total: {comments.length}</p>
    </div>
  )
}

Comments.defaultProps = {
  commentList: []
}

export default Comments
