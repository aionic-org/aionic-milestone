import React from 'react';

import { InputSelect } from 'aionic-library';

import Helper from '../../services/helper';

const FiltersResults = (props) => {
	const { onChange, name, classes } = props;

	const resultLimits = Helper.getFilterLists('resultLimits');

	return (
		<div className="FiltersResults">
			<InputSelect
				name={name}
				classes={classes}
				onChange={onChange}
				optionList={resultLimits}
				showDefault={false}
			/>
		</div>
	);
};

FiltersResults.defaultProps = {
	name: 'limit',
	classes: []
};

export default FiltersResults;
