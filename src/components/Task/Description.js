import React from 'react'

import RichEditor from 'components/UI/Input/RichEditor/'

const TaskDescription = props => {
  const updateDescription = description => {
    props.updateTask({ ...props.task, description })
  }

  return (
    <div className="TaskDescription">
      <RichEditor content={props.task.description} updateParent={updateDescription} />
    </div>
  )
}

export default TaskDescription
