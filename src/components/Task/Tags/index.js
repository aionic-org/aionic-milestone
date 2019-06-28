import React, { useState } from 'react'
import TaskTag from './Tag'

import './Tags.css'
import TaskTagForm from './Form'

const TaskTags = props => {
  const { task, updateTask } = props

  const [showForm, setShowForm] = useState(false)
  const [tagList, setTagList] = useState(task.tags ? task.tags.split(',') : [])

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  const updateTagList = (tagList, doToggle) => {
    setTagList(tagList)
    updateTask({ ...task, tags: tagList.join(',') })

    if (doToggle) {
      toggleForm()
    }
  }

  return (
    <div className="TaskTags">
      <ul className="list-inline">
        {tagList.map((tag, i) => (
          <TaskTag key={i} tag={tag} tagList={tagList} updateTagList={updateTagList} />
        ))}
        <li className="list-inline-item add-tag">
          {showForm ? (
            <TaskTagForm tagList={tagList} updateTagList={updateTagList} toggleForm={toggleForm} />
          ) : (
            <i className="fas fa-plus" onClick={toggleForm} />
          )}
        </li>
      </ul>
    </div>
  )
}

TaskTags.defaultProps = {
  tagList: [1, 2, 3, 4]
}

export default TaskTags
