import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

import Helper from 'services/helper';

const ProjectChartsStatusTasks = (props) => {
	const { project, taskStatus } = props;
	const { tasks } = project;

	const data = [];

	taskStatus.map((status) => {
		data.push({
			name: status.title,
			value: tasks.filter((task) => task.status.id === status.id).length,
			color: status.color
		});
	});

	return (
		<div className="ProjectChartsStatusTasks" style={{ width: '100%', height: 320 }}>
			<p className="text-muted text-center">Tasks Status</p>
			<ResponsiveContainer>
				<PieChart>
					<Pie
						dataKey="value"
						data={data}
						cy={125}
						label
						innerRadius={60}
						outerRadius={80}
						paddingAngle={5}
					>
						{data.map((status, i) => (
							<Cell fill={status.color} key={i} />
						))}
					</Pie>
					<Tooltip />
					<Legend
						verticalAlign="bottom"
						chartHeight={2000}
						wrapperStyle={{ bottom: '2rem' }}
						payload={data.map((item) => ({
							id: item.name,
							type: 'square',
							value: `${item.name} (${item.value})`,
							color: item.color
						}))}
					/>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

ProjectChartsStatusTasks.defaultProps = {
	taskStatus: Helper.getTaskStatus()
};

export default ProjectChartsStatusTasks;
