import React, { ReactElement } from 'react';
import { valueText } from '../../constants/constants';
import { truncateWords } from '../../helpers/utils';
import { useTypedSelector } from '../../store/store';
import { Game } from '../../types';
import { Loading } from '../Loading/Loading';
import { DiWindows } from 'react-icons/di';
import { HiDesktopComputer } from 'react-icons/hi';
import { Button } from '../Button/Button';

export const GameListRender = (): ReactElement => {
	const { data, isError, isErrorData, isLoading } = useTypedSelector(
		state => state.getFullListGameSlice,
	);

	const windowFunc = () => <DiWindows className="platform1" />;

	const desctopFunc = () => <HiDesktopComputer className="platform2" />;

	const determinantPlatform: any = {
		'PC (Windows)': windowFunc(),
		'Web Browser': desctopFunc(),
	};

	const icons = (platform: string) => {
		return platform.split(',').map((p: string) => {
			return determinantPlatform[p.trim()];
		});
	};

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
					<img alt={game.title + ' logo'} src={game.thumbnail} className="content__info__images" />
					<div className="content__info">
						<div className="text__content">
							<h3 className="text__content__title">{game.title}</h3>
							<p className="text__content__description">
								{valueText.desc}: {truncateWords<string, number>(game.short_description, 10, '...')}
							</p>
						</div>
						<div className="content__platform">
							<div className="genre_platform">
								<p className="genre">{game.genre}</p>
								<p className="platform">{icons(game.platform)}</p>
							</div>
							<Button id={game.id} valueText={valueText.detailedInfo} route={'toCard'}/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
