import React from 'react'

export const TaskStatusList = props => (
  <div className="TaskStatusList">
    <select
      name="status"
      className="form-control"
      defaultValue={props.selectedStatus.id}
      onChange={props.onChange}
    >
      {props.statusList.map(status => (
        <option value={status.id} key={status.id} name="status">
          {status.title}
        </option>
      ))}
    </select>
  </div>
)

TaskStatusList.defaultProps = {
  statusList: []
}
