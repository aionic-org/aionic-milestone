import React from 'react';

import './Signin.scss';

import UILogo from 'components/UI/Logo';

import { SigninForm } from 'aionic-shared';

const SitesSignin = () => {
	const logoStyle = {
		height: '72px',
		width: '72px',
		marginBottom: '20px'
	};

	return (
		<div className="SitesSignin">
			<UILogo assignedStyle={logoStyle} />
			<h1 className="h3 mb-0">Milestone</h1>
			<p className="text-muted">Please sign in</p>
			<SigninForm />
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
};

export default SitesSignin;
