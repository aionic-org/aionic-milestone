import React from 'react';

import './Widget.scss';

const Widget = (props) => {
	const { title, icon, iconBackground, iconColor } = props;

	return (
		<div className="Widget">
			<div className="border rounded shadow-sm">
				<i
					className={`${icon} w-100 fa-2x text-center py-4`}
					style={{ background: iconBackground, color: iconColor }}
				/>
				<div className="p-3 text-center font-weight-bold">
					<span>{title}</span>
				</div>
			</div>
		</div>
	);
};

Widget.defaultProps = {
	title: '',
	icon: '',
	iconColor: 'white'
};

export default Widget;
