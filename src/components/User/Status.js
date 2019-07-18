import React, { Component } from 'react';

import Api from 'services/api';
import Helper from 'services/helper';

import Spinner from 'components/UI/Spinner';

class UserStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      msg: null,
      status: null,
      user: {}
    };
  }

  componentDidMount = () => {
    Api.fetchData(`users/${this.props.user.id}`)
      .then((user) => {
        if (user) {
          this.setState({ isLoading: false, user });
        } else {
          this.setState({ isLoading: false, msg: 'Resource not found!' });
        }
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err),
          status: 'is-invalid'
        });
      });
  };

  handleInputChange = (e) => {
    Helper.updateObjectPropByEvent(this.state.user, e, (user) => {
      this.setState({ user }, () => {
        Api.putData(`users/${user.id}`, { user })
          .then((_user) => {
            this.setState({
              user: _user,
              status: 'is-valid'
            });
            setTimeout(() => {
              this.setState({
                status: null
              });
            }, 2000);
          })
          .catch((err) => {
            this.setState({
              msg: Api.handleHttpError(err),
              status: 'is-invalid'
            });
          });
      });
    });
  };

  render() {
    const { isLoading, msg, user, status } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <div className="UserStatus">
        <div className="form-group mb-0">
          <textarea
            className={`form-control ${status}`}
            name="status"
            rows="2"
            defaultValue={user.status}
            onBlur={this.handleInputChange}
          />
          <div className="valid-feedback">Status updated!</div>
          <div className="invalid-feedback">{msg}</div>
        </div>
      </div>
    );
  }
}

export default UserStatus;
