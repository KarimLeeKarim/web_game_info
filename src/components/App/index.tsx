import React, { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { GameCard } from "../GameCard";
import Home  from "../Home";

export const App = ():ReactElement =>(
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/game/:gameId" element={<GameCard />}/>
        </Routes>
    </Router>
) 