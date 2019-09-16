import React from 'react';

import { Spinner } from 'aionic-shared';

import useFetcher from 'components/Utility/Hooks/useFetcher';

import Error from 'components/UI/Error';

import ProjectSelect from '../Project/Select';

const TaskMove = (props) => {
	const { task, updateParentTaskState } = props;

	const [projects, isLoading, error] = useFetcher('projects');

	const updateTaskProject = (e) => {
		updateParentTaskState({ ...task, project: { id: e.target.value } });
	};

	if (isLoading) {
		return <Spinner showPadding={true} />;
	}

	if (error) {
		return <Error message={error} />;
	}

	return (
		<div className="TaskMove">
			<label>Move this task to another project</label>
			<ProjectSelect
				projectList={projects}
				defaultValue={task.project ? task.project.id : undefined}
				onChange={updateTaskProject}
			/>
		</div>
	);
};

export default TaskMove;
