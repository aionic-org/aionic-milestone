import React from 'react'

const TaskDescription = props => (
  <div className="TaskDescription">
    <p className="text-muted font-italic mt-5">Description</p>
    <div className="form-group">
      <textarea
        name="description"
        id="exampleFormControlTextarea1"
        className="form-control"
        rows="10"
        onBlur={props.handleInputChange}
        defaultValue={props.task.description}
      />
    </div>
  </div>
)

export default TaskDescription
