import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Api } from 'aionic-shared/js/';

import Spinner from 'components/UI/Spinner/';
import Feedback from 'components/UI/Feedback/';
import UserSuggestion from 'components/User/Suggestion';

const MiscShare = (props) => {
	const { endpoint } = props;

	const [userIDs, setUserIDs] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [msg, setMsg] = useState(null);
	const [valid, setValid] = useState(null);

	const updateUserIDs = (users) => {
		setUserIDs(users.map((user) => user.id));
	};

	const share = async () => {
		setIsLoading(true);

		try {
			await Api.postData(endpoint, { userIDs });
			setValid(true);
			setMsg(`Shared with ${userIDs.length} user(s)!`);
		} catch (err) {
			setValid(false);
			setMsg(Api.handleHttpError(err));
		}
		setIsLoading(false);
	};

	return (
		<div className="MiscShare">
			<div className="form-group">
				<label>Users</label>
				<UserSuggestion updateParent={updateUserIDs} />
				<Feedback valid={valid} message={msg} />
			</div>

			<button type="button" className="btn btn-primary btn-block" onClick={share}>
				{isLoading ? (
					<Spinner onBtn={true} />
				) : (
					<div>
						<i className="fas fa-share mr-2" />
						Share
					</div>
				)}
			</button>
		</div>
	);
};

export default withRouter(MiscShare);
