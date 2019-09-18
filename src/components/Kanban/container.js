import React from 'react';

import { Fetcher } from 'aionic-library';

import Board from '.';

const KanbanContainer = (props) => (
	<Fetcher url="task-status">
		{(status) => {
			return (
				<div className="KanbanContainer">
					<Board {...props} statusList={status} />
				</div>
			);
		}}
	</Fetcher>
);

export default KanbanContainer;
