import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { GiChemicalArrow } from 'react-icons/gi';
import { IButton } from '../../types';

export const Button = ({ id = '/', valueText, route }: IButton): ReactElement => {
	return (
		<Link to={route === 'toCard' ? `game/${id}` : id} className="customBtn">
			{valueText}{' '}
			{route == 'toCard' ? (
				<GiChemicalArrow className="arrow" />
			) : (
				<GiChemicalArrow className="arrow-to-main" />
			)}
		</Link>
	);
};
