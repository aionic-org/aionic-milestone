import React from 'react';

import { Spinner } from 'aionic-shared';

import useFetcher from 'components/Utility/Hooks/useFetcher';
import useTextFilter from 'components/Utility/Hooks/useTextFilter';

import Error from 'components/UI/Error';

import GitCommits from '.';

const GitCommitsContainer = (props) => {
	const { task } = props;
	const { organization, repository, branch } = task;

	const [commits, isLoading, error] = useFetcher(
		`git/${organization.id}/repository/${repository.id}/${branch}/commits`
	);

	const [commitsFiltered, setCommitsFiltered, filterText] = useTextFilter('message', commits);

	const filterCommits = (e) => {
		setCommitsFiltered(e.target.value);
	};

	if (isLoading) {
		return <Spinner showPadding={true} />;
	}

	if (error) {
		return <Error message={error} />;
	}
	const commitsToShow = filterText.length ? commitsFiltered : commits;
	return (
		<div className="GitCommitsContainer">
			<input
				type="text"
				className="form-control"
				placeholder="Filter commits..."
				onChange={filterCommits}
			/>
			<GitCommits commitList={commitsToShow} />
			<p className="text-muted text-center mt-2">Total: {commitsToShow.length}</p>
		</div>
	);
};

export default GitCommitsContainer;
