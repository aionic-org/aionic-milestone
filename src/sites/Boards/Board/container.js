import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Api, Spinner, Error, Toast } from 'aionic-shared';

import SitesBoard from '.';

class SitesBoardContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: null,
			board: {},
			boardUpdate: {
				success: null,
				msg: null
			}
		};
	}

	componentDidMount = async () => {
		try {
			const board = await Api.fetchData(`boards/${this.props.match.params.id}`);

			if (board) {
				this.setState({ isLoading: false, board });
			} else {
				this.setState({ isLoading: false, msg: 'Resource not found!' });
			}
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err)
			});
		}
	};

	updateBoard = (_board) => {
		const board = _board || this.state.board;

		Api.putData(`boards/${board.id}`, { board })
			.then((updatedBoard) => {
				this.setState({
					board: updatedBoard,
					boardUpdate: {
						success: true,
						msg: 'Board successfully updated!'
					}
				});
				setTimeout(() => {
					this.setState({
						boardUpdate: {
							success: null,
							msg: null
						}
					});
				}, 2000);
			})
			.catch(() => {
				this.setState({
					boardUpdate: {
						success: false,
						msg: 'Failed to update board!'
					}
				});
			});
	};

	deleteBoard = () => {
		Api.deleteData(`boards/${this.state.board.id}`)
			.then(() => {
				this.props.history.push('/boards');
			})
			.catch(() => {
				this.setState({
					boardUpdate: {
						success: false,
						msg: 'Failed to delete board!'
					}
				});
			});
	};

	updateParentBoardState = (board) => {
		this.updateBoard(board);
	};

	render() {
		const { isLoading, msg, board, boardUpdate } = this.state;

		const alert = boardUpdate.msg ? (
			<Toast msg={boardUpdate.msg} success={boardUpdate.success} />
		) : null;

		if (isLoading) {
			return <Spinner />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="SitesBoardContainer">
				{alert}
				<SitesBoard
					board={board}
					updateParentBoardState={this.updateParentBoardState}
					deleteBoard={this.deleteBoard}
				/>
			</div>
		);
	}
}

export default withRouter(SitesBoardContainer);
