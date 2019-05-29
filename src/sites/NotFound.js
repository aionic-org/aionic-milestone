import React from 'react'
import { Link } from 'react-router-dom'

import Content from 'components/UI/Content'

const NotFound = props => {
  return (
    <div className="NotFound">
      <Content>
        <h3 className="text-center mt-5 font-weight-bold">Page not found</h3>
        <p className="text-center text-muted mt-3 mb-0">You've strayed from the right path.</p>
        <Link to="/" className="d-block text-center">
          <i className="fas fa-caret-left" /> Back to Dashboard
        </Link>
      </Content>
    </div>
  )
}

export default NotFound
