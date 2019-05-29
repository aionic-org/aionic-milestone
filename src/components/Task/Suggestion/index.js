import React from 'react'

import './Suggestion.css'

import { Api } from 'services/api'

import useSuggestion from '../../Utility/Hooks/useSuggestion'

const TaskSuggestion = props => {
  const { taskListSelected, updateParent } = props
  const [
    itemList,
    itemListSelected,
    setItemList,
    showSuggestion,
    setShowSuggestion,
    handleSelect,
    handleRemove
  ] = useSuggestion(taskListSelected, updateParent)

  const handleInputChange = e => {
    const searchTerm = e.target.value

    if (searchTerm.length) {
      Api.fetchData('tasks', { title: searchTerm })
        .then(itemList => {
          setItemList(itemList)
          setShowSuggestion(itemList.length ? true : false)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      setShowSuggestion(false)
    }
  }

  const suggestion = showSuggestion ? (
    <div className="suggestionList">
      <ul className="list-group">
        {itemList.map((task, i) => (
          <li
            className="list-group-item list-group-item-action"
            key={task.id}
            data-pos={i}
            onClick={handleSelect}
          >
            <div className="row" data-pos={i}>
              <div className="col-7">{task.title}</div>
              <div className="col-5">
                <span className="text-muted float-right">
                  {task.author ? `${task.author.firstname} ${task.author.lastname}` : null}
                  <a
                    className="fas fa-external-link-square-alt ml-2 fa-sm"
                    href={`/task/${task.id}`}
                    target="_blank"
                    onClick={e => {
                      e.stopPropagation()
                    }}
                  />
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : null

  const selected = itemListSelected.length ? (
    <div className="selectedList" style={{ opacity: showSuggestion ? 0.3 : 1 }}>
      <ul className="list-group">
        {itemListSelected.map((task, i) => (
          <li className="list-group-item list-group-item-action" key={task.id}>
            <div className="row">
              <div className="col-9">{task.title}</div>
              <div className="col-3">
                <small className="float-right mt-1">
                  <a
                    className="fas fa-external-link-square-alt"
                    href={`/task/${task.id}`}
                    target="_blank"
                    onClick={e => {
                      e.stopPropagation()
                    }}
                  />
                  <i className="fas fa-times ml-2" data-pos={i} onClick={handleRemove} />
                </small>
              </div>
            </div>
            <small className="text-muted">
              {task.author ? `${task.author.firstname} ${task.author.lastname}` : null}
            </small>
          </li>
        ))}
      </ul>
      <span className="text-muted mt-2 d-block text-right">Count: {itemListSelected.length}</span>
    </div>
  ) : null

  return (
    <div className="TaskSuggestion">
      <input
        type="text"
        className="form-control"
        name="title"
        placeholder="Enter task"
        autoComplete="off"
        onChange={handleInputChange}
        onKeyDown={e => {
          if (e.keyCode === 27) setShowSuggestion(false)
        }}
        id="suggestionInput"
      />
      {suggestion}
      {selected}
    </div>
  )
}

TaskSuggestion.defaultProps = {
  taskListSelected: [],
  updateParent: () => {}
}

export default TaskSuggestion
