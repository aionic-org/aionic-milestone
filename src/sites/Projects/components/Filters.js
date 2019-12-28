import React from 'react';

import { InputSelect } from 'aionic-library';

import Helper from '../../../services/helper';

const ProjectsFilters = (props) => {
	const { filterItemsByParams, filterItemsByText, resetFilters } = props;

	const handleParamsChange = (e) => {
		filterItemsByParams({ [e.target.name]: e.target.value });
	};

	const handleFilterChange = (e) => {
		filterItemsByText(e.target.value);
	};

	const { completeStatus, resultLimits, sortDirections } = Helper.getFilterLists();

	const orderByList = [
		{ value: '', title: 'Order by' },
		{ value: 'created', title: 'Created' },
		{ value: 'deadline', title: 'Deadline' },
		{ value: 'title', title: 'Title' },
		{ value: 'updated', title: 'Updated' }
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
								optionList={completeStatus}
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
								optionList={sortDirections}
								showDefault={false}
							/>
						</div>
					</div>
					<div className="col-12 col-xl-auto">
						<div className="form-group">
							<InputSelect
								name="limit"
								onChange={handleParamsChange}
								optionList={resultLimits}
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
