import React, { Component } from 'react'

import './Home.css'

import { Session } from 'services/session'

import Content from 'components/UI/Content'

import BoardUser from 'components/Board/Task/containers/user'

class SitesHome extends Component {
  render() {
    return (
      <div className="SitesHome">
        <Content>
          <BoardUser user={Session.getUser()} />
        </Content>
      </div>
    )
  }
}

export default SitesHome
