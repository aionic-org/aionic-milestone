import React, { Component } from 'react'

import './Comments.css'

import TaskCommentContainer from '../Task/Comments/Comment/container'
import ProjectCommentContainer from '../Project/Comments/Comment/container'

class Comments extends Component {
  constructor(props) {
    super()

    this.state = {
      commentList: props.commentList
    }
  }

  removeComment = id => {
    const comments = this.state.commentList.filter(comment => {
      return comment.id !== id
    })

    this.setState({
      commentList: comments
    })
  }

  render() {
    const { type, typeId } = this.props

    return (
      <div className="Comments">
        {this.state.commentList.map(comment => {
          switch (type) {
            case 'Task':
              return (
                <TaskCommentContainer
                  comment={comment}
                  taskId={typeId}
                  removeComment={this.removeComment}
                />
              )
            case 'Project':
              return (
                <ProjectCommentContainer
                  comment={comment}
                  taskId={typeId}
                  removeComment={this.removeComment}
                />
              )
            default:
              break
          }
        })}
      </div>
    )
  }
}

Comments.defaultProps = {
  commentList: []
}

export default Comments
