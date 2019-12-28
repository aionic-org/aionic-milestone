import React from 'react';

import { Fetcher } from 'aionic-library';

import Kanban from '.';

const KanbanContainer = (props) => (
	<Fetcher url="task-status">
		{(status) => {
			return (
				<div className="KanbanContainer">
					<Kanban {...props} statusList={status} />
				</div>
			);
		}}
	</Fetcher>
);

export default KanbanContainer;
