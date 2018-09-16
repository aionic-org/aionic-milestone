import React from 'react'

export const TaskDescription = props => (
  <div className="TaskDescription">
    <p className="text-muted font-italic mt-5">Description</p>
    <div className="form-group">
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">
        {props.task.description}
      </textarea>
    </div>
  </div>
)
