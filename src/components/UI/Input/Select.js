import React from 'react'

const InputSelect = props => (
  <select
    name={props.name}
    className={`InputSelect form-control ${props.classes.join(' ')}`}
    defaultValue={props.defaultValue}
    onChange={props.onChange}
    disabled={props.disabled}
  >
    {props.showDefault ? <option value="">-</option> : null}
    {props.optionList.map(option => (
      <option value={option.value} key={option.value}>
        {option.title}
      </option>
    ))}
  </select>
)

InputSelect.defaultProps = {
  classes: [],
  showDefault: true,
  disabled: false
}

export default InputSelect
