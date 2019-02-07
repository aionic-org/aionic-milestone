import React, { Component } from 'react'

import './Project.css'

import { Api } from 'services/api'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import SitesProject from '.'

class SitesProjectContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      project: {},
      projectUpdate: {
        status: '',
        msg: ''
      }
    }
  }

  componentDidMount = () => {
    const projectId = this.props.match.params.id

    // Fetch projects
    Api.fetchData(`project/${projectId}`)
      .then(res => {
        if (res) {
          this.setState({ isLoading: false, project: res })
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

  handleBtnClick = e => {
    const project = { ...this.state.project, finished: !this.state.project.finished }

    this.setState({ project }, () => {
      this.updateProject()
    })
  }

  updateProject = () => {
    const project = this.state.project

    Api.postData(`project/${project.id}`, { project })
      .then(res => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        this.setState({
          projectUpdate: {
            status: 'Success',
            msg: 'Project updated'
          }
        })

        setTimeout(() => {
          this.setState({
            projectUpdate: {
              status: '',
              msg: ''
            }
          })
        }, 1500)
      })
      .catch(err => {
        this.setState({
          projectUpdate: {
            status: 'Error',
            msg: 'Failed to update task!'
          }
        })
      })
  }

  render() {
    const { isLoading, msg, project, projectUpdate } = this.state

    if (isLoading) {
      return (
        <div className="SitesProjectContainer">
          <Spinner wrapContent={true} />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="SitesProjectContainer">
          <Error message={msg} wrapContent={true} />
        </div>
      )
    } else {
      return (
        <SitesProject
          project={project}
          handleInputChange={this.handleInputChange}
          handleBtnClick={this.handleBtnClick}
          projectUpdate={projectUpdate}
        />
      )
    }
  }
}

export default SitesProjectContainer
