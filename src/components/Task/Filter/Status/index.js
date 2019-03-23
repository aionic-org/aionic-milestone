import React from 'react'

import Fetcher from 'components/Utility/Fetcher'

import Tabs from 'components/UI/Tabs'

const TaskFilterStatus = props => (
  <Fetcher url="taskStatus">
    {status => {
      const { handleStatusChange } = props

      const handleClick = title => {
        if (title) {
          const id = status.find(status => status.title === title).id
          handleStatusChange(id)
        } else {
          handleStatusChange(null)
        }
      }

      const tabTitles = status.map(status => {
        return {
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
