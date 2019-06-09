import React from 'react'

import RichEditor from 'components/UI/Input/RichEditor/'

const TaskDescription = props => {
  const { updateTask } = props

  const updateDescription = description => {
    updateTask({ ...props.task, description })
  }

  return (
    <div className="TaskDescription mt-5">
      <p className="text-muted">Description</p>
      <hr className="featurette-divider" />

      <RichEditor content={props.task.description} updateParent={updateDescription} />
    </div>
  )
}

export default TaskDescription
