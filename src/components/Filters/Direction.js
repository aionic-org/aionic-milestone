import React from 'react';

import { InputSelect } from 'aionic-library';

import Helper from '../../services/helper';

const FiltersDirection = ({ sortDirections, name, classes, onChange }) => (
	<div className="FiltersDirection">
		<InputSelect
			name={name}
			classes={classes}
			onChange={onChange}
			optionList={sortDirections}
			showDefault={false}
		/>
	</div>
);

FiltersDirection.defaultProps = {
	sortDirections: Helper.getFilterLists('sortDirections'),
	name: 'orderdir',
	classes: []
};

export default FiltersDirection;
