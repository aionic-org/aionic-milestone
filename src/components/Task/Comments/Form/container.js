import React, { Component } from 'react'

import { Api } from 'services/api'

import Error from 'components/UI/Error'

import CommentForm from 'components/Comments/Comment/Form'

class TaskCommentsFormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { comment: {}, msg: '' }
  }

  handleInputChange = e => {
    const text = e.target.value

    this.setState({
      comment: {
        text
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.comment.text && this.state.comment.text.length) {
      Api.postData(`tasks/${this.props.taskId}/comments`, { comment: this.state.comment })
        .then(res => {
          this.props.updateParent()
        })
        .catch(err => {
          this.setState({ msg: Api.handleHttpError(err) })
        })
    }
  }

  render() {
    const msg = this.state.msg ? (
      <Error message={this.state.msg} showIcon={false} assignedClasses={['mt-0']} />
    ) : null

    return (
      <div className="TaskCommentsFormContainer">
        <CommentForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />
        {msg}
      </div>
    )
  }
}

TaskCommentsFormContainer.defaultProps = {
  updateParent: () => {}
}

export default TaskCommentsFormContainer
