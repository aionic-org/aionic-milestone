import React from 'react'

import Fetcher from 'components/Utility/Fetcher'

import Board from '.'

const BoardContainer = props => (
  <Fetcher url="task-status">
    {status => {
      const { userList, showDetails } = props

      return (
        <div className="BoardContainer">
          <Board userList={userList} showDetails={showDetails} statusList={status} />
        </div>
      )
    }}
  </Fetcher>
)

export default BoardContainer
