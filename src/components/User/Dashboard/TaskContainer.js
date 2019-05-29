import React from 'react'

import DashboardTasks from 'components/Dashboard/Tasks'
import Fetcher from 'components/Utility/Fetcher'

const UserDashboardTaskContainer = props => (
  <Fetcher url={`users/${props.user.id}/tasks`}>
    {(tasks, fetchData) => {
      return (
        <div className="UserDashboardTaskContainer">
          <DashboardTasks taskList={tasks} updateParent={fetchData} />
        </div>
      )
    }}
  </Fetcher>
)

export default UserDashboardTaskContainer
