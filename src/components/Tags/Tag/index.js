import React from 'react';
import { Link } from 'react-router-dom';

import './Tag.scss';

const Tag = (props) => {
	const { tag, tags, updateTags } = props;

	const removeTag = (e) => {
		e.preventDefault();

		const tagToRemove = e.target.dataset.tag;
		const tagToRemovePos = tags.findIndex((_tag) => _tag === tagToRemove);

		if (tagToRemovePos >= 0) {
			const tagsCopy = tags.slice();
			tagsCopy.splice(tagToRemovePos, 1);

			updateTags(tagsCopy);
		}
	};

	return (
		<li className="Tag list-inline-item">
			<Link to={`/search?tag=${tag}`}>
				{tag}
				<i className="fas fa-times ml-2" data-tag={tag} onClick={removeTag} />
			</Link>
		</li>
	);
};

export default Tag;
