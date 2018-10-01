import React from 'react'

const Alert = props => (
  <div className="Alert">
    <div className={`alert alert-${props.assignedClass}`} role="alert">
      <strong>{props.title}: </strong>
      {props.message}
    </div>
  </div>
)

export default Alert
