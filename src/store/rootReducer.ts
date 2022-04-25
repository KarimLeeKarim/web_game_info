import { combineReducers } from '@reduxjs/toolkit'
import getFullListGameSlice from './slices/getFullListGameSlice';

export const rootReducer = combineReducers({
    getFullListGameSlice,
})
