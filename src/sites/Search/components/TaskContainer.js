import React, { Component } from 'react';

import { Api, Error } from 'aionic-library';

import Deck from '../../../components/Deck';

import SearchLoader from './Loader';

class SearchTaskContainer extends Component {
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
			if (searchParams[key] && searchParams[key].length) {
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

			if (Object.keys(searchParams).length) {
				this.setState({
					isLoading: true
				});

				const searchResult = await Api.fetchData(`tasks`, searchParams);

				this.setState({ isLoading: false, searchResult });
			} else {
				this.setState({ searchResult: [] });
			}
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
			return <SearchLoader />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="SearchTaskContainer">
				<Deck itemList={searchResult} deckType="task" itemsPerRow={1} showItemsNumber={true} />
			</div>
		);
	}
}

export default SearchTaskContainer;
