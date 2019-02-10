import React, { Component } from 'react'

import './Suggestion.css'

import { Api } from 'services/api'

class TaskSuggestion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      taskList: [],
      taskListSelected: props.taskListSelected,
      showSuggestion: false,
      msg: ''
    }
  }

  handleInputChange = e => {
    const searchTerm = e.target.value

    if (searchTerm.length) {
      this.setState({
        searchTerm
      })

      Api.fetchData(`/search/task`, { title: searchTerm })
        .then(taskList => {
          this.setState({ taskList, showSuggestion: taskList.length ? true : false })
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      this.setState({ showSuggestion: false })
    }
  }

  handleSelect = e => {
    const target = e.target
    const newTask = this.state.taskList[Number(target.dataset.pos)]

    const taskListSelected = this.state.taskListSelected.slice()
    const taskIdx = taskListSelected.findIndex(task => task.id === newTask.id)

    document.getElementById('suggestionInput').value = ''

    if (taskIdx === -1) {
      taskListSelected.push(newTask)

      this.setState({ taskListSelected, showSuggestion: false }, () => {
        this.props.updateParentState(taskListSelected)
      })
    } else {
      this.setState({ showSuggestion: false })
    }
  }

  handleRemove = e => {
    const target = e.target
    const taskToRemove = this.state.taskListSelected[Number(target.dataset.pos)]

    const taskListSelected = this.state.taskListSelected.slice()
    const taskIdx = taskListSelected.findIndex(task => Number(task.id) === taskToRemove.id)

    if (taskIdx >= 0) {
      taskListSelected.splice(taskIdx, 1)
      this.setState({ taskListSelected }, () => {
        this.props.updateParentState(taskListSelected)
      })
    }
  }

  render() {
    const { taskList, taskListSelected, showSuggestion } = this.state

    const suggestion = showSuggestion ? (
      <div className="suggestionList">
        <ul className="list-group">
          {taskList.map((task, i) => (
            <li
              className="list-group-item list-group-item-action"
              key={task.id}
              data-pos={i}
              onClick={this.handleSelect}
            >
              {task.title}
              <span className="float-right text-muted">
                {task.author.firstname} {task.author.lastname}
              </span>
            </li>
          ))}
        </ul>
      </div>
    ) : null

    const selected = taskListSelected.length ? (
      <div className="selectedList" style={{ opacity: showSuggestion ? 0.3 : 1 }}>
        <ul className="list-group">
          {taskListSelected.map((task, i) => (
            <li
              className="list-group-item list-group-item-action"
              key={task.id}
              data-pos={i}
              onClick={this.handleRemove}
            >
              {task.title}
              <div className="float-right">
                <span className="text-muted">
                  {task.author.firstname} {task.author.lastname}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <span className="text-muted mt-2 d-block text-right">Count: {taskListSelected.length}</span>
      </div>
    ) : null

    return (
      <div className="TaskSuggestion">
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Enter task title"
          autoComplete="off"
          onChange={this.handleInputChange}
          onKeyDown={e => {
            if (e.keyCode === 27) this.setState({ showSuggestion: false })
          }}
          id="suggestionInput"
        />
        {suggestion}
        {selected}
      </div>
    )
  }
}

TaskSuggestion.defaultProps = {
  taskListSelected: [],
  updateParentState: () => {}
}

export default TaskSuggestion
