import React, { Component } from 'react'

import { Api } from '../../../../services/api'
import Error from '../../../UI/Error'

class TaskCommentsForm extends Component {
  constructor(props) {
    super(props)

    this.state = { comment: {}, isLoading: false, msg: '' }
  }

  handleInputChange = e => {
    const value = e.target.value

    this.setState({
      comment: {
        comment: value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.comment.comment && this.state.comment.comment.length) {
      Api.postData(`task/${this.props.task.id}/comments`, { comment: this.state.comment })
        .then(res => {
          this.props.updateParentState()
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
      <div className={`TaskCommentsForm ${this.props.assignedClasses.join(' ')}`}>
        <form onSubmit={this.handleSubmit}>
          <textarea
            className="form-control"
            name="comment"
            rows="3"
            onChange={this.handleInputChange}
          />

          <button className="btn btn-md btn-primary btn-block mt-2" type="submit">
            <i className="fas fa-sign-in-alt" /> Post
          </button>
          {msg}
        </form>
      </div>
    )
  }
}

TaskCommentsForm.defaultProps = {
  assignedClasses: [],
  updateParentState: () => {}
}

export default TaskCommentsForm
