import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import BoardTask from '../Task'

export default class BoardSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      msg: '',
      searchTerm: props.searchTerm,
      searchResult: []
    }
  }

  componentDidMount = () => {
    if (this.state.searchTerm.length) {
      this.setState({
        isLoading: true
      })

      Api.fetchData(`/search/task/${this.state.searchTerm}`)
        .then(res => {
          this.setState({ isLoading: false, searchResult: res })
        })
        .catch(err => {
          this.setState({
            isLoading: false,
            msg: Api.handleHttpError(err)
          })
        })
    } else {
      this.setState({
        isLoading: false,
        msg: 'Please enter a search term'
      })
    }
  }

  render() {
    const { isLoading, msg, searchTerm, searchResult } = this.state

    if (isLoading) {
      return (
        <div className="BoardSearch">
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="BoardSearch">
          <Error message={msg} />
        </div>
      )
    } else {
      return (
        <div className="BoardSearch">
          <BoardTask
            taskList={searchResult}
            title={
              <h1 className="h2">
                {searchResult.length} results found:{' '}
                <span className="font-italic">{searchTerm}</span>
              </h1>
            }
          />
        </div>
      )
    }
  }
}
