import React, { Component } from 'react';

import UserSelect from 'components/User/Select';
import TaskSelectsStatus from 'components/Task/Selects/Status';
import TaskSelectsType from 'components/Task/Selects/Type';
import GitOrganizationSelect from 'components/Git/Organization/Select';

class SitesSearchFilter extends Component {
	handleReset = () => {
		// eslint-disable-next-line no-undef
		document.getElementById('filterForm').reset();
		this.props.resetFilters();
	};

	render() {
		const { searchParams, handleFilterChange, lists } = this.props;
		const { userList, statusList, typeList, orgList } = lists;

		return (
			<div className="SitesSearchFilter">
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
						<label>Type</label>
						<TaskSelectsType
							typeList={typeList}
							defaultValue={searchParams.type ? searchParams.type.id : undefined}
							onChange={handleFilterChange}
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
					<button type="button" className="btn btn-primary btn-block" onClick={this.handleReset}>
						Reset
					</button>
				</form>
			</div>
		);
	}
}

export default SitesSearchFilter;
