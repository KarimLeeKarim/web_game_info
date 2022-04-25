import React, { ReactElement } from "react";
import { Game } from "../../types";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../store/store";


interface Props {
    err? : string,
    games: Game[]
}

export const GameListRender = ({ err, games }:Props):ReactElement =>{
    // const {value} = useTypedSelector(state=> state.advertisementTabChangerSlice);
    if(err){
        return<p>Unable to fetch games</p>
    }
    if(!games?.length){
        return<p>Loading</p>
    }
    return (
    <ul>
        {games.map(game=>(
            <Link to={`game/${game.id}`} key={game.id}>
                <img alt={game.title + ' logo'} src={game.thumbnail}/>
                <h2>Title: {game.title}</h2>
                <h2>Description: {game.short_description}</h2>
                <h2>Genre: {game.genre}</h2>
            </Link>
        ))}
    </ul>
    )
}