import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ReactModal from 'react-modal';

import ErrorBoundary from 'components/Utility/ErrorBoundary';

import Routes from './sites/Routes';

class App extends Component {
	componentDidMount = () => {
		ReactModal.setAppElement('body');
	};

	render() {
		return (
			<ErrorBoundary>
				<BrowserRouter>
					<div id="App">
						<Switch>
							<Routes />
						</Switch>
					</div>
				</BrowserRouter>
			</ErrorBoundary>
		);
	}
}

export default App;
