import React, { Component } from 'react'

import './Search.css'

import { Api } from '../../services/api'

import ContainersSearchHOC from './HOC'
import Spinner from '../../components/UI/Spinner'
import Error from '../../components/UI/Error'

import TaskPreviews from '../../components/Task/Previews/'

export default class ContainersSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      msg: '',
      searchTerm: props.match.params.searchTerm || '',
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
        <ContainersSearchHOC>
          <Spinner />
        </ContainersSearchHOC>
      )
    } else if (msg.length) {
      return (
        <ContainersSearchHOC>
          <Error message={msg} />
        </ContainersSearchHOC>
      )
    } else {
      return (
        <ContainersSearchHOC>
          <h3 className="mb-4">
            {searchResult.length} results found: <span className="font-italic">{searchTerm}</span>
          </h3>
          <TaskPreviews taskList={searchResult} />
        </ContainersSearchHOC>
      )
    }
  }
}
