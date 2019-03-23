import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import TaskDetails from '.'

class TaskDetailsGitContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: null,
      lists: {
        orgList: [],
        repoList: []
      }
    }
  }

  componentDidMount = () => {
    Api.fetchData('git/organization')
      .then(orgList => {
        const organization = this.props.task.organization

        if (organization && organization.id) {
          Api.fetchData(`git/${organization.id}/repository`)
            .then(repoList => {
              this.setState({
                isLoading: false,
                lists: {
                  orgList,
                  repoList
                }
              })
            })
            .catch(err => {
              this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
            })
        } else {
          this.setState({
            isLoading: false,
            lists: {
              orgList
            }
          })
        }
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  handleOrgChange = e => {
    const orgId = e.target.value

    if (orgId) {
      Api.fetchData(`git/${orgId}/repository`)
        .then(repoList => {
          this.setState({
            isLoading: false,
            lists: {
              ...this.state.lists,
              repoList
            }
          })
          this.props.updateTask({
            ...this.props.task,
            organization: orgId,
            repository: null
          })
        })
        .catch(err => {
          this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
        })
    } else {
      this.setState({
        lists: {
          ...this.state.lists,
          repoList: []
        }
      })

      this.props.updateTask({ ...this.props.task, organization: null, repository: null })
    }
  }

  render() {
    const { isLoading, msg, lists } = this.state

    if (isLoading) {
      return <Spinner />
    } else if (msg) {
      return <Error message={msg} />
    } else {
      return (
        <div className="TaskDetailsGitContainer">
          <TaskDetails handleOrgChange={this.handleOrgChange} lists={lists} {...this.props} />
        </div>
      )
    }
  }
}

export default TaskDetailsGitContainer
