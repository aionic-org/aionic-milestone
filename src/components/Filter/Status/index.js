import React, { Component } from 'react'

import { Api } from 'services/api'

class FilterStatus extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      status: [],
      activeStatus: 0
    }
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true
    })

    Api.fetchData('taskStatus/')
      .then(res => {
        if (res.length) {
          this.setState(
            {
              isLoading: false,
              status: res,
              activeStatus: this.props.autoActive ? res[0].id : 0
            },
            () => {
              // Set first element as active
              if (this.props.autoActive) {
                this.props.handleStatusChange(res[0].id)
              }
            }
          )
        } else {
          this.setState({ isLoading: false }, () => {
            this.props.handleStatusChange(0)
          })
        }
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) }, () => {
          this.props.handleStatusChange(0)
        })
      })
  }

  handleClick = statusID => {
    if (statusID !== this.state.activeStatus) {
      this.setState({ activeStatus: statusID }, () => {
        this.props.handleStatusChange(statusID, true)
      })
    } else if (!this.props.autoActive) {
      this.setState({ activeStatus: 0 }, () => {
        this.props.handleStatusChange(0, false)
      })
    }
  }

  render() {
    return (
      <div className="FilterStatus mt-4">
        <nav className="nav nav-pills">
          {this.state.status.map(status => (
            <a
              className={
                'nav-item nav-link ' + (status.id === this.state.activeStatus ? 'active' : '')
              }
              onClick={e => {
                e.preventDefault()
                this.handleClick(status.id)
              }}
              href="#"
              key={status.id}
            >
              {status.title}
            </a>
          ))}
        </nav>
        <hr className="featurette-divider" />
      </div>
    )
  }
}

FilterStatus.defaultProps = {
  autoActive: false
}

export default FilterStatus
