import React, { Component } from 'react'

import Deck from 'components/Deck'

import TaskFilterStatus from 'components/Task/Filter/Status/'

class DashboardTasks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taskListFiltered: [],
      isFiltered: false,
      showTextFilter: false,
      statusFilter: null,
      textFilter: null
    }
  }

  toggleTextFilter = e => {
    e.preventDefault()
    this.setState(
      {
        showTextFilter: !this.state.showTextFilter,
        textFilter: null
      },
      () => {
        this.filterTasks()
      }
    )
  }

  filterTasks = () => {
    if (this.state.statusFilter !== null || this.state.textFilter !== null) {
      const taskListFiltered = this.props.taskList.filter(task => {
        const condStatus =
          this.state.statusFilter !== null
            ? task.status && task.status.id === this.state.statusFilter
            : true
        const condText =
          this.state.textFilter !== null
            ? task.title.toLowerCase().includes(this.state.textFilter.toLowerCase())
            : true

        return condStatus && condText ? true : false
      })

      this.setState({ taskListFiltered, isFiltered: true })
    } else {
      this.setState({ taskListFiltered: [], isFiltered: false })
    }
  }

  filterByStatus = statusId => {
    this.setState({ statusFilter: statusId }, this.filterTasks)
  }

  filterByText = e => {
    const textSearch = e.target.value
    this.setState({ textFilter: textSearch.length ? textSearch : null }, this.filterTasks)
  }

  render() {
    const { taskListFiltered, isFiltered, showTextFilter } = this.state
    const { taskList, showStatusFilters, itemsPerRow } = this.props

    const itemList = isFiltered ? taskListFiltered : taskList

    return (
      <div className="DashboardTasks">
        {showStatusFilters ? <TaskFilterStatus handleStatusChange={this.filterByStatus} /> : null}

        <div className={`${showStatusFilters ? 'mt-4' : ''} `}>
          <p className="d-inline-block text-muted font-weight-bold">
            Number of tasks: {itemList.length}
          </p>
          <a href="#" className="d-inline-block float-right" onClick={this.toggleTextFilter}>
            Toggle filters
          </a>
        </div>

        {showTextFilter ? (
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Filter tasks..."
              onChange={this.filterByText}
              autoFocus={true}
            />
          </div>
        ) : null}
        <Deck itemList={itemList} deckType="Task" itemsPerRow={itemsPerRow} />
      </div>
    )
  }
}

DashboardTasks.defaultProps = {
  showStatusFilters: true,
  itemsPerRow: 3,
  updateParent: () => {}
}

export default DashboardTasks
