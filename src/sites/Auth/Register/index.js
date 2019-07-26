import React, { Component } from 'react';

import './Register.scss';

import Api from 'services/api';

import Logo from 'components/UI/Logo';

import RegisterForm from './components/Form';

class SitesRegister extends Component {
	componentDidMount = () => {
		// validate register hash
		Api.fetchData(`auth/register/${this.props.match.params.hash}`)
			.then(() => {})
			.catch(() => {
				this.props.history.push('/signin');
			});
	};

	render() {
		const logoStyle = {
			height: '72px',
			width: '72px',
			marginBottom: '20px'
		};

		return (
			<div className="SitesRegister">
				<Logo assignedStyle={logoStyle} />
				<h1 className="h4 mb-3 font-weight-normal">Registration</h1>
				<RegisterForm />
				<a
					href="https://aionic-apps.com"
					target="_blank"
					rel="noopener noreferrer"
					className="mt-4 text-muted d-block"
				>
					Aionic Apps
				</a>
			</div>
		);
	}
}

export default SitesRegister;
