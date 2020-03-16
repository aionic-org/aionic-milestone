import React from 'react';

import { InputSelect } from 'aionic-library';

import Helper from '../../services/helper';

const FiltersComplete = (props) => {
	const { onChange, name, classes } = props;

	const completeStatus = Helper.getFilterLists('completeStatus');

	return (
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
};

FiltersComplete.defaultProps = {
	name: 'completed',
	classes: []
};

export default FiltersComplete;
