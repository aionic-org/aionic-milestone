import React from 'react'

import InputSelect from 'components/UI/Input/Select'

const TaskLabelList = props => {
  // https://flatuicolors.com/palette/us
  const labels = [
    { id: '#0984e3', optionTitle: 'Blue' },
    { id: '#636e72', optionTitle: 'Grey' },
    { id: '#00b894', optionTitle: 'Mint' },
    { id: '#e17055', optionTitle: 'Orange' },
    { id: '#6c5ce7', optionTitle: 'Purple' },
    { id: '#d63031', optionTitle: 'Red' },
    { id: '#fdcb6e', optionTitle: 'Yellow' }
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
