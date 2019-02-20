import React from 'react'

import Title from 'components/UI/Title'

import BoardTasks from '../'
import Fetcher from 'components/Utility/Fetcher'

const BoardTaskContainerUser = props => (
  <Fetcher url={`user/${props.user.id}/tasks`}>
    {(tasks, fetchData) => {
      const { user, showTitle } = props

      return (
        <div className="BoardTaskContainerUser">
          <BoardTasks taskList={tasks} title="Your task board" updateParent={fetchData} />
        </div>
      )
    }}
  </Fetcher>
)

BoardTaskContainerUser.defaultProps = {
  showTitle: true
}

export default BoardTaskContainerUser
