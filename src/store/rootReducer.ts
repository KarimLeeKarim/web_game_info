import { combineReducers } from '@reduxjs/toolkit'
import getFullListGameSlice from './slices/getFullListGameSlice';
import specifiedGameSlice from './slices/specifiedGameSlice';

export const rootReducer = combineReducers({
    getFullListGameSlice,
    specifiedGameSlice,
})
