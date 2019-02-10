import React, { Component } from 'react'

import { withRouter } from 'react-router'

import { Api } from 'services/api'
import { Session } from 'services/session'

import Error from 'components/UI/Error'

import TaskSuggestion from 'components/Task/Suggestion'

class ProjectForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      msg: '',
      project: {
        author: Session.getUser()
      }
    }
  }

  handleInputChange = e => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (this.state.project[name] !== value) {
      const project = { ...this.state.project, [name]: value }

      this.setState({ project })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.createProject()
  }

  updateProjectTasks = tasks => {
    this.setState({ ...this.state.project, tasks })
  }

  createProject = () => {
    const project = this.state.project

    Api.postData(`project`, { project })
      .then(res => {
        this.props.history.push(`/project/${res.id}`)
      })
      .catch(err => {
        this.setState({ msg: Api.handleHttpError(err) })
      })
  }

  render() {
    const { msg } = this.state

    if (msg.length) {
      return (
        <div className="ProjectForm">
          <Error message={msg} />
        </div>
      )
    }

    return (
      <div className="ProjectForm">
        <form onSubmit={this.handleSubmit} method="POST">
          <div className="form-group">
            <label for="exampleInputEmail1">Project title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter title"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Description</label>
            <textarea
              className="form-control"
              name="description"
              onChange={this.handleInputChange}
              rows="3"
            />
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Tasks</label>
            <TaskSuggestion updateParentState={this.updateProjectTasks} />
          </div>

          <button type="submit" className="btn btn-primary float-right">
            Create
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(ProjectForm)
