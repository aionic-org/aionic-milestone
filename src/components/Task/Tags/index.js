import React, { useState } from 'react';

import './Tags.scss';

import TaskTag from './Tag';
import TaskTagForm from './Form';

const TaskTags = (props) => {
	const { task, updateTask } = props;

	const [showForm, setShowForm] = useState(false);
	const [tagList, setTagList] = useState(task.tags ? task.tags.split(',') : []);

	const toggleForm = () => {
		setShowForm(!showForm);
	};

	const updateTagList = (newTagList, doToggle) => {
		setTagList(newTagList);
		updateTask({ ...task, tags: newTagList.join(',') });

		if (doToggle) {
			toggleForm();
		}
	};

	return (
		<div className="TaskTags">
			<ul className="TaskTags list-inline d-flex align-items-center flex-wrap">
				{tagList.map((tag, i) => (
					// eslint-disable-next-line react/no-array-index-key
					<TaskTag key={i} tag={tag} tagList={tagList} updateTagList={updateTagList} />
				))}
				<li className="list-inline-item add-tag">
					{showForm ? (
						<TaskTagForm tagList={tagList} updateTagList={updateTagList} toggleForm={toggleForm} />
					) : (
						<i className="fas fa-plus" onClick={toggleForm} />
					)}
				</li>
			</ul>
		</div>
	);
};

TaskTags.defaultProps = {
	tagList: [1, 2, 3, 4]
};

export default TaskTags;
