import React from 'react';

import TaskSelectsPriority from 'components/Task/Selects/Priority';

const KanbanFilters = (props) => {
	const { toggleStretch, taskFilters, setTaskFilters, priorityList } = props;

	const updateTextFilter = (e) => {
		setTaskFilters({ ...taskFilters, textFilter: e.target.value });
	};

	const updatePriorityFilter = (e) => {
		setTaskFilters({ ...taskFilters, priorityFilter: parseInt(e.target.value, 10) });
	};

	const resetFilters = () => {
		document.getElementById('kanban-filters-form').reset();
		setTaskFilters({
			textFilter: '',
			typeFilter: 0,
			priorityFilter: 0
		});
	};

	return (
		<div className="KanbanFilters">
			<form id="kanban-filters-form">
				<div className="row">
					<div className="col-4">
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Filter tasks..."
								onChange={updateTextFilter}
							/>
						</div>
					</div>
					<div className="col-12 col-xl-auto">
						<div className="form-group">
							<TaskSelectsPriority
								priorityList={priorityList}
								defaultValue={0}
								showDefault={false}
								onChange={updatePriorityFilter}
							/>
						</div>
					</div>
					<div className="col-auto">
						<div className="form-group">
							<button type="reset" className="button button-warning" onClick={resetFilters}>
								Reset
							</button>
						</div>
					</div>
					<div className="col-auto d-flex align-items-center">
						<div className="form-group ml-3">
							<input
								type="checkbox"
								className="form-check-input"
								id="exampleCheck1"
								onClick={toggleStretch}
							/>
							<label className="form-check-label">Stretch</label>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default KanbanFilters;
