import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../store/store';
import { Game } from '../../types';
import { Loading } from '../Loading/Loading';

export const GameListRender = (): ReactElement => {
	const { data, isError, isErrorData, isLoading } = useTypedSelector(
		state => state.getFullListGameSlice,
	);

	if (isError) {
		return <p>{isErrorData.data.message}</p>;
	}
	if (isLoading) {
		return <Loading />;
	}
	return (
		<div className="container">
			{data?.map((game: Game) => (
				<div className="content" key={game.id}>
					<Link to={`game/${game.id}`}>
						<img alt={game.title + ' logo'} src={game.thumbnail} className="content__images" />
						<div className="content__info">
							<h2 className="content__info__title">Title: {game.title}</h2>
							<h2 className="content__info__description">Description: {game.short_description}</h2>
							<h2 className="content__info__genre">Genre: {game.genre}</h2>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};
