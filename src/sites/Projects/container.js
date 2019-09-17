import React, { Component } from 'react';

import { Api, Spinner, Error } from 'aionic-shared';

import SitesProjects from '.';

class SitesProjectsContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: null,
			projects: {
				all: [],
				fetched: [],
				filtered: []
			},
			filters: {
				params: {},
				text: ''
			}
		};
	}

	componentDidMount = () => {
		this.fetchProjects(null, true);
	};

	fetchProjects = async (_params, initial) => {
		try {
			const params = _params || this.state.filters.params;
			const projects = await Api.fetchData('projects', params);

			let newState = {
				isLoading: false,
				filters: { ...this.state.filters, params },
				projects: { ...this.state.projects, fetched: projects, filtered: [] }
			};

			if (initial) {
				newState = { ...newState, projects: { ...newState.projects, all: projects } };
			}

			this.setState(newState, () => {
				this.filterProjectsByText(this.state.filters.text);
			});
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err)
			});
		}
	};

	filterProjectsByParams = (params) => {
		const newParams = {
			...this.state.filters.params,
			...(!Object.keys(params).length ? {} : params)
		};

		this.fetchProjects(newParams);
	};

	filterProjectsByText = (text) => {
		this.setState((prevState) => {
			const filters = { ...prevState.filters, text };

			const projectsFiltered = text.length
				? prevState.projects.fetched.filter((projects) =>
						projects.title.toLowerCase().includes(text.toLowerCase())
				  )
				: prevState.projects.fetched;

			return { filters, projects: { ...prevState.projects, filtered: projectsFiltered } };
		});
	};

	resetFilters = () => {
		this.setState({ filters: { params: {}, text: '' } }, this.fetchProjects);
	};

	render() {
		const { isLoading, msg, projects, filters } = this.state;

		if (isLoading) {
			return <Spinner />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="SitesProjectsContainer">
				<SitesProjects
					projects={projects}
					filters={filters}
					filterProjectsByParams={this.filterProjectsByParams}
					filterProjectsByText={this.filterProjectsByText}
					resetFilters={this.resetFilters}
				/>
			</div>
		);
	}
}

export default SitesProjectsContainer;
