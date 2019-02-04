import React from 'react'

import InputMarkdown from 'components/UI/Input/Markdown'

const TaskDescription = props => (
  <div className="TaskDescription">
    <p className="text-muted font-italic mt-4">Description</p>
    <InputMarkdown
      content={props.task.description}
      name={'description'}
      onBlurCb={props.handleInputChange}
      rows={10}
    />
  </div>
)

export default TaskDescription
