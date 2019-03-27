import React, { Component } from 'react'

import { Api } from 'services/api'

import Comment from 'components/Comments/Comment/Preview'

class TaskCommentContainer extends Component {
  deleteComment = id => {
    Api.deleteData(`tasks/${this.props.taskId}/comments/${id}`)
      .then(res => {
        this.props.removeComment(id)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { comment } = this.props
    return (
      <div className="TaskCommentContainer">
        <Comment comment={comment} deleteComment={this.deleteComment} />
      </div>
    )
  }
}

export default TaskCommentContainer
