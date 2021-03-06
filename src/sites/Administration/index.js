import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import Title from 'components/UI/Title';
import Content from 'components/UI/Content';

import AdministrationGeneral from './sub/General';
import AdministrationAnnouncement from './sub/Announcement';

const SitesAdministration = () => {
	return (
		<div className="SitesAdministration">
			<Content>
				<Title title="Administration" />
				<div className="row">
					<div className="col-12 col-xl-2">
						<div
							className="nav nav-pills flex-column p-2"
							role="tablist"
							aria-orientation="vertical"
						>
							<NavLink exact to="/administration" className="nav-link" activeClassName="active">
								General
							</NavLink>
							<NavLink
								to="/administration/announcement"
								className="nav-link"
								activeClassName="active"
							>
								Announcements
							</NavLink>
						</div>
					</div>
					<div className="col-12 col-xl-10 mt-3 mt-xl-0">
						<Switch>
							<Route exact path="/administration" component={AdministrationGeneral} />
							<Route path="/administration/announcement" component={AdministrationAnnouncement} />
						</Switch>
					</div>
				</div>
			</Content>
		</div>
	);
};

export default SitesAdministration;
