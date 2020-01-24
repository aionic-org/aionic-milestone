import React from 'react';

import Helper from '../../services/helper';

import Kanban from '.';

const KanbanContainer = (props) => {
	return (
		<div className="KanbanContainer">
			<Kanban {...props} statusList={Helper.getTaskStatus()} />
		</div>
	);
};
export default KanbanContainer;
