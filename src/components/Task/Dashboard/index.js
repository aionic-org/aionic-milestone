import React, { Component } from 'react';

import Deck from 'components/Deck';

import TaskDashboardFilters from './Filters';

class TaskDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			taskListFiltered: [],
			isFiltered: false,
			statusFilter: null
		};
	}

	filterTasks = () => {
		if (this.state.statusFilter !== null) {
			const taskListFiltered = this.props.taskList.filter((task) => {
				return this.state.statusFilter !== null
					? task.status && task.status.id === this.state.statusFilter
					: true;
			});

			this.setState({ taskListFiltered, isFiltered: true });
		} else {
			this.setState({ taskListFiltered: [], isFiltered: false });
		}
	};

	filterByStatus = (statusId) => {
		this.setState({ statusFilter: statusId }, this.filterTasks);
	};

	render() {
		const { taskListFiltered, isFiltered } = this.state;
		const { taskList, showStatusFilters, itemsPerRow } = this.props;

		const itemList = isFiltered ? taskListFiltered : taskList;

		return (
			<div className="TaskDashboard">
				{showStatusFilters ? (
					<TaskDashboardFilters handleStatusChange={this.filterByStatus} />
				) : null}

				<Deck
					itemList={itemList}
					deckType="task"
					itemsPerRow={itemsPerRow}
					showItemsNumber={true}
				/>
			</div>
		);
	}
}

TaskDashboard.defaultProps = {
	showStatusFilters: true,
	itemsPerRow: 2,
	updateParent: () => {}
};

export default TaskDashboard;
