import React from 'react'

import './Icon.css'

const Icon = props => {
  const text = props.text.length ? <p className="text-center mt-2">{props.text}</p> : null

  return (
    <div className="Icon">
      <i className={`d-block text-center fas ${props.assignedClasses.join(' ')}`} />
      {text}
    </div>
  )
}

Icon.defaultProps = {
  assignedClasses: [],
  text: ''
}

export default Icon
