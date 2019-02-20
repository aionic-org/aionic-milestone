import React from 'react'

import { Helper } from 'services/helper'

const Card = props => (
  <div className={`card shadow ${props.showMargin ? 'mt-3' : ''}`}>
    <div className="card-header font-weight-bold" style={{ color: '#6c5ce7' }}>
      {props.title}
      {props.icon.length ? (
        <i className={`float-right mt-1 ${props.icon}`} style={{ color: '#858796' }} />
      ) : null}
    </div>

    {props.wrapBody ? <div className="card-body">{props.children}</div> : props.children}

    {props.showLastUpdate ? (
      <div class="card-footer">
        <small class="text-muted">Last Update: {Helper.getCurrentTime()}</small>
      </div>
    ) : null}
  </div>
)

Card.defaultProps = {
  title: '',
  icon: '',
  wrapBody: true,
  showMargin: false,
  showLastUpdate: true
}

export default Card
