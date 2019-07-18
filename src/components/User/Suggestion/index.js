import React from 'react';

import './Suggestion.scss';

import Api from 'services/api';

import useSuggestion from 'components/Utility/Hooks/useSuggestion';

const UserSuggestion = (props) => {
  const { userListSelected, updateParent } = props;

  const [
    itemList,
    itemListSelected,
    setItemList,
    showSuggestion,
    setShowSuggestion,
    handleSelect,
    handleRemove
  ] = useSuggestion(userListSelected, updateParent);

  const handleInputChange = async (e) => {
    try {
      const searchTerm = e.target.value;

      if (searchTerm.length) {
        const updatedItemList = await Api.fetchData('users/search', { username: searchTerm });

        setItemList(updatedItemList);
        setShowSuggestion(updatedItemList.length);
      } else {
        setShowSuggestion(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const suggestion = showSuggestion ? (
    <div className="suggestionList">
      <ul className="list-group">
        {itemList.map((user, i) => (
          <li
            className="list-group-item list-group-item-action"
            key={user.id}
            data-pos={i}
            onClick={handleSelect}
          >
            {user.firstname} {user.lastname}
          </li>
        ))}
      </ul>
    </div>
  ) : null;

  const selected = itemListSelected.length ? (
    <div className="selectedList" style={{ opacity: showSuggestion ? 0.3 : 1 }}>
      <ul className="list-group">
        {itemListSelected.map((user, i) => (
          <li className="list-group-item list-group-item-action" key={user.id}>
            <div className="row">
              <div className="col-9">
                {user.firstname} {user.lastname}
              </div>
              <div className="col-3">
                <small className="float-right mt-1">
                  <i className="fas fa-times ml-2" data-pos={i} onClick={handleRemove} />
                </small>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <span className="text-muted mt-2 d-block text-right">Count: {itemListSelected.length}</span>
    </div>
  ) : null;

  return (
    <div className="UserSuggestion">
      <input
        type="text"
        className="form-control"
        name="title"
        placeholder="Enter username..."
        autoComplete="off"
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.keyCode === 27) setShowSuggestion(false);
        }}
        id="suggestionInput"
      />
      {suggestion}
      {selected}
    </div>
  );
};

UserSuggestion.defaultProps = {
  userListSelected: [],
  updateParent: () => {}
};

export default UserSuggestion;
