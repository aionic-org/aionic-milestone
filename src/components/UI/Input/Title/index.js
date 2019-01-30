import React from 'react'

import './Title.css'

const InputTitle = props => (
  <div className="InputTitle">
    <h1 className="h2">
      <input
        type="text"
        name="title"
        className="w-100"
        placeholder={props.placeholder}
        autoComplete="off"
        defaultValue={props.defaultValue}
        onBlur={props.onBlur}
      />
    </h1>
  </div>
)

InputTitle.defaultProps = {
  placeholder: ''
}

export default InputTitle
