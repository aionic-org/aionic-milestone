import React, { Component } from 'react'

import Tabs from 'components/UI/Tabs'

import BoardTaskUser from 'components/User/Board/TaskContainer'

class SitesUserTabsContent extends Component {
  constructor(props) {
    super(props)

    this.state = { isLoading: false, msg: '', tab: '' }
  }

  handleClick = tab => {
    if (tab) {
      this.setState({ tab: tab })
    } else {
      this.setState({ tab: null, msg: '' })
    }
  }

  render() {
    const { tab } = this.state
    const { user } = this.props

    let content = null

    switch (tab) {
      case 'Dashboard':
        content = <BoardTaskUser user={user} showTitle={false} />
        break
      default:
        break
    }

    return (
      <div className="SitesUserTabs">
        <div className="row">
          <div className="col-12">
            <Tabs tabs={['Dashboard']} handleClick={this.handleClick} />
            <div className={`SitesUserTabContent ${content ? 'mt-3' : ''}`}>{content}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SitesUserTabsContent
