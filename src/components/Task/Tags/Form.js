import React from 'react'

const TaskTagForm = props => {
  const { tagList, updateTagList, toggleForm } = props

  const addTag = e => {
    e.preventDefault()

    const value = document.querySelector('.tag-value').value
    if (value.length) {
      const tagListCopy = tagList.slice()
      tagListCopy.push(value.toLowerCase())

      const newTagList = tagListCopy

      updateTagList(newTagList, true)
    }
  }

  return (
    <div className="TaskTagForm">
      <form onSubmit={addTag}>
        <div className="input-group input-group-sm">
          <input
            className="form-control tag-value"
            type="text"
            placeholder="Enter tag..."
            autoFocus
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              <i className="fas fa-sign-in-alt fa-sm" />
            </button>
          </div>
          <button className="btn btn-link btn-sm" onClick={toggleForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskTagForm
