import React from 'react'

import './Spinner.css'

const Spinner = props => {
  const { white } = props

  return (
    <div className={`Spinner ${white ? 'white' : ''}`}>
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  )
}

Spinner.defaultProps = {
  white: false
}

export default Spinner
