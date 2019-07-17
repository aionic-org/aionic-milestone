import React from 'react'

import './Title.scss'

const InputTitle = props => (
  <div className="InputTitle mb-4">
    <input
      type="text"
      name="title"
      className="h3 w-100"
      placeholder={props.placeholder}
      autoComplete="off"
      defaultValue={props.defaultValue}
      onBlur={props.onBlur}
    />
  </div>
)

InputTitle.defaultProps = {
  placeholder: ''
}

export default InputTitle
