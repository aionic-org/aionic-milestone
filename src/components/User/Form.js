import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Api, Spinner, Error } from 'aionic-shared';

import Helper from 'services/helper';

import UserSelectsRole from './Selects/Role';
import UserSelectsActive from './Selects/Active';

class UserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			msg: null,
			isLoading: true,
			user: {
				active: true
			},
			userRoles: []
		};
	}

	componentDidMount = async () => {
		try {
			const userRoles = await Api.fetchData('user-roles');
			this.setState({ isLoading: false, userRoles });
		} catch (err) {
			this.setState({ isLoading: false, msg: Api.handleHttpError(err) });
		}
	};

	handleInputChange = (e) => {
		Helper.updateObjectPropByEvent(this.state.user, e, (user) => {
			this.setState({ user });
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.createUser();
	};

	createUser = () => {
		const { user } = this.state;

		Api.postData(`users`, { user })
			.then((newUser) => {
				this.props.history.push(`/users/${newUser.id}`);
			})
			.catch((err) => {
				this.setState({ msg: Api.handleHttpError(err) });
			});
	};

	render() {
		const { isLoading, msg, userRoles } = this.state;

		if (isLoading) {
			return <Spinner />;
		}

		if (msg) {
			return (
				<div className="UserForm">
					<Error message={msg} />
				</div>
			);
		}
		return (
			<div className="UserForm">
				<form onSubmit={this.handleSubmit} method="POST">
					<div className="form-group">
						<label>Firstname</label>
						<input
							type="text"
							className="form-control"
							name="firstname"
							placeholder="Enter firstname"
							onChange={this.handleInputChange}
							required={true}
						/>
					</div>
					<div className="form-group">
						<label>Lastname</label>
						<input
							type="text"
							className="form-control"
							name="lastname"
							placeholder="Enter lastname"
							onChange={this.handleInputChange}
							required={true}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="text"
							className="form-control"
							name="email"
							placeholder="Enter email"
							onChange={this.handleInputChange}
							required={true}
							autoComplete="off"
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							name="password"
							placeholder="Enter password"
							onChange={this.handleInputChange}
							required={true}
							autoComplete="off"
						/>
					</div>
					<div className="form-group">
						<label>Role</label>
						<UserSelectsRole roleList={userRoles} onChange={this.handleInputChange} />
					</div>
					<div className="form-group">
						<label>Active</label>
						<UserSelectsActive defaultValue={true} onChange={this.handleInputChange} />
					</div>

					<button type="submit" className="btn btn-primary float-right">
						Create
					</button>
				</form>
			</div>
		);
	}
}

export default withRouter(UserForm);
