import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="NotFound">
			<h3 className="text-center font-weight-bold">Page not found</h3>
			<p className="text-center text-muted mt-3 mb-0">You strayed from the right path.</p>
			<Link to="/" className="d-block text-center">
				<i className="fas fa-caret-left" /> back to the roots
			</Link>
		</div>
	);
};

export default NotFound;
