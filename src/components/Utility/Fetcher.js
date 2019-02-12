import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

class Fetcher extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: null,
      data: []
    }
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = params => {
    this.setState({ isLoading: true })

    Api.fetchData(this.props.url, params)
      .then(data => {
        this.setState({ isLoading: false, data })
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  render() {
    const { isLoading, msg, data } = this.state
    const { wrapContent } = this.props

    if (isLoading) {
      return <Spinner wrapContent={wrapContent} />
    } else if (msg) {
      return <Error message={msg} wrapContent={wrapContent} />
    }

    return this.props.children(data, this.fetchData)
  }
}

Fetcher.defaultProps = {
  wrapContent: false
}

export default Fetcher
