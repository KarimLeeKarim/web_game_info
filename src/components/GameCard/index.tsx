import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";

export const GameCard: React.FC = ():ReactElement =>{
    const { gameId } = useParams();

      console.log(gameId);
    return (
        <div>
            <p>Name</p>
            <p>nese</p>
        </div>
    )
}