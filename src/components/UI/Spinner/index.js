import React from 'react'

import './Spinner.css'

import Content from '../Content'

const Spinner = props => {
  const { wrapContent, small, white } = props

  const content = (
    <div className={`Spinner ${small ? 'small' : ''} ${white ? 'white' : ''}`}>
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  )

  if (wrapContent) {
    return <Content>{content}</Content>
  } else {
    return content
  }
}

Spinner.defaultProps = {
  wrapContent: false,
  small: false,
  white: false
}

export default Spinner
