import React from 'react'

import FilterStatus from '../../Filter/Status'

const BoardUserHOC = props => {
  return (
    <div className="BoardUser">
      <h1 className="h2">{`${props.user.firstname}'s`} Board</h1>

      <FilterStatus handleStatusChange={props.handleStatusChange} />
      <hr className="featurette-divider" />

      {props.children}
    </div>
  )
}

export default BoardUserHOC
