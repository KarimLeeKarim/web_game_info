import React, { ReactElement } from 'react';
import { Game } from '../../types';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../store/store';

interface Props {
	err?: string;
	games: Game[];
}

export const GameListRender = (): ReactElement => {
	const { data, isError, isErrorData } = useTypedSelector(state => state.getFullListGameSlice);

	if (isError) {
		return <p>{isErrorData.data.message}</p>;
	}
	if (!data?.length) {
		return <p>Loading...</p>;
	}
	return (
		<ul>
			{data.map((game: any) => (
				<Link to={`game/${game.id}`} key={game.id}>
					<img alt={game.title + ' logo'} src={game.thumbnail} />
					<h2>Title: {game.title}</h2>
					<h2>Description: {game.short_description}</h2>
					<h2>Genre: {game.genre}</h2>
				</Link>
			))}
		</ul>
	);
	return <p>Salam</p>;
};
