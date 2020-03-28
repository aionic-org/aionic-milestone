import React from 'react';

import UserSelect from '../../User/Select';
import TaskSelectsStatus from '../../Task/Selects/Status';

const SearchFilters = (props) => {
	const { searchParams, lists, handleFilterChange, resetFilters } = props;
	const { term } = searchParams;
	const { userList, statusList } = lists;

	const handleReset = () => {
		resetFilters();
	};

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
						value={term ? term : ''}
					/>
				</div>
				<div className="form-group">
					<label>Status</label>
					<TaskSelectsStatus
						statusList={statusList}
						defaultValue={searchParams.status ? searchParams.status.id : undefined}
						onChange={handleFilterChange}
					/>
				</div>
				<div className="form-group">
					<label>Assignee</label>
					<UserSelect
						name="assignee"
						userList={userList}
						defaultValue={searchParams.assignee ? searchParams.assignee : undefined}
						onChange={handleFilterChange}
					/>
				</div>
				<div className="form-group">
					<label>Author</label>
					<UserSelect
						name="author"
						userList={userList}
						defaultValue={searchParams.author ? searchParams.author : undefined}
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
						onBlur={handleFilterChange}
						defaultValue={searchParams.tag}
					/>
				</div>

				<button type="button" className="button button-warning btn-block" onClick={handleReset}>
					Reset
				</button>
			</form>
		</div>
	);
};

export default SearchFilters;
