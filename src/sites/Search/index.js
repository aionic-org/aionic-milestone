import React, { useState } from 'react';
import queryString from 'query-string';

import Helper from 'services/helper';

import Content from 'components/UI/Content';
import Title from 'components/UI/Title';

import SearchDashboardTaskContainer from './components/Dashboard/TaskContainer';
import SitesSearchFilter from './components/Filters/container';

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
			<Content>
				<Title title="Search" />
				<div className="row">
					<div className="col-12 col-xl-3">
						<SitesSearchFilter
							searchParams={params}
							handleFilterChange={handleFilterChange}
							resetFilters={resetFilters}
						/>
					</div>
					<div className="col-12 col-xl-9 mt-3 mt-md-0">
						<SearchDashboardTaskContainer searchParams={params} />
					</div>
				</div>
			</Content>
		</div>
	);
};

export default SitesSearch;
