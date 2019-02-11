import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import CardDeck from 'components/Deck'

class TaskProjectsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      projects: []
    }
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = () => {
    this.setState({ isLoading: true })
    Api.fetchData(`task/${this.props.taskId}/projects`)
      .then(projects => {
        this.setState({ isLoading: false, projects })
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  render() {
    const { isLoading, msg, projects } = this.state

    if (isLoading) {
      return (
        <div className="TaskProjectsContainer">
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="TaskProjectsContainer">
          <Error message={msg} />
        </div>
      )
    } else {
      return (
        <div className="TaskProjectsContainer">
          <CardDeck deckType={'project'} itemList={projects} itemsPerRow={3} />
        </div>
      )
    }
  }
}

export default TaskProjectsContainer
