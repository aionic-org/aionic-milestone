import React from 'react'

const InputSelect = props => (
  <div className="InputSelect">
    <select
      name={props.name}
      className="form-control"
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    >
      {props.showDefault ? <option value="">-</option> : null}
      {props.optionList.map(option => (
        <option value={option.id} key={option.id}>
          {option.optionTitle}
        </option>
      ))}
    </select>
  </div>
)

InputSelect.defaultProps = {
  showDefault: true
}

export default InputSelect
