import React from 'react'

import './Spinner.css'

import Content from '../Content'

const Spinner = props => {
  const content = (
    <div className="Spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  )

  if (props.wrapContent) {
    return <Content>{content}</Content>
  } else {
    return content
  }
}

Spinner.defaultProps = {
  wrapContent: false
}

export default Spinner
