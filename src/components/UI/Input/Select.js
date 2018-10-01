import React from 'react'

const InputSelect = props => (
  <div className="InputSelect">
    <select
      name={props.name}
      className="form-control"
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    >
      <option value="">-</option>
      {props.optionList.map(option => (
        <option value={option.id} key={option.id}>
          {option.optionTitle}
        </option>
      ))}
    </select>
  </div>
)

export default InputSelect
