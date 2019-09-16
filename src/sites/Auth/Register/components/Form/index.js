import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import queryString from 'query-string';

import './Form.scss';

import { Api, Session, Spinner } from 'aionic-shared';

class RegisterForm extends Component {
	constructor(props) {
		super(props);

		this.state = { user: { email: this.props.match.params.email }, isLoading: false, msg: '' };
	}

	handleInputChange = (e) => {
		const { name } = e.target;
		const { value } = e.target;

		this.setState((prevState) => {
			return { user: { ...prevState.user, [name]: value } };
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({
			isLoading: true
		});

		Session.registerUser({ user: this.state.user }, this.props.match.params.hash)
			.then((res) => {
				Session.clearUser();
				Session.setToken(res.token);
				Session.setUser(res.user);
				this.props.history.push('/');
			})
			.catch((err) => {
				this.setState({
					isLoading: false,
					msg: Api.handleHttpError(err)
				});
			});
	};

	render() {
		const { email } = queryString.parse(this.props.location.search);
		const { isLoading, msg } = this.state;

		return (
			<div className="RegisterForm">
				<form className="sigin-form" onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="firstname"
						className="form-control"
						placeholder="Firstname"
						onChange={this.handleInputChange}
						required
					/>

					<input
						type="email"
						name="email"
						className="form-control"
						placeholder="Email address"
						onChange={this.handleInputChange}
						defaultValue={email}
						autoComplete="off"
						required
					/>

					<input
						type="text"
						name="lastname"
						className="form-control"
						placeholder="Lastname"
						onChange={this.handleInputChange}
						required
					/>

					<input
						type="password"
						name="password"
						className="form-control"
						placeholder="Password"
						onChange={this.handleInputChange}
						autoComplete="off"
						required
					/>

					<button className="btn btn-lg btn-primary btn-block mt-3" type="submit">
						{isLoading ? (
							<Spinner onBtn={true} />
						) : (
							<div>
								<i className="fas fa-sign-in-alt" /> Register
							</div>
						)}
					</button>

					{msg.length ? <p className="mt-3 text-danger">{msg}</p> : null}
				</form>
			</div>
		);
	}
}

export default withRouter(RegisterForm);
