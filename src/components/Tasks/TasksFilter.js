import React, { Component } from 'react'

import { Api } from '../../services/api'

export class TasksFilter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: [],
      activeStatus: 0
    }
  }

  componentDidMount = () => {
    Api.fetchData('task/status').then(res => {
      const status = res.data.data

      if (status.length) {
        // use first one as default
        this.props.handleStatusChange(status[0].id)

        this.setState({
          status: status,
          activeStatus: status[0].id
        })
      } else {
        this.props.handleStatusChange(0)
      }
    })
  }

  handleClick = statusID => {
    this.setState({ activeStatus: statusID })

    this.props.handleStatusChange(statusID)
  }

  render() {
    return (
      <div className="TasksFilter mt-4">
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
