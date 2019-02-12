import React from 'react'

import { Session } from 'services/session'

import Title from 'components/UI/Title'

import BoardTasks from '../'
import Fetcher from 'components/Utility/Fetcher'

const BoardTaskContainerUser = props => (
  <Fetcher url={`user/${props.user.id}/tasks/`}>
    {(tasks, fetchData) => {
      const { user, showTitle } = props

      const title = showTitle ? (
        <Title title={`${user.firstname}'s Board`} showDivider={false} />
      ) : null

      return (
        <div className="BoardTaskContainerUser">
          <BoardTasks taskList={tasks} title={title} updateParent={fetchData} />
        </div>
      )
    }}
  </Fetcher>
)

BoardTaskContainerUser.defaultProps = {
  user: Session.getUser(),
  showTitle: true
}

export default BoardTaskContainerUser
