import React from 'react';

import './Commits.scss';

import GitCommit from './Commit';

const GitCommits = (props) => {
	const { commitList } = props;

	return (
		<div className="GitCommits">
			<div className="list-group">
				{commitList.map((commit) => (
					<GitCommit key={commit.sha} commit={commit} />
				))}
			</div>
		</div>
	);
};

GitCommits.defaultProps = {
	commitList: []
};

export default GitCommits;
