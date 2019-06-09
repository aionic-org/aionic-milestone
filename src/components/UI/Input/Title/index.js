import React from 'react'

import './Title.css'

const InputTitle = props => (
  <div className="InputTitle">
    <div
      className="color"
      style={{
        background: 'blue'
      }}
    />
    <input
      type="text"
      name="title"
      className="h3 mb-0"
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
