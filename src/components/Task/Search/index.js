import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Api } from 'aionic-library';

import './Search.scss';

const TaskSearch = (props) => {
	const { updateParent, handleTaskSelect, handleSearchSubmit, placeholder } = props;

	const [tasks, setTasks] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [activeResult, setActiveResult] = useState(-1);

	const inputID = `task-search-input-${Math.random()
		.toString(36)
		.substring(7)}`;

	const handleInputChange = async (e) => {
		const searchTerm = e.target.value;

		console.log(e.which);
		e.preventDefault();

		switch (e.which) {
			// ENTER
			case 13:
				e.preventDefault();
				if (activeResult >= 0) {
					handleTaskSelect(tasks[activeResult]);
				} else if (searchTerm.length) {
					handleSearchSubmit(searchTerm);
				}
				break;
			// ESCAPE
			case 27:
				setShowResults(false);
				break;
			// UP
			case 38:
				setActiveResult(activeResult <= 0 ? tasks.length - 1 : activeResult - 1);
				break;

			// DOWN
			case 40:
				setActiveResult(activeResult < tasks.length - 1 ? activeResult + 1 : 0);
				break;
			default:
				if (searchTerm.length) {
					try {
						const itemListFiltered = await Api.fetchData('tasks', {
							title: searchTerm,
							completed: false
						});

						setTasks(itemListFiltered);
						setActiveResult(-1);
						setShowResults(itemListFiltered.length);
					} catch (err) {
						console.log(err);
					}
				} else {
					setTasks([]);
					setActiveResult(-1);
					setShowResults(false);
				}
				updateParent(searchTerm);
				break;
		}
	};

	const results = showResults ? (
		<div className="results">
			<ul className="list-group">
				{tasks.map((task, i) => (
					<li
						className={`list-group-item ${i === activeResult ? 'selected' : ''}`}
						key={task.id}
						data-id={task.id}
						data-displayname={task.title}
					>
						<Link
							to={`/tasks/${task.id}`}
							onClick={() => {
								setShowResults(false);
							}}
						>
							{task.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	) : null;

	return (
		<div className="TaskSearch">
			<input
				type="text"
				className="form-control"
				placeholder={placeholder}
				autoComplete="off"
				onKeyUp={handleInputChange}
				id={inputID}
			/>
			{results}
		</div>
	);
};

TaskSearch.defaultProps = {
	updateParent: () => {},
	placeholder: 'Enter task title'
};

export default TaskSearch;
