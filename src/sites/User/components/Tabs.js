import React, { Component } from 'react';

import { Pills } from 'aionic-library';

import UserTaskDashboardContainer from 'components/User/Task/Dashboard/container';

class SitesUserTabsContent extends Component {
	constructor(props) {
		super(props);

		this.state = { tab: '' };
	}

	handleClick = (clickedTab) => {
		if (clickedTab) {
			this.setState({ tab: clickedTab });
		} else {
			this.setState({ tab: null });
		}
	};

	render() {
		const { tab } = this.state;
		const { user } = this.props;

		let content = null;

		switch (tab) {
			case 'Dashboard':
				content = <UserTaskDashboardContainer user={user} showTitle={false} />;
				break;
			default:
				break;
		}

		const tabs = [{ name: 'Dashboard' }];

		return (
			<div className="SitesUserTabs">
				<div className="row">
					<div className="col-12">
						<Pills tabs={tabs} handleClick={this.handleClick} />
						<div className={`SitesUserTabContent ${content ? 'mt-3' : ''}`}>{content}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SitesUserTabsContent;
