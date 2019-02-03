import React from 'react'

import './Error.css'

import Content from '../Content'

const Error = props => {
  const icon = props.showIcon ? (
    <i className="fas fa-exclamation-triangle d-block text-center" />
  ) : null

  const content = (
    <div className={`Error ${props.assignedClasses.join(' ')}`}>
      {icon}
      <p className="text-center text-danger mt-2">{props.message}</p>
    </div>
  )

  if (props.wrapContent) {
    return <Content>{content}</Content>
  } else {
    return content
  }
}

Error.defaultProps = {
  assignedClasses: [],
  showIcon: true,
  wrapContent: false
}

export default Error
