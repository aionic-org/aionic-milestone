import React from 'react';
import { Link } from 'react-router-dom';

import './Suggestion.scss';

import Api from 'services/api';

import useSuggestion from 'components/Utility/Hooks/useSuggestion';

const TaskSuggestion = (props) => {
	const { taskListSelected, updateParent, multiSelect, autoClear, maxHeight, smallInput } = props;

	const inputID = `suggestion-input-${Math.random()
		.toString(36)
		.substring(7)}`;

	const autoClearOnSelect = multiSelect ? true : autoClear;

	const [
		itemList,
		itemListSelected,
		setItemList,
		showSuggestion,
		setShowSuggestion,
		handleSelect,
		handleRemove
	] = useSuggestion(taskListSelected, updateParent, autoClearOnSelect, inputID);

	const handleInputChange = async (e) => {
		try {
			const searchTerm = e.target.value;

			if (searchTerm.length) {
				const itemListFiltered = await Api.fetchData('tasks', { title: searchTerm });

				setItemList(itemListFiltered);
				setShowSuggestion(itemListFiltered.length);
			} else {
				setShowSuggestion(false);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const suggestion = showSuggestion ? (
		<div className="suggestionList">
			<ul className="list-group">
				{itemList.map((task) => (
					<li
						className="list-group-item list-group-item-action"
						key={task.id}
						data-id={task.id}
						data-displayname={task.title}
						onClick={handleSelect}
					>
						<div className="row" data-id={task.id}>
							<div className="col-7">{task.title}</div>
							<div className="col-5">
								<span className="text-muted float-right">
									{task.author ? `${task.author.firstname} ${task.author.lastname}` : null}
									<Link
										className="fas fa-external-link-square-alt ml-2 fa-sm"
										to={`/tasks/${task.id}`}
									/>
								</span>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	) : null;

	const selected =
		multiSelect && itemListSelected.length ? (
			<div
				className={`selectedList ${maxHeight ? 'max-height' : ``}`}
				style={{ opacity: showSuggestion ? 0.3 : 1 }}
			>
				<ul className="list-group">
					{itemListSelected.map((task) => (
						<li className="list-group-item list-group-item-action" key={task.id}>
							<div className="row">
								<div className="col-9">{task.title}</div>
								<div className="col-3">
									<small className="float-right mt-1">
										<Link
											className="fas fa-external-link-square-alt ml-2 fa-sm"
											to={`/tasks/${task.id}`}
										/>
										<i className="fas fa-times ml-2" data-id={task.id} onClick={handleRemove} />
									</small>
								</div>
							</div>
							<small className="text-muted">
								{task.author ? `${task.author.firstname} ${task.author.lastname}` : null}
							</small>
						</li>
					))}
				</ul>
				<span className="text-muted mt-2 d-block text-center">
					Total: {itemListSelected.length}
				</span>
			</div>
		) : null;

	return (
		<div className="TaskSuggestion">
			<input
				type="text"
				className={`form-control ${smallInput ? 'form-control-sm' : ''}`}
				name="title"
				placeholder="Enter task title..."
				autoComplete="off"
				onChange={handleInputChange}
				onKeyDown={(e) => {
					if (e.keyCode === 27) setShowSuggestion(false);
				}}
				id={inputID}
			/>
			{suggestion}
			{selected}
		</div>
	);
};

TaskSuggestion.defaultProps = {
	taskListSelected: [],
	updateParent: () => {},
	multiSelect: true,
	autoClear: false,
	maxHeight: false,
	smallInput: false
};

export default TaskSuggestion;
