import React, { Component } from 'react';

import { Api, Spinner, Error } from 'aionic-library';

import Helper from '../../../services/helper';

import KanbanFilters from '.';

class KanbanFiltersContainer extends Component {
	constructor(props) {
		super(props);

		const priorityList = Helper.getTaskPriorities() || [];
		priorityList.unshift({ id: 0, title: 'Task Priority' });

		this.state = {
			isLoading: false,
			msg: null,
			lists: {
				priorityList: priorityList
			}
		};
	}

	// Fallback
	componentDidMount = async () => {
		try {
			if (this.state.lists.priorityList.length === 1) {
				this.setState({ isLoading: true });

				const priorityList = await Api.fetchData('task-priorities');

				this.setState({ isLoading: false, lists: { priorityList } });
			}
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err)
			});
		}
	};

	render() {
		const { isLoading, msg, lists } = this.state;

		if (isLoading) {
			return <Spinner />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="KanbanFiltersContainer">
				<KanbanFilters {...this.props} {...lists} />
			</div>
		);
	}
}

export default KanbanFiltersContainer;
