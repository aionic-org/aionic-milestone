import React from 'react'

export const TaskStatusList = props => (
  <div className="TaskStatusList">
    <select name="status" className="form-control">
      {props.statusList.map(status => (
        <option
          value={status.id}
          selected={status.id === props.selectedStatus.id ? 'selected' : ''}
        >
          {status.title}
        </option>
      ))}
    </select>
  </div>
)

TaskStatusList.defaultProps = {
  statusList: []
}
