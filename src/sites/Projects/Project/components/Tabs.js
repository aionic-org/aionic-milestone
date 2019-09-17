import React from 'react';

import { useTab, Tabs } from 'aionic-shared';

import ProjectCommentsContainer from 'components/Project/Comments/container';
import ProjectDetails from 'components/Project/Details';

const SitesProjectTabs = (props) => {
	const { project, updateParentProjectState } = props;
	const [tab, changeTab] = useTab('Details');

	const tabs = [{ name: 'Details' }, { name: 'Comments' }];

	let content = <p className="text-muted text-center font-italic mt-2">No tab selected</p>;
	switch (tab) {
		case 'Details':
			content = (
				<ProjectDetails project={project} updateParentProjectState={updateParentProjectState} />
			);
			break;
		case 'Comments':
			content = <ProjectCommentsContainer projectId={project.id} />;
			break;
		default:
			break;
	}

	return (
		<div className="SitesProjectTabs">
			<Tabs handleClick={changeTab} tabs={tabs} preselectTabIdx={0} />
			<div className={`SitesProjectTabs px-2 ${content ? 'mt-3' : ''}`}>{content}</div>
		</div>
	);
};

export default SitesProjectTabs;
