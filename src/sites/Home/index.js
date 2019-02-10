import React, { Component } from 'react'

import './Home.css'

import Content from 'components/UI/Content'

import BoardTaskUser from 'components/Board/Task/containers/user'

class SitesHome extends Component {
  render() {
    return (
      <div className="SitesHome">
        <Content>
          <BoardTaskUser />
        </Content>
      </div>
    )
  }
}

export default SitesHome
