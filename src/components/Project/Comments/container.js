import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import ProjectCommentsFormContainer from './Form/container'
import Comments from '../../Comments'

class ProjectCommentsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      comments: []
    }
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = () => {
    this.setState({ isLoading: true })
    Api.fetchData(`project/${this.props.projectId}/comment`)
      .then(comments => {
        this.setState({ isLoading: false, comments })
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  render() {
    const { isLoading, msg, comments } = this.state
    const { projectId, showForm } = this.props

    if (isLoading) {
      return <Spinner />
    } else if (msg.length) {
      return <Error message={msg} />
    } else {
      const form = showForm ? (
        <div className="mt-4">
          <ProjectCommentsFormContainer projectId={projectId} updateParentState={this.fetchData} />
        </div>
      ) : null

      return (
        <div className="ProjectCommentsContainer">
          <Comments type="Project" typeId={projectId} commentList={comments} />
          {form}
        </div>
      )
    }
  }
}

ProjectCommentsContainer.defaultProps = {
  showForm: true
}

export default ProjectCommentsContainer
