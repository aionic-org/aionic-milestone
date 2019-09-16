import React, { Component } from 'react';

import { Api, Spinner } from 'aionic-shared';

import Error from 'components/UI/Error';

import KanbanFilters from '.';

class KanbanFiltersContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: null,
			lists: {
				priorityList: []
			}
		};
	}

	componentDidMount = async () => {
		try {
			const priorityList = await Api.fetchData('task-priorities');

			priorityList.unshift({ id: 0, title: 'Task Priority' });

			this.setState({ isLoading: false, lists: { priorityList } });
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
