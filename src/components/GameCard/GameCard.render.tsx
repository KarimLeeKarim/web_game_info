import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { valueText } from '../../constants/constants';
import { useTypedSelector } from '../../store/store';
import { GamePicture } from '../../types';
import { Button } from '../Button/Button';
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
			<p>
				{valueText.title}: {data?.title}
			</p>
			<p>
				{valueText.desc}: {data?.description}
			</p>
			<p>
				{valueText.genre}: {data?.genre}
			</p>
			<p>
				{valueText.releaseDate}: {data?.release_date}
			</p>
			<Button valueText={valueText.backToMain} route={'toMain'} />
		</div>
	);
};
