import React, { Component } from 'react'

import Icon from 'components/UI/Icon'

import Deck from 'components/Deck'

import TaskFilterStatus from 'components/Task/Filter/Status/'

class BoardTask extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taskListFiltered: [],
      isFiltered: false
    }
  }

  filterTasks = statusId => {
    if (statusId !== null) {
      const taskListFiltered = this.props.taskList.filter(res => {
        return res.status && res.status.id === statusId
      })
      this.setState({ taskListFiltered, isFiltered: true })
    } else {
      this.setState({ taskListFiltered: [], isFiltered: false })
    }
  }

  render() {
    const { taskListFiltered, isFiltered } = this.state
    const { taskList, title, showStatusFilters, updateParent, itemsPerRow } = this.props

    const itemList = isFiltered ? taskListFiltered : taskList

    return (
      <div className="BoardTask">
        {title}

        {showStatusFilters ? <TaskFilterStatus handleStatusChange={this.filterTasks} /> : null}

        <p className={`text-muted font-weight-bold ${showStatusFilters ? 'mt-4' : ''} `}>
          Number of tasks: {itemList.length}
          <i
            className="fas fa-sync-alt float-right"
            style={{ cursor: 'pointer' }}
            onClick={updateParent}
          />
        </p>

        {itemList.length ? (
          <Deck itemList={itemList} deckType={'task'} itemsPerRow={itemsPerRow} />
        ) : (
          <Icon assignedClasses={['fa-check-circle']} text="Done!" />
        )}
      </div>
    )
  }
}

BoardTask.defaultProps = {
  title: '',
  showStatusFilters: true,
  itemsPerRow: 4,
  updateParent: () => {}
}

export default BoardTask
