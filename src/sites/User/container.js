/* eslint-disable no-undef */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Api from 'services/api';
import Helper from 'services/helper';
import Session from 'services/session';

import Error from 'components/UI/Error';
import Spinner from 'components/UI/Spinner';
import Toast from 'components/UI/Toast';

import SitesUser from '.';

class SitesUserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      msg: '',
      user: {},
      userUpdate: {
        success: null,
        msg: null
      }
    };
  }

  componentDidMount = async () => {
    try {
      const id =
        this.props.match.params.id === 'me' ? Session.getUser().id : this.props.match.params.id;

      const user = await Api.fetchData(`users/${id}`);

      if (user) {
        this.setState({ isLoading: false, user });
      } else {
        this.setState({ isLoading: false, msg: 'Resource not found!' });
      }
    } catch (err) {
      this.setState({
        isLoading: false,
        msg: Api.handleHttpError(err)
      });
    }
  };

  handleInputChange = (e) => {
    Helper.updateObjectPropByEvent(this.state.user, e, (user) => {
      this.setState({ user }, () => {
        this.updateUser();
      });
    });
  };

  updateUser = () => {
    const { user } = this.state;

    if (Session.isAdmin()) {
      Api.putData(`users/${user.id}`, { user })
        .then((updatedUser) => {
          this.setState({
            user: updatedUser,
            userUpdate: {
              success: true,
              msg: 'User successfully updated!'
            }
          });

          setTimeout(() => {
            this.setState({
              userUpdate: {
                success: null,
                msg: null
              }
            });
          }, 2000);
        })
        .catch(() => {
          this.setState({
            userUpdate: {
              success: false,
              msg: 'Failed to update user!'
            }
          });
        });
    }
  };

  deleteUser = () => {
    // eslint-disable-next-line no-alert
    const confirmDelete = window.confirm('Are you sure?');

    if (confirmDelete && Session.isAdmin()) {
      Api.deleteData(`users/${this.state.user.id}`)
        .then(() => {
          this.props.history.push('/administration/user');
        })
        .catch(() => {
          this.setState({
            userUpdate: {
              status: 'Error',
              msg: 'Failed to update user!'
            }
          });
        });
    }
  };

  render() {
    const { isLoading, msg, user, userUpdate } = this.state;

    const alert = userUpdate.msg ? (
      <Toast msg={userUpdate.msg} success={userUpdate.success} />
    ) : null;

    if (isLoading) {
      return <Spinner />;
    }

    if (msg.length) {
      return <Error message={msg} />;
    }

    return (
      <div className="SitesUserContainer">
        {alert}
        <SitesUser
          user={user}
          handleInputChange={this.handleInputChange}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}

export default withRouter(SitesUserContainer);
