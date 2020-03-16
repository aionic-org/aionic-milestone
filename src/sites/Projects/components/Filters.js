import React from 'react';

import { InputSelect } from 'aionic-library';

import FiltersComplete from '../../../components/Filters/Complete';
import FiltersDirection from '../../../components/Filters/Direction';
import FiltersResults from '../../../components/Filters/Results';

const ProjectsFilters = (props) => {
	const { filterItemsByParams, filterItemsByText, resetFilters } = props;

	const handleParamsChange = (e) => {
		filterItemsByParams({ [e.target.name]: e.target.value });
	};

	const handleFilterChange = (e) => {
		filterItemsByText(e.target.value);
	};

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
								placeholder="Filter projects"
								onChange={handleFilterChange}
							/>
						</div>
					</div>
					<div className="col-12 col-xl-auto">
						<FiltersComplete onChange={handleParamsChange} />
					</div>
					<div className="col-12 col-xl-auto">
						<div className="input-group">
							<InputSelect
								name="orderby"
								onChange={handleParamsChange}
								optionList={orderByList}
								showDefault={false}
							/>
							<FiltersDirection classes={['ml-2']} onChange={handleParamsChange} />
						</div>
					</div>
					<div className="col-12 col-xl-auto">
						<FiltersResults onChange={handleParamsChange} />
					</div>
					<div className="col-12 col-xl-auto">
						<button type="reset" className="button button-warning btn-block" onClick={resetFilters}>
							Reset
						</button>
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
