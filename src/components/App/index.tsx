import React, { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { GameCardContainer } from "../GameCard";
import { GameListContainer } from "../GameListFolder";

export const App = ():ReactElement =>(
    <Router>
        <Routes>
            <Route path="/" element={<GameListContainer />}/>
            <Route path="/game/:gameId" element={<GameCardContainer />}/>
        </Routes>
    </Router>
) 