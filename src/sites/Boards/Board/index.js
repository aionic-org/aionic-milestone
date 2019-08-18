import React from 'react';

import Helper from 'services/helper';

import Content from 'components/UI/Content';
import InputTitle from 'components/UI/Input/Title/';

import KanbanContainer from 'components/Kanban/container';
import BoardDetails from 'components/Board/Details';
import BoardOptionButtons from 'components/Board/OptionButtons';

const SitesBoard = (props) => {
	const { board, updateParentBoardState, deleteBoard } = props;

	const handleTitleChange = (e) => {
		Helper.updateObjectPropByEvent(board, e, updateParentBoardState);
	};

	return (
		<div className="SitesBoard">
			<Content>
				<div className="row">
					<div className="col">
						<InputTitle
							defaultValue={board.title}
							placeholder="Enter board title"
							onBlur={handleTitleChange}
						/>
					</div>
					<div className="col-auto">
						<BoardDetails
							board={board}
							updateParentBoardState={updateParentBoardState}
							deleteBoard={deleteBoard}
							classes={['d-inline-block']}
						/>
						<div className="btn-group">
							<BoardOptionButtons board={board} />
						</div>
					</div>
				</div>
				<hr className="featurette-divider" />

				<div className="row">
					<div className="col-12">
						<KanbanContainer userList={board.users} showBody={false} />
					</div>
				</div>
			</Content>
		</div>
	);
};

export default SitesBoard;
