import React from 'react';
import { Link } from 'react-router-dom';

import './Tag.scss';

const TaskTag = (props) => {
  const { tag, tagList, updateTagList } = props;

  const removeTag = (e) => {
    e.preventDefault();

    const tagToRemove = e.target.dataset.tag;
    const tagToRemovePos = tagList.findIndex((_tag) => _tag === tagToRemove);

    if (tagToRemovePos >= 0) {
      const tagListCopy = tagList.slice();
      tagListCopy.splice(tagToRemovePos, 1);

      updateTagList(tagListCopy);
    }
  };

  return (
    <li className="TaskTag list-inline-item">
      <Link to={`/search?tag=${tag}`} className="">
        {tag}
        <i className="fas fa-times ml-2" data-tag={tag} onClick={removeTag} />
      </Link>
    </li>
  );
};

export default TaskTag;
