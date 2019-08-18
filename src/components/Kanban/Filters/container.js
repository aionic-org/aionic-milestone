import React, { Component } from 'react';

import Api from 'services/api';

import Error from 'components/UI/Error';
import Spinner from 'components/UI/Spinner';

import KanbanFilters from '.';

class KanbanFiltersContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: null,
			lists: {
				typeList: [],
				priorityList: []
			}
		};
	}

	componentDidMount = async () => {
		try {
			const typeList = await Api.fetchData('task-type');
			const priorityList = await Api.fetchData('task-priorities');

			typeList.unshift({ id: 0, title: 'Task Type' });
			priorityList.unshift({ id: 0, title: 'Task Priority' });

			this.setState({ isLoading: false, lists: { typeList, priorityList } });
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
