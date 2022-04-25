import { Game, ErrorData } from "../types";

export interface IInitialState {
    data: Game[];
    isError: boolean;
    isLoading: boolean;
    isErrorData: ErrorData;
}

