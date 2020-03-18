import React from 'react';

const KanbanFilters = (props) => {
	const { setTaskFilter, toggleStretch } = props;

	const updateTextFilter = (e) => {
		setTaskFilter(e.target.value);
	};

	return (
		<div className="KanbanFilters">
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="Filter tasks"
					onChange={updateTextFilter}
				/>
				<button type="reset" className="button button-secondary ml-2" onClick={toggleStretch}>
					<i className="fas fa-arrows-alt-h"></i>
				</button>
			</div>
		</div>
	);
};

export default KanbanFilters;
