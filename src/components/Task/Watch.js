import React, { useState } from 'react';

import { Api, Session } from 'aionic-library';

const TaskWatch = (props) => {
	const { task } = props;

	const [isTaskWatched, setIsTaskWatched] = useState(
		Session.getUser().tasksWatched.find((wTask) => wTask.id === task.id)
	);

	const toggleWatchTask = async () => {
		const { tasksWatched } = Session.getUser();

		if (isTaskWatched) {
			const taskIdx = tasksWatched.findIndex((wTask) => wTask.id === task.id);
			tasksWatched.splice(taskIdx, 1);
			setIsTaskWatched(false);
		} else {
			tasksWatched.push(task);
			setIsTaskWatched(true);
		}

		await Api.putData(`users/${Session.getUser().id}`, {
			user: { ...Session.getUser(), tasksWatched }
		});
		Session.setUser({ ...Session.getUser(), tasksWatched });
	};

	return (
		<div className="TaskWatch">
			{isTaskWatched ? (
				<button type="button" className="btn dropdown-item" onClick={toggleWatchTask}>
					<i className="far fa-heart fa-fw mr-2" /> Unwatch
				</button>
			) : (
				<button type="button" className="btn dropdown-item" onClick={toggleWatchTask}>
					<i className="fas fa-heart fa-fw mr-2" /> Watch
				</button>
			)}
		</div>
	);
};

export default TaskWatch;
