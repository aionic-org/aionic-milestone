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
						<div className="form-group mb-0">
							<input
								type="text"
								className="form-control form-control-sm"
								placeholder="Filter tasks..."
								onChange={updateTextFilter}
							/>
						</div>
					</div>
					<div className="col-2">
						<div className="form-group mb-0">
							<TaskSelectsPriority
								priorityList={priorityList}
								classes={['form-control-sm']}
								defaultValue={0}
								showDefault={false}
								onChange={updatePriorityFilter}
							/>
						</div>
					</div>
					<div className="col-2">
						<div className="form-group mb-0">
							<button
								type="reset"
								className="btn btn-sm btn-block btn-warning"
								onClick={resetFilters}
							>
								Reset filters
							</button>
						</div>
					</div>
					<div className="col-auto d-flex align-items-center">
						<div className="form-check">
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
