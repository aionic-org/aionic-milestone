import React from 'react'

import { Session } from 'services/session'

import InputSuggestion from 'components/UI/Input/Suggestion'

const TaskSidebar = props => {
  const { userList, task, isNewTask, updateTask } = props

  const userListPrepared = userList.map(user => {
    return {
      id: user.id,
      text: `${user.firstname} ${user.lastname}`
    }
  })

  const updateParent = element => {
    updateTask({ ...task, [element.name]: element.id })
  }

  return (
    <div className="TaskSidebar">
      <div className="form-group">
        <label>Assignee</label>
        <InputSuggestion
          elementList={userListPrepared}
          name="assignee"
          placeholder="Enter username"
          defaultValue={task.assignee ? task.assignee.id : undefined}
          updateParent={updateParent}
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <InputSuggestion
          elementList={userListPrepared}
          name="author"
          placeholder="Enter username"
          defaultValue={task.author ? task.author.id : isNewTask ? Session.getUser().id : ''}
          updateParent={updateParent}
        />
      </div>
    </div>
  )
}

TaskSidebar.defaultProps = {
  isNewTask: false
}

export default TaskSidebar
