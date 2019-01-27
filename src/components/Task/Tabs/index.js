import React, { Component } from 'react'

import { Api } from '../../../services/api'

import TaskTabsNavigation from './Navigation'
import Error from '../../UI/Error/'
import Spinner from '../../UI/Spinner/'
import TaskComments from '../../Task/Comments'
import TaskCommentsForm from '../../Task/Comments/Form'

class TaskTabs extends Component {
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
    const tmpTab = tab || this.state.tab

    this.setState({
      isLoading: true
    })

    Api.fetchData(`task/${this.props.task.id}/${tmpTab.toLowerCase()}`)
      .then(res => {
        this.setState({ isLoading: false, msg: '', data: res })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  rerender = () => {
    this.forceUpdate()
  }

  render() {
    let content = null

    if (this.state.isLoading) {
      content = <Spinner />
    } else if (this.state.msg) {
      content = <Error message={this.state.msg} />
    } else {
      switch (this.state.tab) {
        case 'Comments':
          content = (
            <div>
              <TaskComments commentList={this.state.data} taskId={this.props.task.id} />
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
      <div className="TaskTabs">
        <TaskTabsNavigation handleClick={this.handleClick} />
        {content}
      </div>
    )
  }
}

export default TaskTabs
