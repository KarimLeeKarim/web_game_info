import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { IAdvertisementTabChanger } from "../storeModels";

const initialState: any = {
  value: 0,
};

const advertisementTabChangerSlice = createSlice({
  name: "tabChanger",
  initialState,
  reducers: {
    tabChanger(state,{payload}) {
      state.value = payload;
    },
  },
});
export const { tabChanger } = advertisementTabChangerSlice.actions;

export default advertisementTabChangerSlice.reducer;