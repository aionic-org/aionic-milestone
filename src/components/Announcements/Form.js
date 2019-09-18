import React, { Component } from 'react';

import { Api, Session, Spinner } from 'aionic-library';

import Helper from 'services/helper';

class AnnouncementsForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			announcement: { author: Session.getUser(), description: '' },
			isLoading: false,
			msg: '',
			status: ''
		};
	}

	handleInputChange = (e) => {
		Helper.updateObjectPropByEvent(this.state.announcement, e, (announcement) => {
			this.setState({
				announcement,
				msg: '',
				status: ''
			});
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		if (this.state.announcement.description.length) {
			this.setState({
				isLoading: true
			});

			Api.postData('announcements', { announcement: this.state.announcement })
				.then((res) => {
					this.setState({ isLoading: false, status: '' });
					this.props.addParentAnnouncement(res);
				})
				.catch((err) => {
					this.setState({
						isLoading: false,
						status: 'is-invalid',
						msg: Api.handleHttpError(err)
					});
				});
		}
	};

	render() {
		const { isLoading, msg, status } = this.state;
		return (
			<div className="AnnouncementsForm">
				<form onSubmit={this.handleSubmit}>
					<label>Make new announcement</label>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<input
									id="test"
									type="checkbox"
									className="mr-1"
									name="important"
									onChange={this.handleInputChange}
								/>
								Important
							</div>
						</div>
						<input
							type="text"
							name="description"
							className={`form-control ${status}`}
							onChange={this.handleInputChange}
							placeholder="Enter announcement"
							autoComplete="off"
						/>
						<div className="input-group-append">
							<button type="button" className="btn btn-primary">
								{isLoading ? <Spinner onBtn={true} /> : 'Submit'}
							</button>
						</div>
						<div className="invalid-feedback">{msg}</div>
					</div>
				</form>
			</div>
		);
	}
}

AnnouncementsForm.defaultProps = {
	updateParent: () => {}
};

export default AnnouncementsForm;
