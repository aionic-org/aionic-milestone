import React from 'react'

import BoardTasks from '../../Board/Tasks'
import Fetcher from 'components/Utility/Fetcher'

const UserBoardTaskContainer = props => (
  <Fetcher url={`users/${props.user.id}/tasks`}>
    {(tasks, fetchData) => {
      return (
        <div className="UserBoardTaskContainer">
          <BoardTasks taskList={tasks} updateParent={fetchData} />
        </div>
      )
    }}
  </Fetcher>
)

export default UserBoardTaskContainer
