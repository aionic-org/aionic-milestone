import React from 'react'

import TaskDashboard from 'components/Task/Dashboard/'
import Fetcher from 'components/Utility/Fetcher'

const UserTaskDashboardContainer = props => (
  <Fetcher url={`users/${props.user.id}/tasks`}>
    {(tasks, fetchData) => {
      return (
        <div className="UserTaskDashboardContainer">
          <TaskDashboard taskList={tasks} updateParent={fetchData} />
        </div>
      )
    }}
  </Fetcher>
)

export default UserTaskDashboardContainer
