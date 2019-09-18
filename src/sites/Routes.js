import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Session, Footer } from 'aionic-library';

import Navbar from 'components/Navigation/Navbar/';
import Sidebar from 'components/Navigation/Sidebar';

import SitesSignin from './Signin';

import SitesHome from './Home';
import SitesTaskContainer from './Task/container';
import SitesSearch from './Search';
import SitesAdministration from './Administration';
import SitesProjectsContainer from './Projects/container';
import SitesProjectContainer from './Projects/Project/container';
import SitesProjectKanbanContainer from './Projects/Project/Kanban/container';
import SitesBoardsContainer from './Boards/container';
import SitesBoardContainer from './Boards/Board/container';
import SitesUserContainer from './User/container';

import NotFound from './NotFound';

const Routes = (props) => {
	const AuthContainer = () => (
		<div className="authentication">
			<Route path="/signin" component={SitesSignin} />
		</div>
	);

	const DefaultContainer = () => (
		<div className="d-flex" id="wrapper">
			<Sidebar />

			<div id="page-content-wrapper">
				<Navbar toggleSidebar={props.toggleSidebar} />

				<div className="container-fluid">
					<Switch>
						<Route exact path="/" component={SitesHome} />
						<Route
							path="/signout"
							render={() => {
								Session.clearUser();
								return <Redirect to="/signin" />;
							}}
						/>
						<Route exact path="/tasks" component={SitesTaskContainer} />
						<Route exact path="/tasks/:id" component={SitesTaskContainer} />
						<Route exact path="/search" component={SitesSearch} />
						<Route path="/search/:searchTerm" component={SitesSearch} />
						<Route path="/administration" component={SitesAdministration} />
						<Route exact path="/projects" component={SitesProjectsContainer} />
						<Route exact path="/projects/:id" component={SitesProjectContainer} />
						<Route exact path="/projects/:id/kanban" component={SitesProjectKanbanContainer} />
						<Route exact path="/boards" component={SitesBoardsContainer} />
						<Route exact path="/boards/:id" component={SitesBoardContainer} />
						<Route exact path="/users/:id" component={SitesUserContainer} />
						<Route exact path="*" component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</div>
		</div>
	);

	return (
		<Switch>
			<Route path="(/signin|/register.*)" component={AuthContainer} />
			<Route
				render={() => (Session.isLoggedIn() ? <DefaultContainer /> : <Redirect to="/signin" />)}
			/>
		</Switch>
	);
};

export default Routes;
