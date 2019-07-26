import React from 'react';

import Fetcher from 'components/Utility/Fetcher';

import CardDeck from 'components/Deck';

const TaskProjectsContainer = (props) => (
	<Fetcher url={`tasks/${props.taskId}/projects`} showSpinnerPadding={true}>
		{(projects) => (
			<div className="TaskProjectsContainer">
				{props.showDescription ? (
					<p className="text-muted">This task is part of the following projects:</p>
				) : null}
				<CardDeck deckType="Project" itemList={projects} itemsPerRow={1} />
			</div>
		)}
	</Fetcher>
);

TaskProjectsContainer.defaultProps = {
	showDescription: false
};

export default TaskProjectsContainer;
