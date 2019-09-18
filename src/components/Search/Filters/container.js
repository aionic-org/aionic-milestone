import React, { Component } from 'react';

import { Api, Spinner, Error } from 'aionic-library';

import TaskFilter from '.';

class SearchFiltersContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: null,
			lists: {
				userList: [],
				statusList: [],
				orgList: []
			}
		};
	}

	componentDidMount = () => {
		const requests = [
			Api.fetchData('users'),
			Api.fetchData('task-status'),
			Api.fetchData('git/organization')
		];

		Promise.all(requests)
			.then((res) => {
				this.setState({
					isLoading: false,
					lists: {
						userList: res[0],
						statusList: res[1],
						orgList: res[2]
					}
				});
			})
			.catch((err) => {
				this.setState({ isLoading: false, msg: Api.handleHttpError(err) });
			});
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
			<div className="SearchFiltersContainer">
				<TaskFilter lists={lists} {...this.props} />
			</div>
		);
	}
}

export default SearchFiltersContainer;
