import React from 'react'

const ContainersTaskHOC = props => {
  return (
    <div className="ContainersTask">
      <div className="content container-fluid">{props.children}</div>
    </div>
  )
}

export default ContainersTaskHOC
