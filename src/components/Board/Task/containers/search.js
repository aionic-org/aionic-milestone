import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'
import Title from 'components/UI/Title'

import BoardTasks from '../'

class BoardTaskContainersSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      msg: '',
      searchResult: []
    }
  }

  componentDidMount = () => {
    if (this.props.searchParams.searchTerm.length) {
      this.doSearch()
    }
  }

  componentDidUpdate = prevProps => {
    if (JSON.stringify(this.props.searchParams) !== JSON.stringify(prevProps.searchParams)) {
      this.doSearch()
    }
  }

  doSearch = () => {
    const params = this.props.searchParams

    this.setState({
      isLoading: true
    })

    Api.fetchData(`/search/task`, params)
      .then(res => {
        this.setState({ isLoading: false, searchResult: res })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  render() {
    const { isLoading, msg, searchTerm, searchResult } = this.state

    if (isLoading) {
      return (
        <div className="BoardTaskContainersSearch">
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="BoardTaskContainersSearch">
          <Error message={msg} />
        </div>
      )
    } else {
      const title = (
        <div>
          {searchResult.length} results found: <span className="font-italic">{searchTerm}</span>
        </div>
      )

      return (
        <div className="BoardTaskContainersSearch">
          <BoardTasks
            taskList={searchResult}
            title={<Title title={title} />}
            highlightAssignee={true}
            showFilters={false}
          />
        </div>
      )
    }
  }
}

export default BoardTaskContainersSearch
