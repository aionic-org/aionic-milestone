import React from 'react';

import Fetcher from 'components/Utility/Fetcher';

import AnnouncementList from '.';

const AnnouncementListContainer = () => (
	<Fetcher url="announcements" showSpinnerPadding={true}>
		{(announcements) => {
			return (
				<div className="AnnouncementListContainer">
					<p>Announcements</p>
					<AnnouncementList announcementList={announcements} />
				</div>
			);
		}}
	</Fetcher>
);

export default AnnouncementListContainer;
