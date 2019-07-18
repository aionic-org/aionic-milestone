import React, { Component } from 'react';

import Api from 'services/api';
import Helper from 'services/helper';

import Spinner from 'components/UI/Spinner';

class TaskScratchpad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      msg: null,
      status: null,
      scratchpad: {
        author: this.props.user,
        task: this.props.task
      }
    };
  }

  componentDidMount = () => {
    Api.fetchData(`tasks/${this.props.task.id}/scratchpads/users/${this.props.user.id}`)
      .then((scratchpad) => {
        if (scratchpad) {
          this.setState({ isLoading: false, scratchpad });
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
    Helper.updateObjectPropByEvent(this.state.scratchpad, e, (scratchpad) => {
      this.setState({ scratchpad }, () => {
        Api.postData(`tasks/${this.props.task.id}/scratchpads/users/${this.props.user.id}`, {
          scratchpad
        })
          .then((_scratchpad) => {
            this.setState({
              scratchpad: _scratchpad,
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
    const { isLoading, msg, scratchpad, status } = this.state;

    if (isLoading) {
      return <Spinner showPadding={true} />;
    }

    return (
      <div className="UserStatus">
        <div className="form-group mb-0">
          <textarea
            className={`form-control ${status}`}
            name="text"
            rows="3"
            defaultValue={scratchpad.text}
            onBlur={this.handleInputChange}
          />
          <small className="form-text text-muted">
            Your personal scratchpad for this task (only visible for you).
          </small>

          <div className="valid-feedback">Scratchpad updated!</div>
          <div className="invalid-feedback">{msg}</div>
        </div>
      </div>
    );
  }
}

export default TaskScratchpad;
