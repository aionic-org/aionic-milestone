import React, { Component } from 'react'

import './Home.css'

import { Session } from 'services/session'

import BoardUser from 'components/Board/_wrapper/user'

class ContainersHome extends Component {
  render() {
    return (
      <div className="ContainersHome">
        <div className="content container-fluid">
          <BoardUser user={Session.getUser()} />
        </div>
      </div>
    )
  }
}

export default ContainersHome
