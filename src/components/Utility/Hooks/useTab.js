import { useState } from 'react';

function useTab(initialTab) {
	const [tab, setTab] = useState(initialTab);

	const changeTab = (newTab) => {
		if (newTab) {
			setTab(newTab);
		} else {
			setTab(null);
		}
	};

	return [tab, changeTab];
}

export default useTab;
