import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Game } from "../../types";

interface Props {
    content : Game
};

export const GameList = ({content}: Props): ReactElement =>{
    const {id, title, thumbnail, short_description, genre } = content;    

    const link = `game/${id}`;

    return (
        <Link to={link}>
            <img alt={title + ' logo'} src={thumbnail}/>
            <h2>Title: {title}</h2>
            <h2>Description: {short_description}</h2>
            <h2>Genre: {genre}</h2>
        </Link>
    )
}