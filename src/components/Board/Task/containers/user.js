import React from 'react'

import BoardTasks from '../'
import Fetcher from 'components/Utility/Fetcher'

const BoardTaskContainerUser = props => (
  <Fetcher url={`user/${props.user.id}/tasks`}>
    {(tasks, fetchData) => {
      return (
        <div className="BoardTaskContainerUser">
          <BoardTasks taskList={tasks} updateParent={fetchData} />
        </div>
      )
    }}
  </Fetcher>
)

export default BoardTaskContainerUser
