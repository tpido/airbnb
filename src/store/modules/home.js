import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getHomeGoodPrice,
  getHomeHighScore,
  getHomeDiscount,
  getHomeRecommend,
  getHomeLongfor,
  getHomePlus,
} from "../../service";

export const fetchGoodPrice = createAsyncThunk(
  "goodPriceData",
  (payload, { dispatch }) => {
    getHomeGoodPrice().then((res) => {
      dispatch(getHomeGoodPriceAction(res));
    });
    getHomeHighScore().then((res) => {
      dispatch(getHighScoreAction(res));
    });
    getHomeDiscount().then((res) => {
      dispatch(getHomeDiscountAction(res));
    });
    getHomeRecommend().then((res) => {
      dispatch(getRecommendAction(res));
    });
    getHomeLongfor().then((res) => {
      dispatch(getLongForAction(res));
    });
    getHomePlus().then((res) => {
      dispatch(getHomePlusAction(res));
    });
  }
);

const home = createSlice({
  name: "home",
  initialState: {
    goodPriceData: {},
    highScoreData: {},
    discountData: {},
    recommendData: {},
    longForData: {},
    plusData: {},
  },

  reducers: {
    getHomeGoodPriceAction(state, { payload }) {
      state.goodPriceData = payload;
    },
    getHighScoreAction(state, { payload }) {
      state.highScoreData = payload;
    },
    getHomeDiscountAction(state, { payload }) {
      state.discountData = payload;
    },
    getRecommendAction(state, { payload }) {
      state.recommendData = payload;
    },
    getLongForAction(state, { payload }) {
      state.longForData = payload;
    },
    getHomePlusAction(state, { payload }) {
      state.plusData = payload;
    },
  },
});

export const {
  getHomeGoodPriceAction,
  getHighScoreAction,
  getHomeDiscountAction,
  getRecommendAction,
  getLongForAction,
  getHomePlusAction,
} = home.actions;
export default home.reducer;
