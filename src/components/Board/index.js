import React, { useState } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Tabs from 'components/UI/Tabs'

import BoardStatus from './Status'

const Board = props => {
  const { userList, showDetails, statusList } = props

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

  const showModal = () => {
    showDetails(true)
  }

  const content = isLoading ? (
    <div className="col-12 mt-4">
      <Spinner />
    </div>
  ) : (
    statusList.map(status => {
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
    })
  )

  return (
    <div className="Board">
      <div className="row">
        <div className="col-11">
          <Tabs tabs={tabTitles} handleClick={handleClick} />
        </div>
        <div className="col-1">
          <i
            className="float-right mt-2 fas fa-cog"
            onClick={showModal}
            style={{ cursor: 'pointer' }}
          />
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
      <div className="row mt-2">{content}</div>
    </div>
  )
}

export default Board
