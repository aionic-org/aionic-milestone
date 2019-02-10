import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import BoardTasks from '../'

class BoardTaskContainerSearch extends Component {
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

    this.setState(
      {
        isLoading: true
      },
      () => {
        Api.fetchData(`/search/task`, params)
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
    )
  }

  render() {
    const { searchParams } = this.props
    const { isLoading, msg, searchResult } = this.state

    if (isLoading) {
      return (
        <div className="BoardTaskContainerSearch">
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="BoardTaskContainerSearch">
          <Error message={msg} />
        </div>
      )
    } else {
      return (
        <div className="BoardTaskContainerSearch">
          <BoardTasks taskList={searchResult} showStatusFilters={false} itemsPerRow={3} />
        </div>
      )
    }
  }
}

export default BoardTaskContainerSearch
