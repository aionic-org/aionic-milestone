import React from 'react';

import { InputSelect } from 'aionic-library';

import Helper from '../../services/helper';

const FiltersResults = ({ resultLimits, name, classes, onChange }) => (
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

FiltersResults.defaultProps = {
	resultLimits: Helper.getFilterLists('resultLimits'),
	name: 'limit',
	classes: []
};

export default FiltersResults;
