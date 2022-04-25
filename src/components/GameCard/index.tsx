import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecifiedGame } from '../../store/slices/specifiedGameSlice';
import { useAppDispatch } from '../../store/store';
import { GameCardRender } from './GameCard.render';

export const GameCardContainer = (): ReactElement => {
	const { gameId } = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getSpecifiedGame(gameId));
	}, []);

	return <GameCardRender />;
};
