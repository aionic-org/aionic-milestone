import React from 'react'

import Image from '../../assets/images/logo.png'

export const Logo = props => (
  <img
    src={Image}
    alt="Logo"
    style={props.assignedStyle}
    className={'Logo ' + props.assignedClasses.join(' ')}
  />
)

Logo.defaultProps = {
  assignedStyle: {},
  assignedClasses: []
}
