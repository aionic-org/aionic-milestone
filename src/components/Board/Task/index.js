import React, { Component } from 'react'

import Icon from 'components/UI/Icon'
import Deck from 'components/UI/Deck'

import FilterStatus from 'components/Filter/Status'

class BoardTask extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taskListFiltered: [],
      isFiltered: false
    }
  }

  filterTasks = (statusId, isFiltered) => {
    const tasksFiltered = this.props.taskList.filter(res => {
      return res.status && res.status.id === statusId
    })

    this.setState({ taskListFiltered: tasksFiltered, isFiltered })
  }

  render() {
    const { taskListFiltered, isFiltered } = this.state
    const { taskList, title, showFilters, updateParent } = this.props

    const itemList = isFiltered ? taskListFiltered : taskList

    const content = itemList.length ? (
      showFilters ? (
        <div>
          <p className="text-muted font-weight-bold mt-4">
            Number of tasks: {itemList.length}
            <i
              className="fas fa-sync-alt float-right"
              style={{ cursor: 'pointer' }}
              onClick={updateParent}
            />
          </p>
          <Deck itemList={itemList} deckType={'task'} />
        </div>
      ) : (
        <Deck itemList={itemList} deckType={'task'} />
      )
    ) : (
      <Icon assignedClasses={['fa-check-circle']} text="Done!" />
    )

    return (
      <div className="BoardTask">
        {title}
        {showFilters ? <FilterStatus handleStatusChange={this.filterTasks} /> : null}
        {content}
      </div>
    )
  }
}

BoardTask.defaultProps = {
  title: 'Tasks:',
  showFilters: true,
  updateParent: () => {}
}

export default BoardTask
