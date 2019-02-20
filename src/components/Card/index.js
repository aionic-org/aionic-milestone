import React from 'react'

const Card = props => (
  <div className={`card shadow ${props.doMargin ? 'mt-3' : ''}`}>
    <div className="card-header font-weight-bold" style={{ color: '#6c5ce7' }}>
      {props.title}
      {props.icon.length ? (
        <i className={`float-right mt-1 ${props.icon}`} style={{ color: '#858796' }} />
      ) : null}
    </div>
    {props.wrapBody ? <div className="card-body">{props.children}</div> : props.children}
  </div>
)

Card.defaultProps = {
  title: '',
  icon: '',
  doMargin: false,
  wrapBody: true
}

export default Card
