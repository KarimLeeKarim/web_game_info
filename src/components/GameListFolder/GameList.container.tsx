import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { Game } from "../../types";
import { API_HOST, API_KEY } from "./constants";
import { GameListRender } from "./GameList.render";

export const GameListContainer = ():ReactElement =>{
    const [games, setGames] = useState<Game[]>([]);
    const [err, setErr] = useState<string>('');

    useEffect(()=>{
        axios.get(`https://${API_HOST}/api/games`, {
            headers:{
                'X-RapidAPI-Host' : API_HOST,
                'X-RapidAPI-Key' : API_KEY,
            },
            params: {
                platform: 'browser',
            }
        })
        .then(res=> {
            setGames(res.data)
        })
        .catch(err=>{
            setErr(err.message)})
    },[])

    return (
        <GameListRender err={err} games={games}/>
    )
}