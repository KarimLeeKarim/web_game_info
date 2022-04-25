import { combineReducers } from '@reduxjs/toolkit'
import advertisementTabChangerSlice from './slices/advertisementTabChangerSlice';

export const rootReducer = combineReducers({
    advertisementTabChangerSlice,
})
