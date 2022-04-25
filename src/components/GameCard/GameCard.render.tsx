import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../store/store';
import { GamePicture } from '../../types';
import { Loading } from '../Loading/Loading';

export const GameCardRender = (): ReactElement => {
	const { data, isError, isErrorData, isLoading } = useTypedSelector(
		state => state.specifiedGameSlice,
	);

	if (isError) {
		return <p>{isErrorData.data.message}</p>;
	}
	if (isLoading) {
		return <Loading />;
	}

	return (
		<div>
			{data?.screenshots?.map((element: GamePicture, index: number) => (
				<img
					style={{ width: '400px' }}
					alt={data.title + ' logo'}
					src={element.image}
					key={index}
				/>
			))}
			<h2>Title: {data?.title}</h2>
			<h2>Description: {data?.description}</h2>
			<button>
				<Link to={'/'}>Main Page</Link>
			</button>
		</div>
	);
};
