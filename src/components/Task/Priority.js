import React from 'react'

export const TaskPriority = props =>
  props.priorityList.map(priority => (
    <div className="form-check form-check-inline" key={priority.id}>
      <input
        type="radio"
        name="priority"
        className="form-check-input"
        value={priority.value}
        onChange={props.handleInputChange}
        defaultChecked={props.selectedPriority.value === priority.value ? 'checked' : ''}
      />
      <label className="form-check-label">{priority.title}</label>
    </div>
  ))
