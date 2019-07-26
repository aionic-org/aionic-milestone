import React, { Component } from 'react';

import Api from 'services/api';

class GitHubAuthenticate extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showInput: false,
			token: null
		};
	}

	doAuth = () => {
		Api.fetchData('auth/github').then((url) => {
			// eslint-disable-next-line no-undef
			window.open(url, '_blank');

			this.setState({
				showInput: true
			});
		});
	};

	handleInputChange = (e) => {
		this.setState({
			token: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		const { showInput, token } = this.state;

		console.log(token);

		return (
			<div className="GitHubAuthenticate">
				<form onSubmit={this.handleSubmit}>
					<button type="button" className="btn btn-primary" onClick={this.doAuth}>
						GitHub Auth <i className="fab fa-github ml-1" />
					</button>

					{showInput ? (
						<div className="input-group mt-2">
							<input
								type="text"
								name="token"
								className="form-control"
								placeholder="Enter token"
								onChange={this.handleInputChange}
							/>
							<div className="input-group-append">
								<button className="btn btn-secondary" type="submit">
									Send
								</button>
							</div>
						</div>
					) : null}
				</form>
			</div>
		);
	}
}

export default GitHubAuthenticate;
