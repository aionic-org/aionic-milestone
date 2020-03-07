import React from 'react';

const TaskTagForm = (props) => {
	const { tagList, updateTagList, toggleForm } = props;

	const addTag = (e) => {
		e.preventDefault();

		const value = document.querySelector('.tag-value').value.toLowerCase();
		if (value.length && !tagList.includes(value)) {
			const tagListCopy = tagList.slice();
			tagListCopy.push(value);

			updateTagList(tagListCopy, true);
		} else {
			toggleForm();
		}
	};

	return (
		<div className="TaskTagForm">
			<form onSubmit={addTag}>
				<input
					className="form-control form-control-sm tag-value"
					type="text"
					placeholder="Enter tag"
					onBlur={addTag}
					// eslint-disable-next-line jsx-a11y/no-autofocus
					autoFocus={true}
				/>
			</form>
		</div>
	);
};

export default TaskTagForm;
