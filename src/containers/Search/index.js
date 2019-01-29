import React, { Component } from 'react'

import './Search.css'

import BoardSearch from 'components/Board/_wrapper/search'

class ContainersSearch extends Component {
  render() {
    return (
      <div className="ContainersSearch">
        <div className="content container-fluid">
          <BoardSearch searchTerm={this.props.match.params.searchTerm || ''} />
        </div>
      </div>
    )
  }
}

export default ContainersSearch
