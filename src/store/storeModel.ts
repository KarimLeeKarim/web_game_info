import { Game, ErrorData } from "../types";

export interface IGetFullListGameSlice {
    data: Game[];
    isError: boolean;
    isLoading: boolean;
    isErrorData: ErrorData;
}