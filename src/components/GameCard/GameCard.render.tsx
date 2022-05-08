import React, { ReactElement } from 'react';
import { valueText } from '../../constants/constants';
import { useTypedSelector } from '../../store/store';
import { GamePicture } from '../../types';
import { Button } from '../Button/Button';
import { Loading } from '../Loading/Loading';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

	var settings = {
		className: 'gameCard-container__customSlick',
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
	};
	return (
		<div className="gameCard-container">
			<Slider {...settings}>
				{data?.screenshots?.map((element: GamePicture, index: number) => (
					<img className="slickImage" alt={data.title + ' logo'} src={element.image} key={index} />
				))}
			</Slider>
			<div className="gameCard-container__content">
				<h2 className="title">
					{valueText.title}: {data?.title}
				</h2>
				<p className="desc">
					{valueText.desc}: {data?.description}
				</p>
				<p className="url">
					{valueText.url}: <a target="_blank" href={`${data?.game_url}`}>{data?.game_url}</a>
				</p>
				<p className="release">
					{valueText.releaseDate}: {data?.release_date}
				</p>
				<Button valueText={valueText.backToMain} route={'toMain'} />
			</div>
		</div>
	);
};
