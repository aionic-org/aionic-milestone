import React from 'react'

import './Spinner.css'

const Spinner = props => {
  const { onBtn } = props

  return (
    <div className={`Spinner ${onBtn ? 'onBtn' : ''}`}>
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  )
}

Spinner.defaultProps = {
  onBtn: false
}

export default Spinner
