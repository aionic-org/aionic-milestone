import React from 'react';

import { InputSelect } from 'aionic-library';

import Helper from '../../services/helper';

const FiltersComplete = ({ completeStatus, name, classes, onChange }) => (
	<div className="FiltersComplete">
		<InputSelect
			name={name}
			classes={classes}
			onChange={onChange}
			optionList={completeStatus}
			showDefault={false}
		/>
	</div>
);

FiltersComplete.defaultProps = {
	completeStatus: Helper.getFilterLists('completeStatus'),
	name: 'completed',
	classes: []
};

export default FiltersComplete;
