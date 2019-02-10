import React, { Component } from 'react'

import './Search.css'

import Content from 'components/UI/Content'

import BoardTaskContainersFilter from 'components/Board/Task/containers/filter'
import BoardTaskContainersSearch from 'components/Board/Task/containers/search'

import Title from 'components/UI/Title'

class SitesSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchParams: {
        searchTerm: this.props.match.params.searchTerm || ''
      }
    }
  }

  handleFilterChange = e => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (this.state.searchParams[name] !== value) {
      const searchParams = { ...this.state.searchParams, [name]: value }

      this.setState({ searchParams })
    }
  }

  resetFilters = e => {
    this.setState({ searchParams: {} })
  }

  render() {
    const { searchParams } = this.state

    return (
      <div className="SitesSearch">
        <Content>
          <Title title={'Search'} />
          <div className="row">
            <div className="col-12 col-md-3">
              <BoardTaskContainersFilter
                searchParams={searchParams}
                handleFilterChange={this.handleFilterChange}
                resetFilters={this.resetFilters}
              />
            </div>
            <div className="col-12 col-md-9 mt-4 mt-md-0">
              <BoardTaskContainersSearch searchParams={searchParams} />
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

export default SitesSearch
