import React, { useState } from 'react';

import GitOrganizationSelect from 'components/Git/Organization/Select';
import GitRepositorySelect from 'components/Git/Repository/Select';
import GitCommitsContainer from 'components/Git/Commits/container';

const TaskGit = (props) => {
	const { lists, task, handleOrgChange, handleRepoChange, handleBranchChange } = props;
	const { orgList, repoList } = lists;

	console.log(task);

	const allowCommitsShow = task.organization && task.repository && task.branch;

	const [showCommits, setShowCommits] = useState(false);

	const toggleCommits = () => {
		if (allowCommitsShow) {
			setShowCommits(!showCommits);
		}
	};

	const commits = showCommits ? <GitCommitsContainer task={task} /> : null;

	return (
		<div className="TaskGit">
			<div className="form-group row">
				<div className="col-12">
					<label>Organization</label>
					<GitOrganizationSelect
						orgList={orgList}
						defaultValue={task.organization ? task.organization.id : undefined}
						onChange={handleOrgChange}
					/>
				</div>
			</div>
			<div className="form-group row">
				<div className="col-12">
					<label>Repository</label>
					<GitRepositorySelect
						repoList={repoList}
						defaultValue={task.repository ? task.repository.id : undefined}
						onChange={handleRepoChange}
					/>
				</div>
			</div>
			<div className="form-group row">
				<div className="col-12">
					<label>Branch</label>
					<input
						type="text"
						name="branch"
						className="form-control"
						defaultValue={task.branch ? task.branch : undefined}
						onBlur={handleBranchChange}
					/>
				</div>
			</div>
			<button
				type="button"
				className={`btn btn-link d-block mx-auto mb-2 ${!allowCommitsShow ? ' disabled' : ''}`}
				onClick={toggleCommits}
			>
				{`${showCommits ? 'Hide' : 'Fetch'}`} commits
			</button>
			{commits}
		</div>
	);
};

TaskGit.defaultProps = {
	isNewTask: false
};

export default TaskGit;
