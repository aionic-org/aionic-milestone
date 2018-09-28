import React from 'react'

import Image from '../../assets/images/logo.png'

export const UILogo = props => (
  <img
    src={Image}
    alt="Logo"
    style={props.assignedStyle}
    className={'Logo ' + props.assignedClasses.join(' ')}
  />
)

UILogo.defaultProps = {
  assignedStyle: {},
  assignedClasses: []
}
