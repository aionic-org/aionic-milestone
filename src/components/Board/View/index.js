import React, { useState } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Tabs from 'components/UI/Tabs'

import BoardStatus from './Status'

const Board = props => {
  const { userList, statusList } = props

  const [userTasks, setUserTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [userTasksFiltered, setUserTasksFiltered] = useState([])

  const tabTitles = userList.map(user => {
    var userNameDuplicates = userList.filter(user2 => {
      return user2.id !== user.id && user2.firstname === user.firstname
    })

    return {
      id: user.id,
      name: userNameDuplicates.length
        ? `${user.firstname} ${user.lastname.charAt(0)}.`
        : user.firstname
    }
  })

  const handleClick = (firstname, userId) => {
    if (userId) {
      fetchUserTasks(userId)
    } else {
      setUserTasks([])
    }
  }

  const fetchUserTasks = userId => {
    setIsLoading(true)
    Api.fetchData(`users/${userId}/tasks`)
      .then(taskList => {
        setIsLoading(false)
        setUserTasks(taskList)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const filterTasks = e => {
    const searchTerm = e.target.value

    if (searchTerm.length) {
      const tasks = userTasks.filter(task => {
        return task.title.toLowerCase().includes(e.target.value.toLowerCase()) ? true : false
      })

      setUserTasksFiltered(tasks)
    } else {
      setUserTasksFiltered([])
    }
  }

  const loadingSpinner = isLoading ? (
    <div className="row mt-3">
      <div className="col-12">
        <Spinner />
      </div>
    </div>
  ) : null

  return (
    <div className="Board">
      <div className="row">
        <div className="col-auto">
          <Tabs tabs={tabTitles} handleClick={handleClick} />
        </div>
        <div className="col-12">
          <div className="form-group mt-4 mb-0">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Filter tasks..."
              onChange={filterTasks}
            />
          </div>
        </div>
      </div>
      <div />
      <div className="row mt-2">
        {statusList.map(status => {
          const tasks = (userTasksFiltered.length ? userTasksFiltered : userTasks).filter(
            task => task.status.id === status.id
          )
          return (
            <BoardStatus
              key={status.id}
              status={status}
              tasks={tasks}
              maxWidth={100 / statusList.length}
            />
          )
        })}
      </div>
      {loadingSpinner}
    </div>
  )
}

export default Board
