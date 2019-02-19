import React from 'react'

import './Spinner.css'

import Content from '../Content'

const Spinner = props => {
  const { wrapContent, small } = props

  const content = (
    <div className={`Spinner ${small ? 'small' : ''}`}>
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
  small: false
}

export default Spinner
