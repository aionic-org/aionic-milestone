import React, { useState } from 'react';

import './Tags.scss';

import Tag from './Tag';
import TagsForm from './Form';

const Tags = (props) => {
	const { tags, updateParentState } = props;

	const [showForm, setShowForm] = useState(false);
	const [tagList, setTagList] = useState(tags && tags.length ? tags.split(',') : []);

	const toggleForm = () => {
		setShowForm(!showForm);
	};

	const updateTags = (tagsUpdated, doToggle) => {
		setTagList(tagsUpdated);
		updateParentState(tagsUpdated.join(','));

		if (doToggle) {
			toggleForm();
		}
	};

	return (
		<div className="Tags">
			<ul className="list-inline d-flex align-items-center flex-wrap">
				{tagList.map((tag, i) => (
					// eslint-disable-next-line react/no-array-index-key
					<Tag key={i} tag={tag} tags={tagList} updateTags={updateTags} />
				))}
				<li className="list-inline-item add-tag">
					{showForm ? (
						<TagsForm tags={tagList} updateTags={updateTags} toggleForm={toggleForm} />
					) : (
						<i className="fas fa-plus" onClick={toggleForm} />
					)}
				</li>
			</ul>
		</div>
	);
};

Tags.defaultProps = {
	tags: []
};

export default Tags;
