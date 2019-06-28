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
      projects: [],
      allProjects: [],
      projectsFiltered: [],
      searchParams: {},
      textFilter: ''
    }
  }

  componentDidMount = () => {
    this.fetchProjects(null, true)
  }

  fetchProjects = (params, initial) => {
    Api.fetchData('projects', params)
      .then(projects => {
        let newState = { isLoading: false, projects }

        if (initial) {
          newState = { ...newState, allProjects: projects }
        }

        this.setState(newState, () => {
          if (this.state.textFilter.length) {
            this.filterByText(this.state.textFilter)
          }
        })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  updateSearchParams = params => {
    this.setState({ searchParams: { ...this.state.searchParams, ...params } }, () => {
      this.fetchProjects(this.state.searchParams)
    })
  }

  filterByText = textFilter => {
    this.setState({ textFilter })

    const projectsFiltered = this.state.projects.filter(project =>
      project.title.toLowerCase().includes(textFilter.toLowerCase())
    )

    this.setState({ projectsFiltered })
  }

  render() {
    const { isLoading, msg, projects, allProjects, projectsFiltered, textFilter } = this.state

    if (isLoading) {
      return <Spinner />
    } else if (msg) {
      return <Error message={msg} />
    } else {
      return (
        <div className="SitesProjectsContainer">
          <SitesProjects
            projects={textFilter.length ? projectsFiltered : projects}
            allProjects={allProjects}
            updateSearchParams={this.updateSearchParams}
            filterByText={this.filterByText}
          />
        </div>
      )
    }
  }
}

export default SitesProjectsContainer
