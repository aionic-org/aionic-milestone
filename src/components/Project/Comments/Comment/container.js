import React, { Component } from 'react'

import { Api } from 'services/api'
import Comment from '../../../Comments/Comment/Preview'

class ProjectCommentContainer extends Component {
  deleteComment = id => {
    Api.deleteData(`projects/${this.props.taskId}/comments/${id}`)
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
      <div className="ProjectCommentContainer">
        <Comment comment={comment} deleteComment={this.deleteComment} />
      </div>
    )
  }
}

export default ProjectCommentContainer
