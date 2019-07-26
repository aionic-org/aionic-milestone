import React from 'react';

import Fetcher from 'components/Utility/Fetcher';

import Tabs from 'components/UI/Tabs';

const TaskDashboardFilters = (props) => (
	<Fetcher url="task-status">
		{(status) => {
			const { handleStatusChange } = props;

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
					<Tabs tabs={tabTitles} handleClick={handleClick} />
				</div>
			);
		}}
	</Fetcher>
);

export default TaskDashboardFilters;
