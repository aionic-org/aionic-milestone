import React from 'react'

import './Widget.css'

import { Helper } from 'services/helper'

const Widget = props => (
  <div className="Widget shadow">
    <div className={`card ${props.showMargin ? 'mt-3' : ''}`}>
      <div className="card-header font-weight-bold">
        {props.title}
        {props.icon.length ? <i className={`float-right mt-1 ${props.icon}`} /> : null}
      </div>

      {props.wrapBody ? <div className="card-body">{props.children}</div> : props.children}

      {props.showLastUpdate ? (
        <div className="card-footer">
          <small className="text-muted">Last update: {Helper.getCurrentTime()}</small>
        </div>
      ) : null}
    </div>
  </div>
)

Widget.defaultProps = {
  title: '',
  icon: '',
  wrapBody: true,
  showMargin: false,
  showLastUpdate: true
}

export default Widget
