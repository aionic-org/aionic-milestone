import React from 'react'

export const ContainersTaskHOC = props => {
  return (
    <div className="ContainersTask">
      <div className="content container-fluid">{props.children}</div>
    </div>
  )
}
