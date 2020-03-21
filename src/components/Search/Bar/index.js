import React from 'react';
import { withRouter } from 'react-router-dom';

import TaskSearch from '../../Task/Search';

import './Bar.scss';

const SearchBar = (props) => {
	const { history } = props;

	const handleTaskSelect = (task) => {
		history.push(`/tasks/${task.id}`);
	};

	const handleSearchSubmit = (searchTerm) => {
		if (searchTerm.length) {
			history.push(`/search?term=${searchTerm}`);
		}
	};

	return (
		<div className="SearchBar">
			<div className="input-group">
				<TaskSearch
					handleTaskSelect={handleTaskSelect}
					handleSearchSubmit={handleSearchSubmit}
					placeholder="Search tasks"
				/>
				<div className="input-group-append">
					<button className="btn button button-violet" type="submit">
						<i className="fas fa-search fa-sm" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default withRouter(SearchBar);
