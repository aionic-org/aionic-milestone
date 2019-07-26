import React, { Component } from 'react';

import Deck from 'components/Deck';

import TaskDashboardFilters from './Filters';

class TaskDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			taskListFiltered: [],
			isFiltered: false,
			showTextFilter: false,
			statusFilter: null,
			textFilter: null
		};
	}

	toggleTextFilter = (e) => {
		e.preventDefault();
		this.setState(
			(prevState) => ({
				showTextFilter: !prevState.showTextFilter,
				textFilter: null
			}),
			() => {
				this.filterTasks();
			}
		);
	};

	filterTasks = () => {
		if (this.state.statusFilter !== null || this.state.textFilter !== null) {
			const taskListFiltered = this.props.taskList.filter((task) => {
				const condStatus =
					this.state.statusFilter !== null
						? task.status && task.status.id === this.state.statusFilter
						: true;
				const condText =
					this.state.textFilter !== null
						? task.title.toLowerCase().includes(this.state.textFilter.toLowerCase())
						: true;

				return condStatus && condText;
			});

			this.setState({ taskListFiltered, isFiltered: true });
		} else {
			this.setState({ taskListFiltered: [], isFiltered: false });
		}
	};

	filterByStatus = (statusId) => {
		this.setState({ statusFilter: statusId }, this.filterTasks);
	};

	filterByText = (e) => {
		const textSearch = e.target.value;
		this.setState({ textFilter: textSearch.length ? textSearch : null }, this.filterTasks);
	};

	render() {
		const { taskListFiltered, isFiltered, showTextFilter } = this.state;
		const { taskList, showStatusFilters, itemsPerRow } = this.props;

		const itemList = isFiltered ? taskListFiltered : taskList;

		return (
			<div className="TaskDashboard">
				{showStatusFilters ? (
					<TaskDashboardFilters handleStatusChange={this.filterByStatus} />
				) : null}

				<button type="button" className="btn btn-link float-right" onClick={this.toggleTextFilter}>
					Toggle filters
				</button>

				{showTextFilter ? (
					<div className="form-group">
						<input
							type="text"
							className="form-control form-control-sm"
							placeholder="Filter tasks..."
							onChange={this.filterByText}
						/>
					</div>
				) : null}
				<Deck
					itemList={itemList}
					deckType="Task"
					itemsPerRow={itemsPerRow}
					showItemsNumber={true}
				/>
			</div>
		);
	}
}

TaskDashboard.defaultProps = {
	showStatusFilters: true,
	itemsPerRow: 3,
	updateParent: () => {}
};

export default TaskDashboard;
