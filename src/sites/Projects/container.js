import React, { Component } from 'react'

import './Projects.css'

import { Api } from 'services/api'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import SitesProjects from '.'

class SitesProjectsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      projects: []
    }
  }

  componentDidMount = () => {
    // Fetch projects
    Api.fetchData(`project`)
      .then(res => {
        if (res) {
          this.setState({ isLoading: false, projects: res })
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

  render() {
    const { isLoading, msg, projects } = this.state

    if (isLoading) {
      return (
        <div className="SitesProjectsContainer">
          <Spinner wrapContent={true} />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="SitesProjectsContainer">
          <Error message={msg} wrapContent={true} />
        </div>
      )
    } else {
      return (
        <div className="SitesProjectsContainer">
          <SitesProjects projects={projects} />
        </div>
      )
    }
  }
}

export default SitesProjectsContainer
