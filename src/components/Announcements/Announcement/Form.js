import React, { Component } from 'react'

import { Api } from 'services/api'
import { Session } from 'services/session'

import Spinner from 'components/UI/Spinner'

class AnnouncementForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      announcement: { author: Session.getUser(), description: '' },
      isLoading: false,
      msg: '',
      status: ''
    }
  }

  handleInputChange = e => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (this.state.announcement[name] !== value) {
      const announcement = { ...this.state.announcement, [name]: value }

      this.setState({
        announcement,
        msg: '',
        status: ''
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.announcement.description.length) {
      this.setState({
        isLoading: true
      })

      Api.postData('announcements', { announcement: this.state.announcement })
        .then(res => {
          this.setState({ isLoading: false, status: '' })
          this.props.updateParent(res)
        })
        .catch(err => {
          this.setState({
            isLoading: false,
            status: 'is-invalid',
            msg: Api.handleHttpError(err)
          })
        })
    }
  }

  render() {
    const { isLoading, msg, status } = this.state
    return (
      <div className="AnnouncementForm">
        <form onSubmit={this.handleSubmit}>
          <label for="exampleInputEmail1">Make new announcement</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input
                  type="checkbox"
                  className="mr-1"
                  name="important"
                  onChange={this.handleInputChange}
                />
                Important
              </div>
            </div>
            <input
              type="text"
              name="description"
              className={`form-control ${status}`}
              onChange={this.handleInputChange}
              placeholder="Enter announcement"
              autoComplete="off"
            />
            <div className="input-group-append">
              <button className="btn btn-primary">
                {isLoading ? <Spinner onBtn={true} /> : 'Submit'}
              </button>
            </div>
            <div className="invalid-feedback">{msg}</div>
          </div>
        </form>
      </div>
    )
  }
}

AnnouncementForm.defaultProps = {
  updateParent: () => {}
}

export default AnnouncementForm
