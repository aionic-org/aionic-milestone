import React, { useState } from 'react';
import queryString from 'query-string';

import Helper from 'services/helper';

import Title from 'components/UI/Title';

import SearchFiltersContainer from '../../components/Search/Filters/container';

import SearchTaskContainer from './components/TaskContainer';

const SitesSearch = (props) => {
	const { location } = props;

	const [params, setParams] = useState({ ...queryString.parse(location.search) });

	const handleFilterChange = (e) => {
		Helper.updateObjectPropByEvent(params, e, (updatedParams) => {
			setParams(updatedParams);
		});
	};

	const resetFilters = () => {
		setParams({});
	};

	return (
		<div className="SitesSearch">
			<Title title="Search" />
			<div className="row">
				<div className="col-12 col-xl-3">
					<SearchFiltersContainer
						searchParams={params}
						handleFilterChange={handleFilterChange}
						resetFilters={resetFilters}
					/>
				</div>
				<div className="col-12 col-xl-9 mt-3 mt-md-0">
					<SearchTaskContainer searchParams={params} />
				</div>
			</div>
		</div>
	);
};

export default SitesSearch;
