import React, { Component } from 'react';

import { Api, Spinner } from 'aionic-shared';

import Error from 'components/UI/Error';

import TaskDashboard from 'components/Task/Dashboard/';

class SearchDashboardTaskContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			msg: null,
			searchResult: []
		};
	}

	componentDidMount = () => {
		const { searchParams } = this.props;

		const searchParamsKeys = Object.keys(searchParams);

		for (const key of searchParamsKeys) {
			if (searchParams[key].length) {
				this.doSearch();
				break;
			}
		}
	};

	componentDidUpdate = (prevProps) => {
		if (JSON.stringify(this.props.searchParams) !== JSON.stringify(prevProps.searchParams)) {
			this.doSearch();
		}
	};

	doSearch = async () => {
		try {
			const { searchParams } = this.props;

			this.setState({
				isLoading: true
			});

			const searchResult = await Api.fetchData(`tasks`, searchParams);

			this.setState({ isLoading: false, searchResult });
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err)
			});
		}
	};

	render() {
		const { isLoading, msg, searchResult } = this.state;

		if (isLoading) {
			return <Spinner />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="SearchDashboardTaskContainer">
				<TaskDashboard taskList={searchResult} showStatusFilters={false} itemsPerRow={1} />
			</div>
		);
	}
}

export default SearchDashboardTaskContainer;
