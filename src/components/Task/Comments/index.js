import React from 'react'

import './Comments.css'

import TaskComment from './Comment/'
import TaskCommentsForm from './Form'

const TaskComments = props => (
  // TODO: Max 4 cards in one row
  <div className="TaskComments">
    {props.commentList.map(comment => {
      return <TaskComment key={comment.id} comment={comment} />
    })}

    {props.showForm ? <TaskCommentsForm assignedClasses={['mt-5']} /> : null}
  </div>
)

TaskComments.defaultProps = {
  commentList: [],
  showForm: false
}

export default TaskComments
