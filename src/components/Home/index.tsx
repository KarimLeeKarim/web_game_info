import React, { ReactElement } from "react";
import withErrorBoundary from "../../hoc/withErrorBoundary";
import GameListContainer from "../GameListFolder";

const Home = ():ReactElement =>(
    <GameListContainer/>
)

export default withErrorBoundary(Home); 

