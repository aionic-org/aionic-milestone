import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log(error, info);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="text-center mt-5">
					<h1>Oooppsyy!</h1>
					<p>This was not planned</p>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
