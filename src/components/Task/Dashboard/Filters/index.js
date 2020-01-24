import React from 'react';

import { Pills } from 'aionic-library';

import Helper from '../../../../services/helper';

const TaskDashboardFilters = (props) => {
	const { handleStatusChange } = props;

	const status = Helper.getTaskStatus();

	const handleClick = (title, id) => {
		if (id) {
			handleStatusChange(id);
		} else {
			handleStatusChange(null);
		}
	};

	const tabTitles = status.map((tabStatus) => {
		return {
			id: tabStatus.id,
			name: tabStatus.title
		};
	});

	return (
		<div className="TaskDashboardFilters mb-4">
			<Pills tabs={tabTitles} handleClick={handleClick} />
		</div>
	);
};

export default TaskDashboardFilters;
