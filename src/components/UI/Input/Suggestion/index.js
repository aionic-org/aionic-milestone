import React, { Component } from 'react';

import './Suggestion.scss';

class InputSuggestion extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			matchList: [],
			showSuggestion: false
		};
	}

	handleInputChange = (e) => {
		const searchTerm = e.target.value.toLowerCase();

		if (searchTerm.length) {
			this.setState(
				{
					searchTerm
				},
				() => {
					const matchList = this.props.elementList.filter((element) =>
						element.text.toLowerCase().includes(this.state.searchTerm)
					);

					this.setState({
						matchList,
						showSuggestion: matchList.length
					});
				}
			);
		} else {
			this.setState({ showSuggestion: false });
		}
	};

	handleInputBlur = (e) => {
		if (!e.target.value.length) {
			this.setState({ showSuggestion: false });
			this.props.updateParent({ id: null, name: e.target.name });
		}
	};

	handleSelect = (e) => {
		const { target } = e;

		const newElement = {
			...this.props.elementList.filter((element) => element.id === Number(target.dataset.id))[0],
			name: this.props.name
		};

		// eslint-disable-next-line no-undef
		document.getElementsByName(this.props.name)[0].value = newElement.text;

		this.setState({ showSuggestion: false }, () => {
			this.props.updateParent(newElement);
		});
	};

	getDefaultValue = () => {
		const { defaultValue, elementList } = this.props;

		return defaultValue ? elementList.filter((element) => element.id === defaultValue)[0].text : '';
	};

	render() {
		const { matchList, showSuggestion } = this.state;
		const { name, placeholder } = this.props;

		const suggestion = showSuggestion ? (
			<div className="suggestionList">
				<ul className="list-group">
					{matchList.map((element) => (
						<li
							className="list-group-item list-group-item-action"
							key={element.id}
							data-id={element.id}
							onClick={this.handleSelect}
						>
							{element.text}
						</li>
					))}
				</ul>
			</div>
		) : null;

		return (
			<div className="InputSuggestion">
				<input
					type="text"
					className="form-control suggestionInput"
					name={name}
					placeholder={placeholder}
					autoComplete="off"
					onChange={this.handleInputChange}
					onBlur={this.handleInputBlur}
					defaultValue={this.getDefaultValue()}
					onKeyDown={(e) => {
						if (e.keyCode === 27) this.setState({ showSuggestion: false });
					}}
				/>
				{suggestion}
			</div>
		);
	}
}

InputSuggestion.defaultProps = {
	elementList: [],
	updateParent: () => {}
};

export default InputSuggestion;
