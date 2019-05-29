import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { Api } from 'services/api'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'
import Toast from 'components/UI/Toast'

import SitesProject from '.'

class SitesProjectContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: null,
      project: {},
      projectUpdate: {
        success: null,
        msg: null
      }
    }
  }

  componentDidMount = () => {
    const projectId = this.props.match.params.id

    // Fetch projects
    Api.fetchData(`projects/${projectId}`)
      .then(project => {
        if (project) {
          this.setState({ isLoading: false, project })
        } else {
          this.setState({ isLoading: false, msg: 'Resource not found!' })
        }
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  handleInputChange = e => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (this.state.project[name] !== value) {
      const project = { ...this.state.project, [name]: value }

      this.setState({ project }, () => {
        this.updateProject()
      })
    }
  }

  toggleStatus = e => {
    const project = { ...this.state.project, done: !this.state.project.done }

    this.setState({ project }, () => {
      this.updateProject()
    })
  }

  updateProject = _project => {
    const project = _project || this.state.project

    Api.putData(`projects/${project.id}`, { project })
      .then(project => {
        // window.scrollTo({ top: 0, behavior: 'smooth' })
        this.setState({
          project,
          projectUpdate: {
            success: true,
            msg: 'Project successfully updated!'
          }
        })
        setTimeout(() => {
          this.setState({
            projectUpdate: {
              success: null,
              msg: null
            }
          })
        }, 2000)
      })
      .catch(err => {
        this.setState({
          projectUpdate: {
            success: false,
            msg: 'Failed to update project!'
          }
        })
      })
  }

  deleteProject = () => {
    Api.deleteData(`projects/${this.state.project.id}`)
      .then(() => {
        this.props.history.push('/project')
      })
      .catch(err => {
        this.setState({
          projectUpdate: {
            success: false,
            msg: 'Failed to delete project!'
          }
        })
      })
  }

  updateProjectTasks = tasks => {
    this.updateProject({ ...this.state.project, tasks })
  }

  render() {
    const { isLoading, msg, project, projectUpdate } = this.state

    const alert = projectUpdate.msg ? (
      <Toast msg={projectUpdate.msg} success={projectUpdate.success} />
    ) : null

    if (isLoading) {
      return <Spinner />
    } else if (msg) {
      return <Error message={msg} />
    } else {
      return (
        <div className="SitesProjectContainer">
          {alert}
          <SitesProject
            project={project}
            handleInputChange={this.handleInputChange}
            toggleStatus={this.toggleStatus}
            updateProjectTasks={this.updateProjectTasks}
            deleteProject={this.deleteProject}
          />
        </div>
      )
    }
  }
}

export default withRouter(SitesProjectContainer)
