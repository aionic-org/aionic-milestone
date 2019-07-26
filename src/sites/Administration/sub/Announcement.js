import React from 'react';

import useFetcher from 'components/Utility/Hooks/useFetcher';

import Error from 'components/UI/Error';
import Spinner from 'components/UI/Spinner';

import AnnouncementForm from 'components/Announcements/Form';
import AnnouncementsTable from 'components/Announcements/Table';

const AdministrationAnnouncement = () => {
	const [announcements, isLoading, error, setAnnouncements] = useFetcher('announcements');

	const addAnnouncement = (announcement) => {
		const announcementsCopy = announcements.slice();
		announcementsCopy.push(announcement);

		setAnnouncements(announcementsCopy);
	};

	const removeAnnouncement = (id) => {
		const newAnnouncements = announcements.slice().filter((announcement) => announcement.id !== id);
		setAnnouncements(newAnnouncements);
	};

	if (isLoading) {
		return <Spinner />;
	}

	if (error) {
		return <Error message={error} />;
	}

	return (
		<div className="AdministrationAnnouncement">
			<AnnouncementForm addParentAnnouncement={addAnnouncement} />
			<hr className="featurette-divider" />
			<AnnouncementsTable
				announcements={announcements}
				removeParentAnnouncement={removeAnnouncement}
			/>
		</div>
	);
};

export default AdministrationAnnouncement;
