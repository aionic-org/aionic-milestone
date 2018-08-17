import React from 'react'

import './Logo.css'
import Image from '../../assets/images/Logo.png'

export function Logo(props) {
  return (
    <div className="Logo">
      <img src={Image} alt="Logo" />
    </div>
  )
}
