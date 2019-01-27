import React from 'react'

import './Title.css'

const TaskTitle = props => (
  <div className="TaskTitle">
    <h1 className="h2">
      <input
        type="text"
        name="title"
        className="w-100"
        placeholder="Enter task title"
        autoComplete="off"
        defaultValue={props.defaultValue}
        onBlur={props.onBlur}
      />
    </h1>
  </div>
)

export default TaskTitle
