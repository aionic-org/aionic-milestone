import React from 'react'

const TaskTagForm = props => {
  const { tagList, updateTagList, toggleForm } = props

  const addTag = e => {
    e.preventDefault()

    const value = document.querySelector('.tag-value').value.toLowerCase()
    if (value.length && !tagList.includes(value)) {
      const tagListCopy = tagList.slice()
      tagListCopy.push(value)

      const newTagList = tagListCopy

      updateTagList(newTagList, true)
    } else {
      toggleForm()
    }
  }

  return (
    <div className="TaskTagForm">
      <form onSubmit={addTag}>
        <input
          className="form-control form-control-sm tag-value"
          type="text"
          placeholder="Enter tag..."
          autoFocus
          onBlur={addTag}
          style={{ height: '22px' }}
        />
      </form>
    </div>
  )
}

export default TaskTagForm
