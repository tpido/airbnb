import { createSlice } from "@reduxjs/toolkit";

const detail = createSlice({
  name: "detail",
  initialState: {
    detailData: {},
  },
  reducers: {
    getDetailDataAction(state, { payload }) {
      state.detailData = payload;
    },
  },
});

export const { getDetailDataAction } = detail.actions;
export default detail.reducer;
