import React from 'react';

import { useFetcher } from 'aionic-library';

import Session from '../../../services/session';

import ProjectPreview from '../../../components/Project/Preview';
import { WatchedItems } from 'services/constants';

const ProjectsWatched = (props) => {
	const [data, isLoading, error, setData] = useFetcher('projects', {
		ids: Session.getWatchedItems(WatchedItems.PROJECT).join(',')
	});

	const handleWatch = (projectIDs) => {
		setData(data.filter((project) => projectIDs.includes(project.id)));
	};

	return !isLoading && Session.getWatchedItems(WatchedItems.PROJECT).length ? (
		<div className="ProjectsWatched mb-3">
			<small>Watched</small>
			<div className="row">
				{data.map((project, i) => (
					<div className="col-12 col-md-4 mt-2" key={project.id}>
						<ProjectPreview project={project} handleWatch={handleWatch} />
					</div>
				))}
			</div>
			<hr className="featurette-divider" />
		</div>
	) : null;
};

export default ProjectsWatched;
