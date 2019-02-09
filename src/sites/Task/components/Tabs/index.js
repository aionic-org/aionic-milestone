import React, { Component } from 'react'

import { Api } from 'services/api'

import Error from 'components/UI/Error/'
import Spinner from 'components/UI/Spinner/'

import TaskComments from 'components/Task/Comments'
import TaskCommentsForm from 'components/Task/Comments/Form'

import SitesTaskTabNav from './Navigation'

class SitesTaskTabs extends Component {
  constructor(props) {
    super(props)

    this.state = { isLoading: false, msg: '', tab: '', data: [] }
  }

  handleClick = tab => {
    if (tab) {
      this.setState({ tab: tab }, () => {
        this.fetchData(tab)
      })
    } else {
      this.setState({ tab: null, msg: '' })
    }
  }

  fetchData = tab => {
    const _tab = tab || this.state.tab

    this.setState({
      isLoading: true
    })

    Api.fetchData(`task/${this.props.task.id}/${_tab.toLowerCase()}`)
      .then(data => {
        this.setState({ isLoading: false, msg: '', data })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  render() {
    const { isLoading, msg, tab, data } = this.state
    let content = null

    if (isLoading) {
      content = <Spinner />
    } else if (msg) {
      content = <Error message={msg} />
    } else {
      switch (tab) {
        case 'Comments':
          content = (
            <div>
              <TaskComments commentList={data} taskId={this.props.task.id} />
              <TaskCommentsForm
                updateParentState={this.fetchData}
                task={this.props.task}
                assignedClasses={['mt-4']}
              />
            </div>
          )
          break

        default:
          break
      }
    }

    return (
      <div className="SitesTaskTabs">
        <div className="row">
          <div className="col-12 col-md-10">
            <SitesTaskTabNav handleClick={this.handleClick} />
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default SitesTaskTabs
