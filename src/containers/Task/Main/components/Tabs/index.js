import React, { Component } from 'react'
import { Api } from '../../../../../services/api'

import ContainersTaskMainTabsNav from './Nav'
import TaskComments from '../../../../../components/Task/Comments'

export default class ContainersTaskMainTabs extends Component {
  constructor(props) {
    super(props)

    this.state = { tab: '', data: [] }
  }

  handleClick = tab => {
    if (tab) {
      this.setState({ tab: tab }, () => {
        this.fetchData(tab)
      })
    } else {
      this.setState({ tab: null })
    }
  }

  fetchData = tab => {
    Api.fetchData(`task/${this.props.task.id}/${tab.toLowerCase()}`).then(res => {
      this.setState({ data: res })
    })
  }

  rerender = () => {
    this.forceUpdate()
  }

  render() {
    let content = null
    switch (this.state.tab) {
      case 'Comments':
        content = <TaskComments commentList={this.state.data} showForm={true} />
        break

      default:
        break
    }

    return (
      <div className="ContainersTaskMainTabs">
        <ContainersTaskMainTabsNav handleClick={this.handleClick} />
        {content}
      </div>
    )
  }
}
