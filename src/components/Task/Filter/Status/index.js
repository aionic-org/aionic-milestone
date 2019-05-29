import React from 'react'

import Fetcher from 'components/Utility/Fetcher'

import Tabs from 'components/UI/Tabs'

const TaskFilterStatus = props => (
  <Fetcher url="task-status">
    {status => {
      const { handleStatusChange } = props

      const handleClick = (title, id) => {
        if (id) {
          handleStatusChange(id)
        } else {
          handleStatusChange(null)
        }
      }

      const tabTitles = status.map(status => {
        return {
          id: status.id,
          name: status.title
        }
      })

      return (
        <div className="TaskFilterStatus">
          <Tabs tabs={tabTitles} handleClick={handleClick} />
        </div>
      )
    }}
  </Fetcher>
)

export default TaskFilterStatus
