import React, { Component } from 'react'

import { Api } from '../../../services/api'

export default class BoardFilterStatus extends Component {
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

    Api.fetchData('task/status')
      .then(res => {
        if (res.length) {
          this.setState(
            {
              isLoading: false,
              status: res,
              activeStatus: res[0].id
            },
            () => {
              // use first one as default
              this.props.handleStatusChange(res[0].id)
            }
          )
        } else {
          this.setState(
            {
              isLoading: false
            },
            () => {
              this.props.handleStatusChange(0)
            }
          )
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
        this.props.handleStatusChange(statusID)
      })
    }
  }

  render() {
    return (
      <div className="TaskFilterStatus mt-4">
        <nav className="nav nav-pills">
          {this.state.status.map((status, i) => (
            <a
              className={'nav-item nav-link ' + (i === this.state.activeStatus - 1 ? 'active' : '')}
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
      </div>
    )
  }
}
