import React, { ReactElement } from 'react';

export const Loading = (): ReactElement => {
	return (
		<div className="loading">
			<span className="dot"></span>
			<div className="dots">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};
