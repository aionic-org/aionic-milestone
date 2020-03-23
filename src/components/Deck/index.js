import React from 'react';

import TaskPreviewsAdvanced from '../Task/Previews/Advanced';
import ProjectPreview from '../Project/Preview';
import BoardPreview from '../Board/Preview';

import './Deck.scss';

const Deck = (props) => {
	const { itemList, itemsPerRow, deckType, showItemsNumber } = props;

	const tmpArr = [];
	let count = 0;

	for (let i = 0; i < itemList.length; i++) {
		if (i % itemsPerRow === 0 || i === 0) {
			tmpArr[count] = [];
			count++;
		}
		tmpArr[count - 1].push(itemList[i]);
	}

	const itemsNumber = showItemsNumber ? (
		<small className="d-block text-muted font-weight-bold mb-2">Count: {itemList.length}</small>
	) : null;

	const content = tmpArr.length ? (
		tmpArr.map((itemArr, i) => {
			return (
				// eslint-disable-next-line react/no-array-index-key
				<div className="card-deck" key={i}>
					{itemArr.map((item) => {
						switch (deckType) {
							case 'task':
								return <TaskPreviewsAdvanced key={item.id} task={item} />;
							case 'project':
								return <ProjectPreview key={item.id} project={item} {...props} />;
							case 'board':
								return <BoardPreview key={item.id} board={item} {...props} />;
							default:
								return null;
						}
					})}
				</div>
			);
		})
	) : (
		<i
			className="mt-3 d-block text-center fas fa-check-circle"
			style={{ color: '#00b894', fontSize: '1.5rem' }}
		/>
	);

	return (
		<div className="Deck">
			{itemsNumber}
			<div className="card-decks">{content}</div>
		</div>
	);
};

Deck.defaultProps = {
	itemList: [],
	itemsPerRow: 4,
	deckType: '',
	showItemsNumber: false
};

export default Deck;
