import React from 'react';

import { InputSelect } from 'aionic-library';

const ProjectsFilters = (props) => {
	const { filterItemsByParams, filterItemsByText, resetFilters } = props;

	const handleParamsChange = (e) => {
		filterItemsByParams({ [e.target.name]: e.target.value });
	};

	const handleFilterChange = (e) => {
		filterItemsByText(e.target.value);
	};

	const completedList = [
		{ value: '', title: 'Completed' },
		{ value: '1', title: 'Yes' },
		{ value: '0', title: 'No' }
	];

	const orderByList = [
		{ value: '', title: 'Order by' },
		{ value: 'created', title: 'Created' },
		{ value: 'deadline', title: 'Deadline' },
		{ value: 'title', title: 'Title' },
		{ value: 'updated', title: 'Updated' }
	];

	const sortDirectionsList = [
		{ value: '', title: 'Direction' },
		{ value: 'ASC', title: 'ASC' },
		{ value: 'DESC', title: 'DESC' }
	];

	const limitsList = [
		{ value: '', title: 'Results' },
		{ value: '1', title: '1' },
		{ value: '3', title: '3' },
		{ value: '5', title: '5' },
		{ value: '10', title: '10' }
	];

	return (
		<div className="ProjectsFilters">
			<form>
				<div className="row">
					<div className="col-12 col-xl">
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Filter..."
								onChange={handleFilterChange}
							/>
						</div>
					</div>
					<div className="col-12 col-xl-auto">
						<div className="form-group">
							<InputSelect
								name="completed"
								onChange={handleParamsChange}
								optionList={completedList}
								showDefault={false}
							/>
						</div>
					</div>
					<div className="col-12 col-xl-auto">
						<div className="input-group form-group">
							<InputSelect
								name="orderby"
								onChange={handleParamsChange}
								optionList={orderByList}
								showDefault={false}
							/>
							<InputSelect
								name="orderdir"
								classes={['ml-2']}
								onChange={handleParamsChange}
								optionList={sortDirectionsList}
								showDefault={false}
							/>
						</div>
					</div>
					<div className="col-12 col-xl-auto">
						<div className="form-group">
							<InputSelect
								name="limit"
								onChange={handleParamsChange}
								optionList={limitsList}
								showDefault={false}
							/>
						</div>
					</div>
					<div className="col-12 col-xl-auto">
						<div className="form-group">
							<button type="reset" className="button button-warning" onClick={resetFilters}>
								Reset
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

ProjectsFilters.defaultProps = {
	orderByList: []
};

export default ProjectsFilters;
