import React, { Component } from 'react'

import UserList from 'components/User/UserList'
import TaskStatusList from 'components/Task/StatusList'

class BoardTaskFilter extends Component {
  handleReset = e => {
    document.getElementById('filterForm').reset()
    this.props.resetFilters()
  }

  render() {
    const { searchParams, handleFilterChange, userList, statusList } = this.props

    return (
      <div className="BoardTaskFilter">
        <form id="filterForm">
          <div className="form-group">
            <label>Seach term</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter search term"
              name="searchTerm"
              onBlur={handleFilterChange}
              defaultValue={searchParams.searchTerm ? searchParams.searchTerm : ''}
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
            <label>Branch</label>
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

export default BoardTaskFilter
