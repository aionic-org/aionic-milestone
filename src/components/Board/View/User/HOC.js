import React from 'react'

import { BoardFilterStatus } from '../../Filter/Status'

export const BoardViewUserHOC = props => {
  return (
    <div className="BoardViewUser">
      <h1 className="h2">{`${props.user.firstname}'s`} Board</h1>

      <BoardFilterStatus handleStatusChange={props.handleStatusChange} />
      <hr className="featurette-divider" />

      {props.children}
    </div>
  )
}
