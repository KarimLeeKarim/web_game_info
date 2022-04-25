import React, { ReactElement, useEffect } from 'react';
import { getFullListData } from '../../store/slices/getFullListGameSlice';
import { useAppDispatch } from '../../store/store';
import { GameListRender } from './GameList.render';

export const GameListContainer = (): ReactElement => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getFullListData());
	}, []);

	return <GameListRender />;
};
