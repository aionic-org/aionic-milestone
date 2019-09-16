import { useState, useEffect } from 'react';

import { Api } from 'aionic-shared/js/';

function useFetcher(url) {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setError(null);
				setIsLoading(true);

				const result = await Api.fetchData(url);
				setData(result);
				setIsLoading(false);
			} catch (err) {
				setError(Api.handleHttpError(err));
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	return [data, isLoading, error, setData];
}

export default useFetcher;
