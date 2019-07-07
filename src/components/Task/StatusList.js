import React from 'react'
import InputSelect from 'components/UI/Input/Select'

const TaskStatusList = props => {
  const status = props.statusList.map(status => {
    return { value: status.id, title: status.title }
  })

  return (
    <div className="TaskStatusList">
      <InputSelect
        optionList={status}
        name="status"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  )
}

TaskStatusList.defaultProps = {
  statusList: [],
  defaultValue: ''
}

export default TaskStatusList
