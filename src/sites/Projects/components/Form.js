import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Helper from 'services/helper';
import Api from 'services/api';
import Session from 'services/session';

import Error from 'components/UI/Error';

import TaskSuggestion from 'components/Task/Suggestion';

class ProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: '',
      project: {
        author: Session.getUser()
      }
    };
  }

  handleInputChange = (e) => {
    Helper.updateObjectPropByEvent(this.state.project, e, (project) => {
      this.setState({ project });
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.createProject();
  };

  updateProjectTasks = (tasks) => {
    this.setState((prevState) => {
      return { project: { ...prevState.project, tasks } };
    });
  };

  createProject = () => {
    const { project } = this.state;

    Api.postData(`projects`, { project })
      .then((res) => {
        this.props.history.push(`/project/${res.id}`);
      })
      .catch((err) => {
        this.setState({ msg: Api.handleHttpError(err) });
      });
  };

  render() {
    const { msg } = this.state;

    if (msg.length) {
      return (
        <div className="ProjectForm">
          <Error message={msg} />
        </div>
      );
    }

    return (
      <div className="ProjectForm">
        <form onSubmit={this.handleSubmit} method="POST">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter title"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              onChange={this.handleInputChange}
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Tasks</label>
            <TaskSuggestion updateParent={this.updateProjectTasks} />
          </div>

          <button type="submit" className="btn btn-primary float-right">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
