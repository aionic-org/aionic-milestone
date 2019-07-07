import React, { Component } from 'react'

import { Api } from 'services/api'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import SitesBoards from '.'

class SitesBoardsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: null,
      boards: {
        all: [],
        filtered: []
      },
      filters: {
        params: {},
        text: ''
      }
    }
  }

  componentDidMount = () => {
    this.fetchBoards({})
  }

  fetchBoards = _params => {
    const params = _params || this.state.filters.params

    Api.fetchData('boards', params)
      .then(boards => {
        const newState = {
          isLoading: false,
          filters: { ...this.state.filters, params },
          boards: { all: boards, filtered: [] }
        }

        this.setState(newState, () => {
          this.filterBoardsByText(this.state.filters.text)
        })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  filterBoardsByParams = params => {
    const newParams = {
      ...this.state.filters.params,
      ...(!Object.keys(params).length ? {} : params)
    }

    this.fetchBoards(newParams)
  }

  filterBoardsByText = text => {
    const filters = { ...this.state.filters, text }

    const boardsFiltered = text.length
      ? this.state.boards.all.filter(boards =>
          boards.title.toLowerCase().includes(text.toLowerCase())
        )
      : this.state.boards.all

    this.setState({ filters, boards: { ...this.state.boards, filtered: boardsFiltered } })
  }

  resetFilters = () => {
    this.setState({ filters: { params: {}, text: '' } }, () => this.fetchBoards)
  }

  render = () => {
    const { isLoading, msg, boards, filters } = this.state

    if (isLoading) {
      return <Spinner />
    } else if (msg) {
      return <Error message={msg} />
    } else {
      return (
        <div className="SitesBoardsContainer">
          <SitesBoards
            boards={boards}
            filters={filters}
            filterBoardsByParams={this.filterBoardsByParams}
            filterBoardsByText={this.filterBoardsByText}
            resetFilters={this.resetFilters}
          />
        </div>
      )
    }
  }
}

export default SitesBoardsContainer
