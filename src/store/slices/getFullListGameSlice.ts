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

export const getFullListData = createAsyncThunk(
	'games/getListGame',
	async (undefined, { rejectWithValue }) => {
		try {
			const response = await axios.get(`https://${API_HOST}/api/games`, {
				headers: {
					'X-RapidAPI-Host': API_HOST,
					'X-RapidAPI-Key': API_KEY,
				},
				params: {
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

const getFullListGameSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		// Example(state, { payload }) {
		// 	state.value = payload;
		// },
	},
	extraReducers: reducerChanger => {
		reducerChanger.addCase(getFullListData.pending, state => {
			state.isLoading = true;
		});
		reducerChanger.addCase(getFullListData.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = payload;
		});
		reducerChanger.addCase(getFullListData.rejected, (state, action: { payload: any }) => {
			state.isLoading = false;
			state.isError = true;
			state.isErrorData = action.payload;
		});
	},
});

// export const { Example } = getFullListGameSlice.actions;
export default getFullListGameSlice.reducer;
