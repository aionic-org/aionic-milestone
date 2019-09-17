import React, { Component } from 'react';

import { Api, Spinner, Error } from 'aionic-shared';

import SitesBoards from '.';

class SitesBoardsContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: null,
			boards: {
				all: [],
				filtered: []
			},
			filters: {
				params: {},
				text: ''
			}
		};
	}

	componentDidMount = () => {
		this.fetchBoards({});
	};

	fetchBoards = async (_params) => {
		try {
			const params = _params || this.state.filters.params;

			const boards = await Api.fetchData('boards', params);

			const newState = {
				isLoading: false,
				filters: { ...this.state.filters, params },
				boards: { all: boards, filtered: [] }
			};

			this.setState(newState, () => {
				this.filterBoardsByText(this.state.filters.text);
			});
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err)
			});
		}
	};

	filterBoardsByParams = (params) => {
		const newParams = {
			...this.state.filters.params,
			...(!Object.keys(params).length ? {} : params)
		};

		this.fetchBoards(newParams);
	};

	filterBoardsByText = (text) => {
		this.setState((prevState) => {
			const filters = { ...prevState.filters, text };

			const boardsFiltered = text.length
				? prevState.boards.all.filter((boards) =>
						boards.title.toLowerCase().includes(text.toLowerCase())
				  )
				: prevState.boards.all;

			return {
				filters,
				boards: { ...prevState.boards, filtered: boardsFiltered }
			};
		});
	};

	resetFilters = () => {
		this.setState({ filters: { params: {}, text: '' } }, this.fetchBoards);
	};

	render = () => {
		const { isLoading, msg, boards, filters } = this.state;

		if (isLoading) {
			return <Spinner />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="SitesBoardsContainer">
				<SitesBoards
					boards={boards}
					filters={filters}
					filterBoardsByParams={this.filterBoardsByParams}
					filterBoardsByText={this.filterBoardsByText}
					resetFilters={this.resetFilters}
				/>
			</div>
		);
	};
}

export default SitesBoardsContainer;
