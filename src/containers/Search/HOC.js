import React from 'react'

const ContainersSearchHOC = props => {
  return (
    <div className="ContainersSearch">
      <div className="content container-fluid">{props.children}</div>
    </div>
  )
}

export default ContainersSearchHOC
