export type Game = {
	id: string;
	title: string;
	thumbnail: string;
	short_description: string;
	game_url: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
};

export type ErrorData = {
	status: number;
	data: Object;
};

export type GamePicture = {
	id: number;
	image: string;
};

export interface IButton {
	id?: string;
	valueText: string;
	route: string;
}