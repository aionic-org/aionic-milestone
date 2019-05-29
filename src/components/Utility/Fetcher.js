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
    const { showSpinnerPadding } = this.props
    const { isLoading, msg, data } = this.state

    if (isLoading) {
      return <Spinner showPadding={showSpinnerPadding} />
    } else if (msg) {
      return <Error message={msg} />
    }

    return this.props.children(data, this.fetchData)
  }
}

Fetcher.defaultProps = {
  showSpinnerPadding: false
}

export default Fetcher
