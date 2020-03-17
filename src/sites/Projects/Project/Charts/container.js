import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Api, Spinner, Error } from 'aionic-library';

import SitesProjectCharts from '.';

class SitesProjectChartsContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: null,
			project: {}
		};
	}

	componentDidMount = async () => {
		try {
			const projectId = this.props.match.params.id;
			const project = await Api.fetchData(`projects/${projectId}`);

			if (project) {
				this.setState({ isLoading: false, project });
			} else {
				this.setState({ isLoading: false, msg: 'Resource not found!' });
			}
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err)
			});
		}
	};

	render() {
		const { isLoading, msg, project } = this.state;

		if (isLoading) {
			return <Spinner />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="SitesProjectChartsContainer">
				<SitesProjectCharts project={project} />
			</div>
		);
	}
}

export default withRouter(SitesProjectChartsContainer);
