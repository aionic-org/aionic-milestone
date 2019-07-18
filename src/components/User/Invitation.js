import React, { Component } from 'react';

import Api from 'services/api';

class UserInvitation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      msg: '',
      status: ''
    };
  }

  handleInputChange = (e) => {
    const { value } = e.target;

    this.setState({
      email: value,
      msg: '',
      status: ''
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.email.length) {
      Api.postData('auth/invitation', { email: this.state.email })
        .then(() => {
          this.setState({ status: 'is-valid' });
        })
        .catch((err) => {
          this.setState({ status: 'is-invalid', msg: Api.handleHttpError(err) });
        });
    }
  };

  render() {
    return (
      <div className="UserInvitation">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="email"
              name="email"
              className={`form-control ${this.state.status}`}
              onChange={this.handleInputChange}
              placeholder="Enter email"
              autoComplete="off"
            />
            <div className="input-group-append">
              <button type="button" className="btn btn-primary">
                Invite
              </button>
            </div>
            <div className="valid-feedback">User invited!</div>
            <div className="invalid-feedback">{this.state.msg}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default UserInvitation;
