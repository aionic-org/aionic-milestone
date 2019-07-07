import React from 'react'

import InputSelect from 'components/UI/Input/Select'

const TaskPriorityList = props => {
  const priorities = props.priorityList.map(priority => {
    return { value: priority.value, title: priority.title }
  })

  return (
    <div className="TaskPriorityList">
      <InputSelect
        optionList={priorities}
        name="priority"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  )
}

TaskPriorityList.defaultProps = {
  priorityList: [],
  defaultValue: ''
}

export default TaskPriorityList
