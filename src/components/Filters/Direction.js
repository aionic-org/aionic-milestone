import React from 'react';

import { InputSelect } from 'aionic-library';

import Helper from '../../services/helper';

const FiltersDirection = (props) => {
	const { onChange, name, classes } = props;

	const sortDirections = Helper.getFilterLists('sortDirections');

	return (
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
};

FiltersDirection.defaultProps = {
	name: 'orderdir',
	classes: []
};

export default FiltersDirection;
