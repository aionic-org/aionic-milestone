import React, { Component } from 'react'

import Tabs from 'components/UI/Tabs'

import ProjectCommentsContainer from 'components/Project/Comments/container'

class SitesProjectTabsContent extends Component {
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
    const { project } = this.props

    let content = null

    switch (tab) {
      case 'Comments':
        content = <ProjectCommentsContainer projectId={project.id} />
      default:
        break
    }
    return (
      <div className="SitesProjectTabsContent">
        <div className="row">
          <div className="col-12 col-md-10">
            <Tabs handleClick={this.handleClick} tabs={['Comments']} />
            <div className="SitesProjectTabContent mt-3">{content}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SitesProjectTabsContent
