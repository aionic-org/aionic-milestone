import React from 'react'

import './Error.css'

const Error = props => (
  <div className="Error">
    <i class="fas fa-exclamation-triangle d-block text-center" />
    <p className="text-center text-danger mt-3">{props.message}</p>
  </div>
)

export default Error
