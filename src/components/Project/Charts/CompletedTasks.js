import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';

const ProjectChartsCompletedTasks = (props) => {
	const { project } = props;

	const openTasks = project.tasks.filter((task) => !task.completed).length;
	const completedTasks = project.tasks.filter((task) => task.completed).length;

	const data = [
		{ name: 'Open', value: openTasks },
		{ name: 'Completed', value: completedTasks }
	];

	return (
		<div className="ProjectChartsCompletedTasks" style={{ width: '100%', height: 250 }}>
			<p className="text-muted text-center">Completed Tasks</p>
			<ResponsiveContainer>
				<PieChart>
					<Pie
						dataKey="value"
						startAngle={180}
						endAngle={0}
						data={data}
						fill="#6c5ce7"
						label
						cy={125}
					/>
					<Tooltip />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ProjectChartsCompletedTasks;
