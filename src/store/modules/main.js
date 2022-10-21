import { createSlice } from "@reduxjs/toolkit";

const main = createSlice({
  name: "main",
  initialState: {
    isFixed: true,
  },

  reducers: {
    changeFixedAction(state, { payload }) {
      state.isFixed = payload;
    },
  },
});

export const { changeFixedAction } = main.actions;
export default main.reducer;
