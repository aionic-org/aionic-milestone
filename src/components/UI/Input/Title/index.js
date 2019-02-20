import React from 'react'

import './Title.css'

const InputTitle = props => (
  <div className="InputTitle mb-4">
    <h1 className="h3">
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
    {props.showDivider ? <hr className="featurette-divider" /> : null}
  </div>
)

InputTitle.defaultProps = {
  placeholder: '',
  showDivider: true
}

export default InputTitle
