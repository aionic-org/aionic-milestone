import React, { Component } from 'react'

import './Project.css'

import { Api } from 'services/api'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import SitesProject from '.'

class SitesProjectContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      project: {}
    }
  }

  componentDidMount = () => {
    const projectId = this.props.match.params.id

    // Fetch projects
    Api.fetchData(`project/${projectId}`)
      .then(res => {
        if (res) {
          this.setState({ isLoading: false, project: res })
        } else {
          this.setState({ isLoading: false, msg: 'Resource not found!' })
        }
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  render() {
    const { isLoading, msg, project } = this.state

    if (isLoading) {
      return (
        <div className="SitesProjectContainer">
          <Spinner wrapContent={true} />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="SitesProjectContainer">
          <Error message={msg} wrapContent={true} />
        </div>
      )
    } else {
      return <SitesProject project={project} />
    }
  }
}

export default SitesProjectContainer
