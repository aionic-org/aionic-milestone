import React from 'react';

const TagsForm = (props) => {
	const { tags, updateTags, toggleForm } = props;

	const addTag = (e) => {
		e.preventDefault();

		const value = document.querySelector('.tag-value').value.toLowerCase();
		if (value.length && !tags.includes(value)) {
			const tagsCopy = tags.slice();
			tagsCopy.push(value);

			updateTags(tagsCopy, true);
		} else {
			toggleForm();
		}
	};

	return (
		<div className="TagsForm">
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

export default TagsForm;
