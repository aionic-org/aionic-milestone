import React from 'react';

import Helper from '../../../services/helper';

import Content from '../../../components/UI/Content';
import InputTitle from '../../../components/UI/Input/Title';

import KanbanContainer from '../../../components/Kanban/container';
import BoardDetails from '../../../components/Board/Details';

import BoardActionButtons from './components/ActionButtons';

const SitesBoard = (props) => {
	const { board, updateParentBoardState, deleteBoard } = props;

	const handleTitleChange = (e) => {
		Helper.updateObjectPropByEvent(board, e, updateParentBoardState);
	};

	return (
		<div className="SitesBoard">
			<div className="row">
				<div className="col">
					<InputTitle
						defaultValue={board.title}
						placeholder="Enter board title"
						onBlur={handleTitleChange}
						margin={true}
					/>
				</div>
				<div className="col-auto">
					<div className="btn-toolbar">
						<BoardDetails
							board={board}
							updateParentBoardState={updateParentBoardState}
							deleteBoard={deleteBoard}
							classes={['d-inline-block']}
						/>
						<div className="ml-2">
							<BoardActionButtons board={board} />
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<KanbanContainer userList={board.users} />
				</div>
			</div>
		</div>
	);
};

export default SitesBoard;
