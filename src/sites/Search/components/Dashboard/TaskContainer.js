import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import TaskDashboard from 'components/Task/Dashboard/'

class SearchDashboardTaskContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      msg: null,
      searchResult: []
    }
  }

  componentDidMount = () => {
    const searchParams = this.props.searchParams
    for (const key in searchParams) {
      if (searchParams.hasOwnProperty(key) && searchParams[key].length) {
        this.doSearch()
        break
      }
    }
  }

  componentDidUpdate = prevProps => {
    if (JSON.stringify(this.props.searchParams) !== JSON.stringify(prevProps.searchParams)) {
      this.doSearch()
    }
  }

  doSearch = () => {
    const searchParams = this.props.searchParams

    this.setState({
      isLoading: true
    })

    Api.fetchData(`tasks`, searchParams)
      .then(searchResult => {
        this.setState({ isLoading: false, searchResult })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  render() {
    const { isLoading, msg, searchResult } = this.state

    if (isLoading) {
      return <Spinner />
    } else if (msg) {
      return <Error message={msg} />
    } else {
      return (
        <div className="SearchDashboardTaskContainer">
          <TaskDashboard taskList={searchResult} showStatusFilters={false} itemsPerRow={3} />
        </div>
      )
    }
  }
}

export default SearchDashboardTaskContainer
