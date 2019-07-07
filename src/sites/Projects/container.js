import React, { Component } from 'react'

import { Api } from 'services/api'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import SitesProjects from '.'

class SitesProjectsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: null,
      projects: {
        all: [],
        fetched: [],
        filtered: []
      },
      filters: {
        params: {},
        text: ''
      }
    }
  }

  componentDidMount = () => {
    this.fetchProjects(null, true)
  }

  fetchProjects = (_params, initial) => {
    const params = _params || this.state.filters.params

    Api.fetchData('projects', params)
      .then(projects => {
        let newState = {
          isLoading: false,
          filters: { ...this.state.filters, params },
          projects: { ...this.state.projects, fetched: projects, filtered: [] }
        }

        if (initial) {
          newState = { ...newState, projects: { ...newState.projects, all: projects } }
        }

        this.setState(newState, () => {
          this.filterProjectsByText(this.state.filters.text)
        })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  filterProjectsByParams = params => {
    const newParams = {
      ...this.state.filters.params,
      ...(!Object.keys(params).length ? {} : params)
    }

    this.fetchProjects(newParams)
  }

  filterProjectsByText = text => {
    const filters = { ...this.state.filters, text }

    const projectsFiltered = text.length
      ? this.state.projects.fetched.filter(projects =>
          projects.title.toLowerCase().includes(text.toLowerCase())
        )
      : this.state.projects.fetched

    this.setState({ filters, projects: { ...this.state.projects, filtered: projectsFiltered } })
  }

  resetFilters = () => {
    this.setState({ filters: { params: {}, text: '' } }, () => this.fetchBoards)
  }

  render() {
    const { isLoading, msg, projects, filters } = this.state

    if (isLoading) {
      return <Spinner />
    } else if (msg) {
      return <Error message={msg} />
    } else {
      return (
        <div className="SitesProjectsContainer">
          <SitesProjects
            projects={projects}
            filters={filters}
            filterProjectsByParams={this.filterProjectsByParams}
            filterProjectsByText={this.filterProjectsByText}
            resetFilters={this.resetFilters}
          />
        </div>
      )
    }
  }
}

export default SitesProjectsContainer
