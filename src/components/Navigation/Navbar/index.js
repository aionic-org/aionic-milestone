import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Session } from 'aionic-library';

import SearchBar from '../../Search/Bar';

import './Navbar.scss';

const Navbar = (props) => {
	const { toggleSidebar } = props;

	const searchbarClasses = ['form-inline', 'mt-3', 'mt-md-0'];

	const toggleFullscreen = () => {
		if (
			!document.fullscreenElement &&
			!document.mozFullScreenElement &&
			!document.webkitFullscreenElement
		) {
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container">
				<NavLink exact={true} to="/" className="navbar-brand">
					Aionic Milestone
				</NavLink>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink exact={true} to="/" className="nav-link">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact={true} to="/projects" className="nav-link">
								Projects
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact={true} to="/boards" className="nav-link">
								Boards
							</NavLink>
						</li>

						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								More
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link exact="true" to="/search" className="dropdown-item">
									<i className="fas fa-search fa-fw mr-2" />
									Search
								</Link>
								<div className="dropdown-divider" />
								<h6 className="dropdown-header">Plugins</h6>
								<Link to="/plugins/github" className="dropdown-item">
									<i className="fab fa-github fa-fw mr-2" />
									GitHub
								</Link>
								<Link to="/plugins/gitlab" className="dropdown-item">
									<i className="fab fa-gitlab fa-fw mr-2" />
									GitLab
								</Link>
							</div>
						</li>
					</ul>
					<SearchBar assignedClasses={searchbarClasses} />

					<ul className="navbar-nav ml-auto">
						<li className="nav-item dropdown">
							<button
								type="button"
								className="btn btn-link nav-link dropdown-toggle font-weight-bold"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i className="fas fa-plus" /> Create
							</button>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown07">
								<Link to="/boards?create=true" className="dropdown-item">
									<i className="fas fa-chalkboard-teacher mr-2" />
									Create Board
								</Link>
								<Link to="/tasks" className="dropdown-item">
									<i className="fas fa-tasks fa-fw mr-2" />
									Create Task
								</Link>
								<Link to="/projects?create=true" className="dropdown-item">
									<i className="fas fa-table fa-fw mr-2" />
									Create Project
								</Link>
							</div>
						</li>

						<li className="nav-item dropdown">
							<button
								type="button"
								className="btn btn-link nav-link dropdown-toggle font-weight-bold"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i className="fas fa-user-circle" /> {Session.getUser().firstname}
							</button>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown07">
								<div className="dropdown-header">
									{`${Session.getUser().firstname} ${Session.getUser().lastname}`}
								</div>
								{Session.isAdmin() ? (
									<Link to="/administration" className="dropdown-item">
										<i className="fas fa-wrench fa-fw mr-2" />
										Administration
									</Link>
								) : null}
								<button type="button" className="btn dropdown-item" onClick={toggleFullscreen}>
									<i className="fas fa-compress fa-fw mr-2" /> Toggle Fullscreen
								</button>
								<div className="dropdown-divider" />
								<Link to="/signout" className="dropdown-item text-danger">
									<i className="fas fa-sign-out-alt fa-fw mr-2" /> Signout
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
