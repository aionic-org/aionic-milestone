import React, { Component } from 'react'

import UserList from 'components/User/List'
import TaskStatusList from 'components/Task/StatusList'
import GitOrganizationList from 'components/Git/Organization/List'

class TaskFilter extends Component {
  handleReset = e => {
    document.getElementById('filterForm').reset()
    this.props.resetFilters()
  }

  render() {
    const { searchParams, handleFilterChange, lists } = this.props
    const { userList, statusList, orgList } = lists

    return (
      <div className="TaskFilter">
        <form id="filterForm">
          <div className="form-group">
            <label>Seach term</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter search term"
              name="searchTerm"
              onBlur={handleFilterChange}
              defaultValue={searchParams.term ? searchParams.term : ''}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <TaskStatusList
              statusList={statusList}
              defaultValue={searchParams.status ? searchParams.status.id : undefined}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-group">
            <label>Assignee</label>
            <UserList
              name="assignee"
              userList={userList}
              defaultValue={searchParams.assignee ? searchParams.assignee : undefined}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <UserList
              name="author"
              userList={userList}
              defaultValue={searchParams.author ? searchParams.author : undefined}
              onChange={handleFilterChange}
            />
          </div>

          <div className="form-group">
            <label>Tag</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter tag"
              name="tag"
              onBlur={handleFilterChange}
              defaultValue={searchParams.tag}
            />
          </div>

          <div className="form-group">
            <label>Git Organization</label>
            <GitOrganizationList
              orgList={orgList}
              defaultValue={searchParams.organization ? searchParams.organization : undefined}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-group">
            <label>Git Branch</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Git branch"
              name="branch"
              onBlur={handleFilterChange}
              defaultValue={searchParams.branch}
            />
          </div>
          <button type="button" className="btn btn-primary btn-block" onClick={this.handleReset}>
            Reset
          </button>
        </form>
      </div>
    )
  }
}

export default TaskFilter
