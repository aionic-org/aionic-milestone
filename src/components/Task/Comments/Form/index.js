import React, { Component } from 'react'

class TaskCommentsForm extends Component {
  constructor(props) {
    super(props)

    this.state = { comment: '', isLoading: false, msg: '' }
  }

  handleInputChange = e => {
    const value = e.target.value

    this.setState({
      comment: value
    })
  }

  handleSubmit = e => {}

  render() {
    return (
      <div className={`TaskCommentsForm ${this.props.assignedClasses.join(' ')}`}>
        <form onSubmit={this.handleSubmit}>
          <textarea class="form-control" name="comment" rows="3" />

          <button className="btn btn-md btn-primary btn-block mt-2" type="submit">
            <i className="fas fa-sign-in-alt" /> Post
          </button>
        </form>
      </div>
    )
  }
}

export default TaskCommentsForm
