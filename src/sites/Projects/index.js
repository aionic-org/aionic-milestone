import React from 'react';

import Title from '../../components/UI/Title';

import CardDeck from '../../components/Deck';

import ProjectsCreate from './components/Create';
import ProjectsFilters from './components/Filters';
import ProjectsWatched from './components/Watched';

const SitesProjects = (props) => {
	const { projects, filters, filterProjectsByParams, filterProjectsByText, resetFilters } = props;
	const { fetched, filtered } = projects;

	const projectsToShow = filters.text.length ? filtered : fetched;

	return (
		<div className="SitesProjects">
			<div className="row">
				<div className="col">
					<Title title="Projects" />
				</div>
				<div className="col-auto">
					<ProjectsCreate />
				</div>
			</div>

			<ProjectsWatched />

			<div className="row">
				<div className="col-12 col-xl">
					<ProjectsFilters
						filters={filters}
						filterItemsByParams={filterProjectsByParams}
						filterItemsByText={filterProjectsByText}
						resetFilters={resetFilters}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<CardDeck deckType="project" itemList={projectsToShow} itemsPerRow={1} />
				</div>
			</div>
		</div>
	);
};

export default SitesProjects;
