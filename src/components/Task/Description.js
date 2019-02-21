import React from 'react'

import InputMarkdown from 'components/UI/Input/Markdown'

const TaskDescription = props => (
  <div className="TaskDescription">
    <InputMarkdown
      content={props.task.description}
      name={'description'}
      onBlurCb={props.handleInputChange}
      rows={10}
    />
  </div>
)

export default TaskDescription
