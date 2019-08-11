import React from 'react';

import Helper from 'services/helper';

import Content from 'components/UI/Content';
import InputTitle from 'components/UI/Input/Title/';

import KanbanContainer from 'components/Kanban/container';
import BoardDetails from 'components/Board/Details';

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
						<div className="btn-group ml-2">
							<button
								type="button"
								className="btn btn-primary dropdown-toggle disabled"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								More
							</button>
							<div className="dropdown-menu dropdown-menu-right">
								<button type="button" className="btn dropdown-item">
									<i className="fas fa-share fa-fw mr-2" /> Share
								</button>
								<button type="button" className="btn dropdown-item">
									<i className="fas fa-print fa-fw mr-2" /> Print
								</button>
								<button type="button" className="dropdown-item">
									<i className="fas fa-archive fa-fw mr-2" /> Archive
								</button>
								<div className="dropdown-divider" />
								<button type="button" className="btn dropdown-item text-danger">
									<i className="fas fa-trash fa-fw mr-2" /> Delete
								</button>
							</div>
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
