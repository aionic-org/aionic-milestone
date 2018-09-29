import React from 'react'

export const Alert = props => (
  <div className="Alert">
    <div className={`alert alert-${props.assignedClass}`} role="alert">
      <strong>{props.title}: </strong>
      {props.message}
    </div>
  </div>
)
