import React from 'react'

import InputSelect from 'components/UI/Input/Select'

const TaskLabelList = props => {
  // https://flatuicolors.com/palette/us
  const labels = [
    { value: '#0984e3', title: 'Blue' },
    { value: '#636e72', title: 'Grey' },
    { value: '#00b894', title: 'Mint' },
    { value: '#e17055', title: 'Orange' },
    { value: '#6c5ce7', title: 'Purple' },
    { value: '#d63031', title: 'Red' },
    { value: '#fdcb6e', title: 'Yellow' }
  ]

  return (
    <div className="TaskLabelList">
      <InputSelect
        optionList={labels}
        name="label"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  )
}

TaskLabelList.defaultProps = {
  defaultValue: ''
}

export default TaskLabelList
