import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';

import Helper from 'services/helper';

const ProjectChartsStatusTasks = (props) => {
	const { project, taskStatus } = props;
	const { tasks } = project;

	const data = [];

	taskStatus.map((status) => {
		data.push({
			name: status.title,
			value: tasks.filter((task) => task.status.id === status.id).length
		});
	});

	return (
		<div className="ProjectChartsStatusTasks" style={{ width: '100%', height: 350 }}>
			<p className="text-muted text-center">Tasks Status</p>
			<ResponsiveContainer>
				<PieChart>
					<Pie dataKey="value" data={data} fill="#6c5ce7" label cy={175} />
					<Tooltip />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

ProjectChartsStatusTasks.defaultProps = {
	taskStatus: Helper.getTaskStatus()
};

export default ProjectChartsStatusTasks;
