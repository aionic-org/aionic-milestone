import React from 'react';

import UserSelectsUsername from '../../User/Selects/Username';
import TaskSelectsStatus from '../../Task/Selects/Status';

const SearchFilters = (props) => {
	const { searchParams, lists, handleFilterChange, resetFilters } = props;
	const { term, status, assignee, author, tag } = searchParams;
	const { userList, statusList } = lists;

	return (
		<div className="SearchFilters">
			<form id="filterForm">
				<div className="form-group">
					<label>Seach term</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter search term"
						name="term"
						onChange={handleFilterChange}
						value={term || ''}
					/>
				</div>
				<div className="form-group">
					<label>Status</label>
					<TaskSelectsStatus
						statusList={statusList}
						value={status || 0}
						onChange={handleFilterChange}
					/>
				</div>
				<div className="form-group">
					<label>Assignee</label>
					<UserSelectsUsername
						name="assignee"
						userList={userList}
						value={assignee || 0}
						onChange={handleFilterChange}
					/>
				</div>
				<div className="form-group">
					<label>Author</label>
					<UserSelectsUsername
						name="author"
						userList={userList}
						value={author || 0}
						onChange={handleFilterChange}
					/>
				</div>
				<div className="form-group">
					<label>Tag</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter tag"
						name="tag"
						onChange={handleFilterChange}
						value={tag || ''}
					/>
				</div>

				<button type="button" className="button button-warning btn-block" onClick={resetFilters}>
					Reset
				</button>
			</form>
		</div>
	);
};

export default SearchFilters;
