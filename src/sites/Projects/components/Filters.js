import React from 'react';

import { InputSelect } from 'aionic-shared';

const ProjectsFilters = (props) => {
	const { filterItemsByParams, filterItemsByText, resetFilters, orderByList } = props;

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

	const sortDirectionsList = [
		{ value: '', title: 'Direction' },
		{ value: 'ASC', title: 'ASC' },
		{ value: 'DESC', title: 'DESC' }
	];

	const limitsList = [
		{ value: '', title: 'Max results' },
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
					<div className="col-12 col-xl-2">
						<div className="form-group">
							<button type="reset" className="btn btn-block btn-warning" onClick={resetFilters}>
								Reset filters
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
