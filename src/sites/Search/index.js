import React, { Component } from 'react'

import './Search.css'

import Content from 'components/UI/Content'
import BoardSearch from 'components/Board/Task/containers/search'

class SitesSearch extends Component {
  render() {
    return (
      <div className="SitesSearch">
        <Content>
          <BoardSearch searchTerm={this.props.match.params.searchTerm || ''} />
        </Content>
      </div>
    )
  }
}

export default SitesSearch
