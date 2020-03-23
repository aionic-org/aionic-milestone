import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import { useFetcher } from 'aionic-library';

import Session from '../../../services/session';
import Helper from '../../../services/helper';

import { WatchedItems } from '../../../services/constants';

import PreviewDragable from '../../../components/Utility/PreviewDragable';
import ProjectPreview from '../../../components/Project/Preview';

const ProjectsWatched = (props) => {
	const watchedItems = Session.getWatchedItems(WatchedItems.PROJECT);
	const [data, isLoading, error, setData] = useFetcher(
		'projects',
		{
			ids: watchedItems.join(',')
		},
		(projectA, projectB) =>
			watchedItems.indexOf(projectA.id) < watchedItems.indexOf(projectB.id) ? -1 : 1
	);

	const handleWatch = (projectIDs) => {
		setData(data.filter((project) => projectIDs.includes(project.id)));
	};

	const moveItem = (dragIndex, hoverIndex) => {
		setData(Helper.swapArrayElements(data, dragIndex, hoverIndex));
		Session.setWatchedItems(
			WatchedItems.PROJECT,
			Helper.swapArrayElements(Session.getWatchedItems(WatchedItems.PROJECT), dragIndex, hoverIndex)
		);
	};

	return !isLoading && data.length && Session.getWatchedItems(WatchedItems.PROJECT).length ? (
		<div className="ProjectsWatched mb-3">
			<small>Watched</small>
			<div className="row">
				<DndProvider backend={Backend}>
					{data.map((project, i) => (
						<div className="col-12 col-md-4 mt-2" key={project.id}>
							<PreviewDragable
								item={project}
								itemType={WatchedItems.PROJECT}
								moveItem={moveItem}
								index={i}
							>
								{(ref, style) => {
									return (
										<ProjectPreview
											project={project}
											_ref={ref}
											_style={style}
											handleWatch={handleWatch}
										/>
									);
								}}
							</PreviewDragable>
						</div>
					))}
				</DndProvider>
			</div>
			<hr className="featurette-divider" />
		</div>
	) : null;
};

export default ProjectsWatched;
