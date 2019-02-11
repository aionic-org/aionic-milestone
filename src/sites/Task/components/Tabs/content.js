import React, { Component } from 'react'

import Tabs from 'components/UI/Tabs'

import TaskCommentsContainer from 'components/Task/Comments/container'
import TaskProjectsContainer from 'components/Task/Projects/container'

class SitesTaskTabsContent extends Component {
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

  doUpdate = () => {
    this.forceUpdate()
  }

  render() {
    const { tab } = this.state
    const { task } = this.props

    let content = null

    switch (tab) {
      case 'Comments':
        content = <TaskCommentsContainer taskId={task.id} />
        break
      case 'Projects':
        content = <TaskProjectsContainer taskId={task.id} />
        break
    }
    return (
      <div className="SitesTaskTabsContent">
        <div className="row">
          <div className="col-12 col-md-10">
            <Tabs handleClick={this.handleClick} tabs={['Comments', 'Commits', 'Projects']} />
            <div className="SitesTaskTabContent mt-3">{content}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SitesTaskTabsContent
