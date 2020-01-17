import React from 'react';

import UserSelect from '../../User/Select';
import TaskSelectsStatus from '../../Task/Selects/Status';
import GitOrganizationSelect from '../../Git/Organization/Select';

const SearchFilters = (props) => {
	const { searchParams, handleFilterChange, lists, resetFilters } = props;
	const { userList, statusList, orgList } = lists;

	const handleReset = () => {
		document.getElementById('filterForm').reset();
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
						name="searchTerm"
						onBlur={handleFilterChange}
						defaultValue={searchParams.term ? searchParams.term : ''}
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

				<div className="form-group">
					<label>Git Organization</label>
					<GitOrganizationSelect
						orgList={orgList}
						defaultValue={searchParams.organization ? searchParams.organization : undefined}
						onChange={handleFilterChange}
					/>
				</div>
				<div className="form-group">
					<label>Git Branch</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter Git branch"
						name="branch"
						onBlur={handleFilterChange}
						defaultValue={searchParams.branch}
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
