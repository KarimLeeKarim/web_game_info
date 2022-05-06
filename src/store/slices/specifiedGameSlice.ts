import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_HOST, API_KEY } from '../../constants/constants';
import { IInitialState } from '../storeModel';

const initialState: IInitialState = {
	data: [],
	isLoading: false,
	isError: false,
	isErrorData: {
		status: 0,
		data: {},
	},
};

export const getSpecifiedGame = createAsyncThunk(
	'specifiedGame/getGame',
	async (values: any, { rejectWithValue }) => {
		try {
			const response = await axios.get(`https://${API_HOST}/api/game`, {
				headers: {
					'X-RapidAPI-Host': API_HOST,
					'X-RapidAPI-Key': API_KEY,
				},
                params: {
                    id: +values,
					platform: 'browser',
				},
			});
			return response.data;
		} catch (error: any) {
			return rejectWithValue({
				status: error.response.status,
				data: error.response.data,
			});
		}
	},
);

const specifiedGameSlice = createSlice({
	name: 'specifiedGame',
	initialState,
	reducers: {
		// Example(state, { payload }) {
		// 	state.value = payload;
		// },
	},
	extraReducers: reducerChanger => {
		reducerChanger.addCase(getSpecifiedGame.pending, state => {
			state.isLoading = true;
		});
		reducerChanger.addCase(getSpecifiedGame.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = payload;
		});
		reducerChanger.addCase(getSpecifiedGame.rejected, (state, action: { payload: any }) => {
			state.isLoading = false;
			state.isError = true;
			state.isErrorData = action.payload;
		});
	},
});

// export const { Example } = specifiedGameSlice.actions;
export default specifiedGameSlice.reducer;
