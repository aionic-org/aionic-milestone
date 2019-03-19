import React from 'react'

import GitOrganizationList from 'components/Git/Organization/List'
import GitRepositoryList from 'components/Git/Repository/List'

const TaskDetailsGit = props => {
  const { lists, task, handleOrgChange, handleInputChange } = props
  const { orgList, repoList } = lists

  return (
    <div className="TaskDetailsGit">
      <p className="text-muted">Git</p>
      <hr className="featurette-divider" />
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Organization</label>
        <div className="col-sm-4">
          <GitOrganizationList
            orgList={orgList}
            defaultValue={task.organization ? task.organization.id : undefined}
            onChange={handleOrgChange}
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Repository / Branch</label>
        <div className="col-sm-2">
          <GitRepositoryList
            repoList={repoList}
            defaultValue={task.repository ? task.repository.id : undefined}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-sm-2">
          <input
            type="text"
            name="branch"
            className="form-control"
            defaultValue={task.branch ? task.branch : ''}
            onBlur={handleInputChange}
          />
        </div>
      </div>
    </div>
  )
}

TaskDetailsGit.defaultProps = {
  isNewTask: false
}

export default TaskDetailsGit
